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
          Herzlich
          <br />
          <em className="italic text-terra">Willkommen!</em>
        </h2>

        <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            Ich bin Mario Wickremasinghe und heiße Sie hier in meinem Restaurant
            herzlich willkommen. Ich komme ursprünglich aus Sri Lanka, lebe aber bereits
            seit meinem 19. Lebensjahr in Deutschland, habe eine Frau und zwei
            wundervolle Söhne.
          </p>
          <p>
            Ich bin gelernter Koch und möchte hier in der Gaststätte des KGV
            Tannenberg-Allee e.&nbsp;V. für meine Gäste einen Platz zum Wohlfühlen,
            Schlemmen und Genießen, zum Freunde treffen oder ruhigen Verweilen, aber
            auch zum Feiern und fröhlich sein, erschaffen. Kulinarisch biete ich dazu
            sowohl Gerichte aus der deutschen als auch aus der asiatischen Küche an.
          </p>
          <p>
            Es wird u.&nbsp;a. einen wöchentlich wechselnden Mittagstisch geben und
            bereits heute möchte ich Ihnen unten auf dieser Seite einen ersten Ausblick
            auf die geplanten Höhepunkte in der Zukunft geben. Natürlich würde ich mich
            auch freuen, Ihre privaten Familienfeiern (wie z.&nbsp;B. Geburtstagsfeiern,
            Geburtstagsfrühstück oder auch -brunch, Hochzeiten, Taufen, Konfirmationen,
            Trauerfeiern) ausrichten zu dürfen und diese speziellen Ereignisse damit für
            Sie zu etwas ganz Besonderem werden zu lassen.
          </p>
          <p>
            Bitte sprechen Sie mich gerne jederzeit an, wenn Sie Fragen, Wünsche oder
            Anregungen haben. Ich wünsche Ihnen eine angenehme Zeit bei uns und guten
            Appetit!
          </p>
        </div>

        <figure className="mt-10 border-l-2 border-terra/40 pl-6">
          <figcaption className="font-serif text-lg italic text-ink-soft">
            Herzlich, Ihr Mario Wickremasinghe und sein Team
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
