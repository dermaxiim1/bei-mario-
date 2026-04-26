import { SectionLabel } from "@/components/ui/section-label";
import { EVENTS } from "@/lib/events";

export function EventsSection() {
  return (
    <section
      id="veranstaltungen"
      className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel>Was demnächst kommt</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]">
          Abende, die man
          <br />
          nicht <em className="italic text-terra">vergisst.</em>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <article
              key={event.title}
              className="relative rounded-sm border border-ink/10 bg-cream p-9 transition-transform duration-300 hover:-translate-y-1"
            >
              {event.date && (
                <div className="mb-3 font-serif text-lg italic text-terra">
                  {event.date}
                </div>
              )}
              <h3 className="font-serif text-2xl font-normal leading-tight">
                {event.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{event.desc}</p>
              {event.highlight && (
                <div className="mt-5 flex gap-3 rounded-sm bg-terra px-4 py-3 text-sm leading-snug text-cream">
                  <span aria-hidden className="mt-0.5 font-serif text-lg italic">
                    ✱
                  </span>
                  <span>
                    <strong className="font-semibold">Gratis Flasche Riesling</strong> —{" "}
                    {event.highlight.replace("Zur ", "").replace(" gratis.", ".")}
                  </span>
                </div>
              )}
              <div className="mt-6 text-xs uppercase tracking-[0.14em] text-terra">
                Auf Anfrage reservieren →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
