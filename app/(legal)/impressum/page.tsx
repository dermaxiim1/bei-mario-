import type { Metadata } from "next";

import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${SITE.name}, Hannover.`,
  robots: { index: true, follow: false },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-32 lg:py-40">
      <h1 className="mb-10 font-serif text-5xl font-light leading-none tracking-tight">
        Impressum
      </h1>

      <section className="space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">Angaben gemäß § 5 DDG</h2>
        <p>
          {SITE.name}
          <br />
          {SITE.owner}
          {SITE.legal.legalForm ? (
            <>
              <br />
              {SITE.legal.legalForm}
            </>
          ) : null}
          <br />
          {SITE.address.venue}
          <br />
          {SITE.address.street}
          <br />
          {SITE.address.postalCode} {SITE.address.city}
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">Kontakt</h2>
        <p>
          Telefon: {SITE.contact.phoneFestnetz}
          <br />
          Mobil: {SITE.contact.phoneMobil}
          <br />
          E-Mail: {SITE.contact.email}
        </p>
      </section>

      {SITE.legal.vatId || SITE.legal.smallBusiness ? (
        <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
          <h2 className="font-serif text-xl font-medium text-ink">Umsatzsteuer</h2>
          <p>
            {SITE.legal.vatId
              ? `Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: ${SITE.legal.vatId}`
              : "Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet."}
          </p>
        </section>
      ) : null}

      {SITE.legal.register ? (
        <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
          <h2 className="font-serif text-xl font-medium text-ink">Registereintrag</h2>
          <p>{SITE.legal.register}</p>
        </section>
      ) : null}

      {SITE.legal.supervisoryAuthority ? (
        <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
          <h2 className="font-serif text-xl font-medium text-ink">Aufsichtsbehörde</h2>
          <p>
            Gaststättenerlaubnis nach § 2 GastG, erteilt durch:
            <br />
            {SITE.legal.supervisoryAuthority}
          </p>
        </section>
      ) : null}

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p>
          {SITE.owner}
          <br />
          Anschrift wie oben
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Verbraucherstreitbeilegung
        </h2>
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
        </p>
      </section>
    </main>
  );
}
