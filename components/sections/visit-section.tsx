import { SectionLabel } from "@/components/ui/section-label";
import { getDayState, todayLabel } from "@/lib/hours";
import { SITE } from "@/lib/site";

export function VisitSection() {
  const dayState = getDayState();

  return (
    <section id="besuch" className="bg-terra px-6 py-24 text-cream lg:px-14 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionLabel className="text-cream/85">Besuch &amp; Öffnungszeiten</SectionLabel>
          <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em] text-cream">
            Kommen Sie
            <br />
            <em className="italic text-cream/85">vorbei.</em>
          </h2>

          <div className="mt-8 space-y-3.5 text-lg leading-relaxed">
            <p className="font-serif text-2xl italic">{SITE.address.street}</p>
            <p>
              {SITE.address.postalCode} {SITE.address.city}
              <br />
              {SITE.address.district} · {SITE.address.venue}
            </p>
          </div>

          {SITE.closedForEvents.active &&
            SITE.closedForEvents.dates.length > 0 && (
              <div className="mt-9 rounded-sm border border-cream/30 bg-cream/10 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em]">
                  <span aria-hidden>✱</span> Geschlossene Gesellschaft
                </div>
                <p className="mt-2 text-base leading-snug opacity-90">
                  An diesen Tagen sind wir für private Veranstaltungen reserviert:
                </p>
                <ul className="mt-2 space-y-1 font-serif text-xl italic">
                  {SITE.closedForEvents.dates.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            )}

          <div className="mt-9">
            <p className="mb-2 text-sm uppercase tracking-[0.14em] opacity-85">
              {todayLabel(dayState)}
            </p>
            <ul className="divide-y divide-cream/20">
              {SITE.hours.map((row) => (
                <li key={row.dayLabel} className={cnRow(row.closed)}>
                  <span className="font-serif text-xl">{row.dayLabel}</span>
                  <span className="tabular-nums">
                    {row.closed ? row.label : `${row.from} – ${row.to}`}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-snug opacity-85">
              Für Feierlichkeiten und Veranstaltungen sind nach Absprache andere
              Zeiten möglich. Sprechen Sie Mario an.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <SectionLabel className="text-cream/85">Tisch reservieren</SectionLabel>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.03em] text-cream">
            Rufen Sie uns
            <br />
            <em className="italic text-cream/85">einfach an.</em>
          </h2>

          <p className="mt-7 max-w-md text-lg leading-relaxed opacity-90">
            Reservierungen, Fragen zur Karte, private Feiern oder einfach ein kurzes
            Hallo — Mario nimmt sich für jedes Gespräch Zeit.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`tel:${SITE.contact.phoneFestnetzTel}`}
              className="block rounded-sm bg-cream/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-cream/15"
            >
              <div className="text-xs uppercase tracking-[0.14em] opacity-80">
                Festnetz
              </div>
              <div className="mt-1 font-serif text-3xl italic md:text-4xl">
                {SITE.contact.phoneFestnetz}
              </div>
            </a>

            <a
              href={`tel:${SITE.contact.phoneMobilTel}`}
              className="block rounded-sm bg-cream/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-cream/15"
            >
              <div className="text-xs uppercase tracking-[0.14em] opacity-80">
                Mobil — Mario direkt
              </div>
              <div className="mt-1 font-serif text-3xl italic md:text-4xl">
                {SITE.contact.phoneMobil}
              </div>
            </a>

            <a
              href={`mailto:${SITE.contact.email}`}
              className="block rounded-sm bg-cream/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-cream/15"
            >
              <div className="text-xs uppercase tracking-[0.14em] opacity-80">
                E-Mail
              </div>
              <div className="mt-1 font-serif text-2xl italic md:text-3xl">
                {SITE.contact.email}
              </div>
            </a>
          </div>

          <p className="mt-8 text-sm leading-snug opacity-80">
            Reservierungen am liebsten telefonisch — so können wir direkt klären
            ob alles passt und Sonderwünsche aufnehmen.
          </p>
        </div>
      </div>
    </section>
  );
}

function cnRow(closed?: boolean) {
  return [
    "grid grid-cols-[1fr_auto] items-center gap-6 py-4 text-base md:text-lg",
    closed ? "opacity-60" : "",
  ].join(" ");
}
