"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import type { GalleryImage } from "@/lib/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid({ images }: { images: readonly GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className="grid grid-cols-12 gap-3"
        style={{ gridAutoRows: "110px" }}
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Bild öffnen: ${img.alt}`}
            className={cn(
              "group relative overflow-hidden rounded-sm transition-transform duration-500 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
              img.className,
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={openIndex !== null}
        index={openIndex ?? 0}
        close={() => setOpenIndex(null)}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </>
  );
}
