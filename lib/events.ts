export type EventItem = {
  title: string;
  desc: string;
  date?: string;
  highlight?: string;
};

export const EVENTS: EventItem[] = [
  {
    title: "Eröffnungsfeier mit Oktoberfest",
    desc:
      "Wir starten in die Saison — Oktoberfest-Klassiker, Live-Stimmung und ein voller Biergarten.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Sri Lanka Buffet",
    desc:
      "Marios Heimatküche zum Schlemmen — Currys, Sambols und Reisspezialitäten aus Sri Lanka am Buffet.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Grünkohl mit Schlachteplatte",
    desc:
      "Norddeutscher Klassiker am langen Tisch — Grünkohl wie er sein soll, mit Pinkel, Kassler und mehr.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Weihnachtsbuffet",
    desc: "Festlich gedeckt mit Wild, Braten und süßem Finale. Reservierung empfohlen.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Traditionelles Osteressen",
    desc: "Lamm, Spargel und alles, was zu Ostern auf den Tisch gehört — am Buffet oder à la carte.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Spargelessen Buffet",
    desc:
      "Frischer Spargel aus der Region — klassisch mit Schinken oder mit asiatischem Twist.",
    date: "Termin auf Anfrage",
    highlight: "Zur Spargelplatte ab 4 Personen eine Flasche Riesling gratis.",
  },
  {
    title: "Sommerfest mit Spanferkel",
    desc:
      "Spanferkel vom Holzkohlegrill, Beilagen aus dem Garten — Grillspezialitäten den ganzen Abend.",
    date: "Termin auf Anfrage",
    highlight: "Zur Grillplatte ab 4 Personen eine Flasche Riesling gratis.",
  },
  {
    title: "Spanische Tapas Tage",
    desc: "Eine Woche lang Tapas-Karte erweitert — Sangria, Wein und Live-Atmosphäre.",
    date: "Termin auf Anfrage",
  },
];
