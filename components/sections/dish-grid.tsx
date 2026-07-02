"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import type { Dish } from "@/lib/dishes";

export function DishGrid({ dishes }: { dishes: readonly Dish[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {dishes.map((dish, i) => (
          <button
            key={dish.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Bild öffnen: ${dish.name}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <Image
              src={dish.src}
              alt={dish.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={openIndex !== null}
        index={openIndex ?? 0}
        close={() => setOpenIndex(null)}
        slides={dishes.map((dish) => ({ src: dish.src, alt: dish.alt }))}
      />
    </>
  );
}
