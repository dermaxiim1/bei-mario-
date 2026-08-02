export type SiteHourBlock = {
  readonly dayLabel: string;
  readonly days: readonly number[];
  readonly closed?: boolean;
  readonly label?: string;
  readonly from?: string;
  readonly to?: string;
};

const HOURS: readonly SiteHourBlock[] = [
  { dayLabel: "Montag", days: [1], closed: true, label: "Ruhetag" },
  { dayLabel: "Dienstag", days: [2], from: "12:00", to: "19:00" },
  { dayLabel: "Mittwoch – Freitag", days: [3, 4, 5], from: "12:00", to: "19:30" },
  { dayLabel: "Samstag", days: [6], from: "12:00", to: "19:00" },
  { dayLabel: "Sonntag", days: [0], from: "12:00", to: "17:00" },
];

export const SITE = {
  name: "Bei Mario",
  tagline: "deutsche und asiatische Küche",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://bei-mario.vercel.app"),
  description:
    "Bei Mario in Hannover-List — deutsche und asiatische Küche im Gartenvereinsheim. Schnitzel, Curry, Tapas und mehr. Tisch reservieren unter 0511 631412.",
  owner: "Mario Wickremasinghe",
  founded: "1998",

  // Rechtliche Pflichtangaben (§ 5 DDG).
  // WICHTIG: Leere Felder werden im Impressum NICHT gerendert — so steht nie ein
  // Platzhalter live. Sobald Mario die Angabe liefert, hier eintragen; der Block
  // erscheint dann automatisch auf der Seite.
  legal: {
    // Rechtsform, z. B. "Einzelunternehmen". Leer = wird weggelassen.
    legalForm: "",
    // USt-IdNr. nach § 27a UStG, z. B. "DE123456789".
    vatId: "",
    // true, wenn Kleinunternehmer nach § 19 UStG (dann statt USt-IdNr. ein Hinweis).
    smallBusiness: false,
    // Registereintrag, z. B. "Amtsgericht Hannover, HRA 12345". Bei Einzelunternehmen
    // ohne Eintragung leer lassen.
    register: "",
    // Zuständige Behörde für die Gaststättenerlaubnis (§ 2 GastG) — nach
    // § 5 Abs. 1 Nr. 3 DDG anzugeben, weil die Tätigkeit zulassungspflichtig ist.
    supervisoryAuthority: "",
  },

  contact: {
    phoneFestnetz: "0511 631412",
    phoneFestnetzTel: "+49511631412",
    phoneMobil: "0171 6846350",
    phoneMobilTel: "+491716846350",
    email: "beimario@web.de",
    reservationEmail: "beimario@web.de",
  },

  address: {
    street: "Lister Damm 42",
    postalCode: "30163",
    city: "Hannover",
    district: "List",
    venue: "Gaststätte des KGV Tannenberg-Allee e.V.",
    googleMapsQuery: "Lister+Damm+42,+30163+Hannover",
    geo: { lat: 52.388, lng: 9.737 },
  },

  hours: HOURS,

  // Geschlossene Gesellschaft / private Veranstaltungen.
  // Tage oder Zeiträume einfach ergänzen bzw. entfernen; active steuert die Anzeige.
  closedForEvents: {
    active: false,
    dates: [] as readonly string[],
    reopen: "",
  },

  nav: [
    { href: "#geschichte", label: "Geschichte" },
    { href: "#karte", label: "Karte" },
    { href: "#gerichte", label: "Gerichte" },
    { href: "#bilder", label: "Feiern" },
    { href: "#veranstaltungen", label: "Veranstaltungen" },
    { href: "#besuch", label: "Besuch" },
  ] as const,

  social: {
    instagram: "",
    facebook: "",
  },
} as const;
