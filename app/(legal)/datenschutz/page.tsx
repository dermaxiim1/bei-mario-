import type { Metadata } from "next";

import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${SITE.name}.`,
  robots: { index: true, follow: false },
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-32 lg:py-40">
      <h1 className="mb-10 font-serif text-5xl font-light leading-none tracking-tight">
        Datenschutzerklärung
      </h1>

      <p className="rounded-sm bg-paper-dark/60 px-4 py-3 text-sm text-ink-soft/85">
        Dieser Entwurf ist ein Platzhalter und enthält noch keine vollständige
        DSGVO-konforme Datenschutzerklärung. Bitte vor Live-Gang anwaltlich
        gegenprüfen oder einen Generator wie e-recht24 / Datenschutz-Generator
        verwenden.
      </p>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Verantwortlicher
        </h2>
        <p>
          {SITE.owner}
          <br />
          {SITE.address.street}
          <br />
          {SITE.address.postalCode} {SITE.address.city}
          <br />
          E-Mail: {SITE.contact.email}
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Reservierungsanfragen
        </h2>
        <p>
          Über das Kontaktformular auf dieser Website können Sie eine
          Reservierungsanfrage senden. Die übermittelten Daten (Name, E-Mail-Adresse,
          Telefonnummer, Datum, Uhrzeit, Personenanzahl, optionale Wünsche) verarbeiten
          wir ausschließlich zur Beantwortung Ihrer Anfrage. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b DSGVO. Der Versand erfolgt über den Dienst Resend, Inc.
          (USA). Die Daten werden gelöscht, sobald sie für den Zweck der Erhebung nicht
          mehr erforderlich sind.
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Es können dabei Server-Logfiles
          (IP-Adresse, Zeitstempel, User-Agent) verarbeitet werden. Rechtsgrundlage:
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung
          Ihrer personenbezogenen Daten. Wenden Sie sich dazu bitte per E-Mail an{" "}
          {SITE.contact.email}.
        </p>
      </section>
    </main>
  );
}
