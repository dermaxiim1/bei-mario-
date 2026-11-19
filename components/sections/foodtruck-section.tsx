import Image from "next/image";

import { SectionLabel } from "@/components/ui/section-label";
import { FOODTRUCK } from "@/lib/foodtruck";

export function FoodtruckSection() {
  return (
    <section
      id="foodtruck"
      className="bg-cream px-6 py-24 lg:px-14 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="relative aspect-[1989/933] overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_rgba(43,29,18,0.4)] lg:aspect-[3/2]">
          <Image
            src="/images/foodtruck/kesel-kole-foodtruck.jpg"
            alt="Logo des Foodtrucks Kesel Kole, Sri Lanka Street Food, umrahmt von Bananenblättern"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionLabel>Neu: unser Foodtruck</SectionLabel>
          <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em] text-ink">
            Sri Lanka
            <br />
            <em className="italic text-terra">Street Food.</em>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            {FOODTRUCK.intro}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            {FOODTRUCK.kottu}
          </p>

          <h3 className="mt-9 font-serif text-2xl font-normal text-ink">
            Kottu-Varianten
          </h3>
          <ul className="mt-3 flex max-w-xl flex-wrap gap-x-7 gap-y-1 font-serif text-xl italic text-terra">
            {FOODTRUCK.variants.map((variant) => (
              <li key={variant}>{variant}</li>
            ))}
          </ul>

          <h3 className="mt-9 font-serif text-2xl font-normal text-ink">
            Foodtruck buchen
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
            Sie möchten Kesel Kole für Ihre Veranstaltung buchen? Rufen Sie an
            oder schreiben Sie uns.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`tel:${FOODTRUCK.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium tracking-wider text-cream transition-[background-color,transform] duration-200 ease-out hover:bg-terra active:scale-[0.97]"
            >
              Anrufen: {FOODTRUCK.phone}
            </a>
            <a
              href={`mailto:${FOODTRUCK.email}`}
              className="break-all text-sm text-ink underline decoration-1 underline-offset-4 transition-colors hover:text-terra"
            >
              {FOODTRUCK.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
