import Image from "next/image";

import { SITE } from "@/lib/site";

const HEADLINE_LINES: { words?: string[]; em?: string; suffix?: string }[] = [
  { words: ["Wie", "bei"] },
  { em: "Mama,", suffix: "nur" },
  { words: ["exotisch."] },
];

export function Hero() {
  return (
    <section className="relative grid min-h-screen items-center gap-10 px-6 pb-20 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-14 lg:pt-40">
      <div className="relative z-10">
        <div className="mb-7 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-soft">
          <span className="h-px w-7 bg-ink-soft" />
          Seit {SITE.founded} · {SITE.address.city}
          <span className="h-px w-7 bg-ink-soft" />
        </div>
        <h1 className="font-serif text-[clamp(56px,9.5vw,144px)] font-light leading-[0.92] tracking-[-0.04em] text-ink">
          {HEADLINE_LINES.map((line, i) => (
            <span key={i} className="block">
              {line.words?.map((word, j) => (
                <span key={`${i}-${j}`}>
                  <Word>{word}</Word>
                  {j < (line.words?.length ?? 0) - 1 && " "}
                </span>
              ))}
              {line.em && (
                <em className="font-normal italic text-terra">
                  <Word italic>{line.em}</Word>
                </em>
              )}
              {line.suffix && (
                <>
                  {" "}
                  <Word>{line.suffix}</Word>
                </>
              )}
            </span>
          ))}
        </h1>
        <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft md:text-xl">
          Schnitzel wie von der Mama und Curry mit Mango — bei uns kein Widerspruch,
          sondern Programm. Deutsche und asiatische Küche in entspannter, rustikaler
          Atmosphäre, wie es in einem Gartenvereinsheim sein soll.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#besuch"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium tracking-wider text-cream transition-all hover:-translate-y-0.5 hover:bg-terra"
          >
            Tisch reservieren <span aria-hidden>→</span>
          </a>
          <a
            href="#karte"
            className="text-sm text-ink underline decoration-1 underline-offset-4 transition-colors hover:text-terra"
          >
            Zur Speisekarte
          </a>
        </div>
        <div className="mt-7 inline-block rotate-[-3deg] font-hand text-2xl text-terra md:text-3xl">
          — und immer Zeit für ein Schwätzchen.
        </div>
      </div>

      <div className="relative h-[60vh] min-h-[480px] lg:h-[70vh]">
        <div className="absolute inset-0 overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_rgba(43,29,18,0.4)]">
          <Image
            src="/images/hero/aufschnitt-platte.jpg"
            alt="Aufschnitt-Platte mit feinen Köstlichkeiten bei Mario"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_45%]"
          />
        </div>
        <div className="absolute -right-4 -top-7 flex size-32 rotate-[8deg] flex-col items-center justify-center rounded-full border border-terra bg-paper text-center font-serif italic text-terra md:-right-7 md:size-36">
          <div className="text-[28px] leading-none md:text-[32px]">Bei Mario</div>
          <div className="mt-1.5 font-sans text-[10px] uppercase not-italic tracking-[0.2em]">
            Vereinsheim · seit {SITE.founded}
          </div>
        </div>
        <div className="absolute bottom-6 left-6 -rotate-2 bg-cream px-4 py-3 font-hand text-xl text-ink shadow-[0_6px_16px_rgba(0,0,0,0.1)] md:text-2xl">
          Spargel-Buffet · 18.–24. Juni
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  italic = false,
}: {
  children: React.ReactNode;
  italic?: boolean;
}) {
  return (
    <span
      className={
        "inline-block transition-[transform,color] duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:text-terra" +
        (italic ? " italic" : "")
      }
    >
      {children}
    </span>
  );
}
