import { SITE } from "./site";

export type DayState =
  | { status: "open"; until: string }
  | { status: "closed"; nextOpen?: { dayLabel: string; from: string } };

function nowInBerlin(): Date {
  // Returns current wall-clock as a Date object in Europe/Berlin.
  // Reliable on the server during SSR.
  const fmt = new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  return new Date(
    Number(get("year")),
    Number(get("month")) - 1,
    Number(get("day")),
    Number(get("hour")),
    Number(get("minute")),
  );
}

export function getDayState(now: Date = nowInBerlin()): DayState {
  const dow = now.getDay(); // 0 = So
  const minutes = now.getHours() * 60 + now.getMinutes();
  const block = SITE.hours.find((b) => (b.days as readonly number[]).includes(dow));
  if (block && !block.closed && block.from && block.to) {
    const [fh, fm] = block.from.split(":").map(Number);
    const [th, tm] = block.to.split(":").map(Number);
    const start = fh * 60 + fm;
    const end = th * 60 + tm;
    if (minutes >= start && minutes < end) {
      return { status: "open", until: block.to };
    }
  }
  // Find next open block (today later, or upcoming day)
  const ordered = [...Array(7).keys()].map((i) => (dow + i) % 7);
  for (const d of ordered) {
    const b = SITE.hours.find((h) => (h.days as readonly number[]).includes(d));
    if (b && !b.closed && b.from && b.to) {
      // Same day later
      const [fh, fm] = b.from.split(":").map(Number);
      if (d === dow && fh * 60 + fm > minutes) {
        return { status: "closed", nextOpen: { dayLabel: "heute", from: b.from } };
      }
      if (d !== dow) {
        return { status: "closed", nextOpen: { dayLabel: b.dayLabel, from: b.from } };
      }
    }
  }
  return { status: "closed" };
}

export function todayLabel(state: DayState): string {
  if (state.status === "open") return `Heute geöffnet bis ${state.until}`;
  if (state.nextOpen) {
    const d = state.nextOpen.dayLabel;
    return d === "heute"
      ? `Heute geöffnet ab ${state.nextOpen.from}`
      : `Geschlossen — ${d} ab ${state.nextOpen.from}`;
  }
  return "Geschlossen";
}
