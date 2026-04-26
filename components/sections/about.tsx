import Image from "next/image";

import { SectionLabel } from "@/components/ui/section-label";

export function About() {
  return (
    <section
      id="geschichte"
      className="grid items-center gap-16 bg-paper-dark px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-14 lg:py-32"
    >
      <div>
        <SectionLabel>Unsere Geschichte</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]">
          Mario, seine Frau
          <br />
          und ein <em className="italic text-terra">Schwätzchen.</em>
        </h2>

        <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            Vor über fünfundzwanzig Jahren hat Mario aus dem ehemaligen Vereinsheim ein
            kleines Wohnzimmer gemacht. Karierte Tischdecken, schwere Holzstühle,
            draußen die alten Apfelbäume.
          </p>
          <p>
            Drinnen kocht er, was er in seiner Heimat in Sri Lanka gelernt hat, was
            seine Frau aus Schwaben mitgebracht hat, und was die Gäste über die Jahre
            an Wünschen vorbeibrachten. Daraus ist eine Karte geworden, die es so
            nirgends gibt: Schnitzel und Curry, Tapas und Reis — und immer auf den
            Punkt.
          </p>
        </div>

        <figure className="mt-10 border-l-2 border-terra/40 pl-6">
          <blockquote className="text-base italic leading-relaxed text-ink-soft md:text-lg">
            &ldquo;Ich komme ursprünglich aus Sri Lanka — lebe aber bereits seit meinem
            19. Lebensjahr in Deutschland, und habe eine Frau und zwei wundervolle
            Söhne. Ich bin gelernter Koch und möchte hier in der Gaststätte des KGV
            Tannenberg-Allee e.V. für meine Gäste einen Platz zum Wohlfühlen, Schlemmen
            und Genießen, zum Freunden treffen oder ruhigen Verweilen, aber auch zum
            Feiern und fröhlich sein, erschaffen.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm text-ink-soft/80">
            — Ihr Mario Wickremasinge
          </figcaption>
        </figure>

        <div className="mt-9 -rotate-[1deg] font-hand text-3xl leading-snug text-terra md:text-4xl">
          &ldquo;Jeder Teller ist mit so viel Kunst angerichtet,
          <br />
          dass der Genuss schon vor dem Essen beginnt.&rdquo;
        </div>
        <p className="mt-2 text-sm text-ink-soft/80">— Renate, Stammgast seit 2001</p>
      </div>

      <div className="relative h-[440px] md:h-[520px] lg:h-[540px]">
        <div className="absolute left-0 top-0 h-[78%] w-[55%] -rotate-3 overflow-hidden rounded-sm shadow-[0_20px_50px_-20px_rgba(43,29,18,0.4)]">
          <Image
            src="/images/about/mario-kueche.jpg"
            alt="Mario in der Küche"
            fill
            sizes="(min-width: 1024px) 28vw, 60vw"
            className="object-cover object-[center_25%]"
          />
        </div>
        <div className="absolute bottom-0 right-0 h-[68%] w-[48%] rotate-2 overflow-hidden rounded-sm shadow-[0_20px_50px_-20px_rgba(43,29,18,0.4)]">
          <Image
            src="/images/about/curry-exotisch.jpg"
            alt="Asiatisches Curry mit Mango — Marios Geheimrezept"
            fill
            sizes="(min-width: 1024px) 24vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="absolute right-[28%] top-[38%] size-32 rotate-6 overflow-hidden rounded-full shadow-[0_20px_50px_-20px_rgba(43,29,18,0.4)] md:size-40">
          <Image
            src="/images/about/schnitzel-mama.jpg"
            alt="Schnitzel wie von der Mama"
            fill
            sizes="160px"
            className="object-cover object-[center_35%]"
          />
        </div>
      </div>
    </section>
  );
}
