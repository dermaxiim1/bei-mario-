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
  { dayLabel: "Dienstag", days: [2], closed: true, label: "Ruhetag" },
  { dayLabel: "Mittwoch – Freitag", days: [3, 4, 5], from: "12:00", to: "19:30" },
  { dayLabel: "Samstag", days: [6], from: "12:00", to: "19:00" },
  { dayLabel: "Sonntag", days: [0], from: "12:00", to: "16:00" },
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
  owner: "Mario Wickremasinge",
  founded: "1998",

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

  nav: [
    { href: "#geschichte", label: "Geschichte" },
    { href: "#karte", label: "Karte" },
    { href: "#bilder", label: "Bilder" },
    { href: "#veranstaltungen", label: "Veranstaltungen" },
    { href: "#besuch", label: "Besuch" },
  ] as const,

  social: {
    instagram: "",
    facebook: "",
  },
} as const;
