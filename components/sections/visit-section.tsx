import { ReserveForm } from "@/components/sections/reserve-form";
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
            <p className="pt-3">
              <a
                href={`tel:${SITE.contact.phoneFestnetzTel}`}
                className="underline decoration-1 underline-offset-4"
              >
                {SITE.contact.phoneFestnetz}
              </a>
              <br />
              <a
                href={`tel:${SITE.contact.phoneMobilTel}`}
                className="underline decoration-1 underline-offset-4"
              >
                Mobil: {SITE.contact.phoneMobil}
              </a>
              <br />
              <a
                href={`mailto:${SITE.contact.email}`}
                className="underline decoration-1 underline-offset-4"
              >
                {SITE.contact.email}
              </a>
            </p>
          </div>

          <div className="mt-9">
            <p className="mb-2 text-sm uppercase tracking-[0.14em] opacity-85">
              {todayLabel(dayState)}
            </p>
            <ul className="divide-y divide-cream/20">
              {SITE.hours.map((row) => (
                <li
                  key={row.dayLabel}
                  className={cnRow(row.closed)}
                >
                  <span className="font-serif text-xl">{row.dayLabel}</span>
                  <span className="tabular-nums">
                    {row.closed ? row.label : `${row.from} – ${row.to}`}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-snug opacity-85">
              Für Feierlichkeiten und Veranstaltungen sind nach Absprache andere Zeiten
              möglich. Sprechen Sie Mario an.
            </p>
          </div>
        </div>

        <div>
          <SectionLabel className="text-cream/85">Tisch reservieren</SectionLabel>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.03em] text-cream">
            Wir halten Ihnen
            <br />
            einen <em className="italic text-cream/85">Platz frei.</em>
          </h2>
          <ReserveForm />
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
