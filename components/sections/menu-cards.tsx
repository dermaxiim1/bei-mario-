import { SectionLabel } from "@/components/ui/section-label";

const CARDS = [
  {
    href: "/menu/speisekarte-2026.pdf",
    eyebrow: "PDF · Karte zum Mitnehmen",
    title: "Speisekarte",
    sub: "Alle Gerichte, Tapas & Getränke",
  },
  {
    href: "/menu/wochenkarte-aktuell.pdf",
    eyebrow: "PDF · diese Woche",
    title: "Wochenkarte",
    sub: "25.–30. Mai 2026 · Mittagstisch",
  },
  {
    href: "/menu/spargelkarte-2026.pdf",
    eyebrow: "PDF · Saisonal",
    title: "Spargelkarte",
    sub: "Frisch & regional · solange Saison",
  },
];

export function MenuCards() {
  return (
    <section id="karte" className="bg-paper px-6 py-20 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Speisekarten</SectionLabel>
            <h2 className="font-serif text-[clamp(36px,5vw,72px)] font-light leading-none tracking-[-0.03em]">
              Karten zum
              <br />
              <em className="italic text-terra">Mitnehmen.</em>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-soft">
            Alle Karten als PDF — drucken, auf dem Handy zeigen, oder beim nächsten
            Besuch im Restaurant in die Hand bekommen.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {CARDS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-sm border border-ink/15 bg-paper-dark/40 px-6 py-6 transition hover:-translate-y-0.5 hover:border-terra"
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-ink-soft/70">
                {c.eyebrow}
              </div>
              <div className="mt-1.5 font-serif text-2xl font-medium text-ink">
                {c.title}
              </div>
              <div className="mt-1 text-sm text-ink-soft">{c.sub}</div>
              <div className="mt-4 text-xs uppercase tracking-[0.15em] text-terra/70 transition group-hover:text-terra">
                Öffnen →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
