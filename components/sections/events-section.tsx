import Image from "next/image";

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
              className="relative flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-cream transition-transform duration-300 hover:-translate-y-1"
            >
              {event.poster && (
                <a
                  href={event.poster.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[2/3] w-full overflow-hidden bg-paper-dark"
                  aria-label={`Plakat ${event.title} als PDF öffnen`}
                >
                  <Image
                    src={event.poster.image}
                    alt={`Plakat ${event.title}`}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-cream">
                    <span>Plakat als PDF</span>
                    <span aria-hidden>↗</span>
                  </div>
                </a>
              )}
              <div className="flex flex-1 flex-col p-9">
                {event.date && (
                  <div className="mb-3 font-serif text-lg italic text-terra">
                    {event.date}
                  </div>
                )}
                <h3 className="font-serif text-2xl font-normal leading-tight">
                  {event.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {event.desc}
                </p>
                {event.highlight && (
                  <div className="mt-5 flex gap-3 rounded-sm bg-terra px-4 py-3 text-sm leading-snug text-cream">
                    <span aria-hidden className="mt-0.5 font-serif text-lg italic">
                      ✱
                    </span>
                    <span>{event.highlight}</span>
                  </div>
                )}
                <div className="mt-auto pt-6 text-xs uppercase tracking-[0.14em] text-terra">
                  {event.poster
                    ? "Telefonisch reservieren: 0171 6846350"
                    : "Auf Anfrage reservieren →"}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
