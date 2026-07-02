import { SectionLabel } from "@/components/ui/section-label";
import { DISHES } from "@/lib/dishes";

import { DishGrid } from "./dish-grid";

export function TageskarteSection() {
  return (
    <section
      id="gerichte"
      className="bg-ink px-6 py-24 text-cream lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel className="text-gold">Von der Tageskarte</SectionLabel>
            <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em] text-cream">
              Frisch auf den
              <br />
              <em className="italic text-gold">Teller.</em>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-cream/70">
            Ein kleiner Vorgeschmack aus Marios Küche — täglich frisch zubereitet
            und wöchentlich wechselnd. Was davon auf der Karte steht, verrät die
            aktuelle Wochenkarte.
          </p>
        </div>

        <DishGrid dishes={DISHES} />
      </div>
    </section>
  );
}
