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
        <h2 className="font-serif text-xl font-medium text-ink">Angaben gemäß § 5 TMG</h2>
        <p>
          {SITE.name}
          <br />
          {SITE.owner}
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

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p>
          {SITE.owner}
          <br />
          Adresse wie oben
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">Hinweise</h2>
        <p className="rounded-sm bg-paper-dark/60 px-4 py-3 text-sm text-ink-soft/85">
          Dieser Impressum-Entwurf enthält Platzhalter — bitte vor Live-Schaltung mit
          tatsächlicher Umsatzsteuer-ID, gewerblicher Registrierung sowie evtl.
          Verweisen auf die EU-Streitbeilegungs-Plattform und Aufsichtsbehörde
          ergänzen.
        </p>
      </section>
    </main>
  );
}
