import { SectionLabel } from "@/components/ui/section-label";
import { GALLERY } from "@/lib/gallery";

import { GalleryGrid } from "./gallery-grid";

export function GallerySection() {
  return (
    <section id="bilder" className="bg-ink px-6 py-24 text-cream lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel className="text-gold">Eindrücke</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em] text-cream">
          Vom Garten
          <br />
          auf den <em className="italic text-gold">Teller.</em>
        </h2>
        <div className="mt-12">
          <GalleryGrid images={GALLERY} />
        </div>
      </div>
    </section>
  );
}
