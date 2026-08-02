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

      <p className="text-base leading-relaxed text-ink-soft">
        Wir freuen uns über Ihren Besuch auf unserer Website. Der Schutz Ihrer
        personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie
        gemäß Art. 13 DSGVO darüber, welche Daten beim Besuch dieser Website
        verarbeitet werden.
      </p>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Verantwortlicher
        </h2>
        <p>
          {SITE.owner}
          <br />
          {SITE.address.venue}
          <br />
          {SITE.address.street}
          <br />
          {SITE.address.postalCode} {SITE.address.city}
          <br />
          Telefon: {SITE.contact.phoneFestnetz}
          <br />
          E-Mail: {SITE.contact.email}
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Keine Cookies, kein Tracking
        </h2>
        <p>
          Diese Website setzt keine Cookies, bindet keine Analyse- oder
          Tracking-Dienste ein und erstellt keine Nutzerprofile. Es findet keine
          Weitergabe Ihrer Daten zu Werbezwecken statt. Aus diesem Grund ist auch
          kein Einwilligungsbanner erforderlich.
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Hosting und Server-Logfiles
        </h2>
        <p>
          Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133, Covina,
          CA 91723, USA gehostet. Beim Aufruf der Website verarbeitet Vercel
          technisch notwendige Zugriffsdaten in Server-Logfiles: IP-Adresse,
          Datum und Uhrzeit des Abrufs, aufgerufene Seite, übertragene Datenmenge,
          Browsertyp und Betriebssystem sowie die zuvor besuchte Seite.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
          Interesse liegt im technisch fehlerfreien und sicheren Betrieb der
          Website. Die Logfiles werden nach kurzer Zeit automatisch gelöscht und
          nicht mit anderen Datenquellen zusammengeführt.
        </p>
        <p>
          Die Verarbeitung findet auch in den USA und damit in einem Drittland
          statt. Als Garantien im Sinne des Art. 46 DSGVO bestehen die
          EU-Standardvertragsklauseln (2021), die Bestandteil des
          Auftragsverarbeitungsvertrags mit Vercel sind; Vercel Inc. ist zudem
          nach dem EU-U.S. Data Privacy Framework zertifiziert (Art. 45 DSGVO).
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Technische Betreuung
        </h2>
        <p>
          Mit der Erstellung und technischen Pflege dieser Website haben wir
          Maxim Mihailov, Webdesign &amp; Entwicklung, Hannover, als
          Auftragsverarbeiter nach Art. 28 DSGVO beauftragt. Vercel Inc. wird
          dabei als Unterauftragsverarbeiter tätig.
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">Schriftarten</h2>
        <p>
          Zur einheitlichen Darstellung verwenden wir Schriftarten, die beim
          Erstellen der Website heruntergeladen und von unserem eigenen Server
          ausgeliefert werden. Beim Aufruf der Seite wird keine Verbindung zu
          Servern von Google aufgebaut; es werden keine Daten an Google übermittelt.
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Kontaktaufnahme
        </h2>
        <p>
          Diese Website enthält kein Kontakt- oder Reservierungsformular.
          Reservierungen und Anfragen laufen ausschließlich telefonisch oder per
          E-Mail. Wenn Sie uns kontaktieren, verarbeiten wir die von Ihnen
          mitgeteilten Daten (etwa Name, Telefonnummer, E-Mail-Adresse sowie
          Angaben zu Ihrer Reservierung) ausschließlich zur Bearbeitung Ihres
          Anliegens.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf
          den Abschluss oder die Durchführung eines Vertrags gerichtet ist,
          andernfalls Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
          Beantwortung von Anfragen). Wir löschen die Daten, sobald sie für den
          Zweck der Erhebung nicht mehr erforderlich sind und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft über die zu Ihrer Person
          gespeicherten Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16 DSGVO),
          auf Löschung (Art. 17 DSGVO), auf Einschränkung der Verarbeitung
          (Art. 18 DSGVO) sowie auf Datenübertragbarkeit (Art. 20 DSGVO).
        </p>
        <p>
          Verarbeiten wir Daten auf Grundlage eines berechtigten Interesses,
          haben Sie zudem das Recht, dieser Verarbeitung aus Gründen, die sich
          aus Ihrer besonderen Situation ergeben, jederzeit zu widersprechen
          (Art. 21 DSGVO). Erteilte Einwilligungen können Sie jederzeit mit
          Wirkung für die Zukunft widerrufen.
        </p>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an{" "}
          {SITE.contact.email}.
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Beschwerderecht bei der Aufsichtsbehörde
        </h2>
        <p>
          Unbeschadet anderer Rechtsbehelfe haben Sie nach Art. 77 DSGVO das
          Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für
          uns zuständig ist:
        </p>
        <p>
          Die Landesbeauftragte für den Datenschutz Niedersachsen
          <br />
          Prinzenstraße 5, 30159 Hannover
          <br />
          lfd.niedersachsen.de
        </p>
      </section>

      <section className="mt-9 space-y-3 text-base leading-relaxed text-ink-soft">
        <h2 className="font-serif text-xl font-medium text-ink">
          Automatisierte Entscheidungsfindung
        </h2>
        <p>
          Eine automatisierte Entscheidungsfindung einschließlich Profiling nach
          Art. 22 DSGVO findet nicht statt.
        </p>
      </section>

      <p className="mt-9 text-sm text-ink-soft/85">Stand: August 2026</p>
    </main>
  );
}
