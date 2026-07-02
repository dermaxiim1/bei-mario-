import { SectionLabel } from "@/components/ui/section-label";
import { GALLERY } from "@/lib/gallery";

import { GalleryGrid } from "./gallery-grid";

export function GallerySection() {
  return (
    <section id="bilder" className="bg-ink px-6 py-24 text-cream lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel className="text-gold">Feiern &amp; Catering</SectionLabel>
            <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em] text-cream">
              Feste, die man
              <br />
              gern <em className="italic text-gold">feiert.</em>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-cream/70">
            Ob Familienfeier, Hochzeit oder Betriebsfest — von der Paella-Pfanne
            bis zum Sektempfang richten wir Ihre Veranstaltung ganz nach Ihren
            Wünschen aus.
          </p>
        </div>

        <GalleryGrid images={GALLERY} />
      </div>
    </section>
  );
}
