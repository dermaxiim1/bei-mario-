"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";

import { SITE } from "@/lib/site";
import { getSupabaseAdmin } from "@/lib/supabase";

const reserveSchema = z.object({
  guests: z.string().min(1).max(3),
  date: z.string().min(1),
  time: z.string().min(1),
  name: z.string().min(2).max(120),
  phone: z.string().min(4).max(40),
  email: z.string().email(),
  notes: z.string().max(500).optional().default(""),
});

export type ReserveInput = z.infer<typeof reserveSchema>;

export type ReserveResult =
  | { ok: true }
  | {
      ok: false;
      error: string;
      fieldErrors?: Partial<Record<keyof ReserveInput, string>>;
    };

export async function reserveAction(input: ReserveInput): Promise<ReserveResult> {
  const parsed = reserveSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ReserveInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ReserveInput;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, error: "Bitte prüfen Sie Ihre Angaben.", fieldErrors };
  }

  const data = parsed.data;
  const dateLabel = formatGermanDate(data.date);

  // 1) Persist to Supabase (best-effort — never block the user if DB is down)
  await persistReservation(data).catch((err) => {
    console.error("[reserve] supabase insert failed:", err);
  });

  // 2) Send mails (Mario + Gast)
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[reserve] RESEND_API_KEY not set — submission logged, no mail sent.");
    console.info("[reserve] payload:", data);
    return { ok: true };
  }

  const resend = new Resend(apiKey);
  const fromAddress =
    process.env.RESEND_FROM ?? "Bei Mario <reservierung@bei-mario.de>";

  try {
    await Promise.all([
      // a) Mario bekommt die Reservierungs-Anfrage
      resend.emails.send({
        from: fromAddress,
        to: [SITE.contact.reservationEmail],
        replyTo: data.email,
        subject: `Reservierung — ${data.name} · ${dateLabel} ${data.time} · ${data.guests}P`,
        text: marioMail(data, dateLabel),
      }),
      // b) Gast bekommt Eingangsbestätigung
      resend.emails.send({
        from: fromAddress,
        to: [data.email],
        replyTo: SITE.contact.reservationEmail,
        subject: `Ihre Reservierungsanfrage bei Bei Mario · ${dateLabel} ${data.time}`,
        text: guestMail(data, dateLabel),
      }),
    ]);
    return { ok: true };
  } catch (err) {
    console.error("[reserve] resend failed:", err);
    return {
      ok: false,
      error:
        "Versand fehlgeschlagen. Bitte rufen Sie uns an oder versuchen es später erneut.",
    };
  }
}

async function persistReservation(data: ReserveInput) {
  const sb = getSupabaseAdmin();
  if (!sb) {
    console.warn("[reserve] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set — skipping DB insert.");
    return;
  }

  const h = await headers();
  const userAgent = h.get("user-agent") ?? null;
  const ip =
    h.get("x-forwarded-for")?.split(",")[0].trim() ??
    h.get("x-real-ip") ??
    null;

  const { error } = await sb.from("reservations").insert({
    guests: Number.parseInt(data.guests.replace(/\D/g, ""), 10) || 1,
    date: data.date,
    time: data.time,
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email.trim().toLowerCase(),
    notes: data.notes?.trim() || null,
    user_agent: userAgent,
    ip,
  });
  if (error) throw error;
}

function formatGermanDate(iso: string): string {
  // ISO "YYYY-MM-DD" → "Mo, 12.06.2026"
  try {
    const d = new Date(iso + "T12:00:00");
    return new Intl.DateTimeFormat("de-DE", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(d);
  } catch {
    return iso;
  }
}

function marioMail(d: ReserveInput, dateLabel: string): string {
  return [
    "Neue Reservierungsanfrage über die Website",
    "",
    `Personen:    ${d.guests}`,
    `Datum:       ${dateLabel}`,
    `Uhrzeit:     ${d.time} Uhr`,
    `Name:        ${d.name}`,
    `Telefon:     ${d.phone}`,
    `E-Mail:      ${d.email}`,
    d.notes ? `Anlass / Wünsche: ${d.notes}` : "",
    "",
    "→ Bitte beim Gast telefonisch oder per Antwort auf diese Mail bestätigen.",
    "",
    `Eingegangen über ${SITE.url}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function guestMail(d: ReserveInput, dateLabel: string): string {
  return [
    `Liebe / Lieber ${d.name},`,
    "",
    "vielen Dank für Ihre Reservierungsanfrage bei Bei Mario.",
    "Wir haben die folgenden Daten erhalten:",
    "",
    `  Personen:  ${d.guests}`,
    `  Datum:     ${dateLabel}`,
    `  Uhrzeit:   ${d.time} Uhr`,
    d.notes ? `  Wünsche:   ${d.notes}` : "",
    "",
    "Wir prüfen Ihre Anfrage und bestätigen sie kurzfristig telefonisch oder per E-Mail.",
    "Bei dringenden Fragen erreichen Sie uns unter:",
    "",
    `  Telefon: ${SITE.contact.phoneFestnetz}`,
    `  Mobil:   ${SITE.contact.phoneMobil}`,
    "",
    "Wir freuen uns auf Sie!",
    "",
    "Herzliche Grüße",
    "Mario Wickremasinge",
    `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`,
    SITE.url,
  ]
    .filter(Boolean)
    .join("\n");
}
