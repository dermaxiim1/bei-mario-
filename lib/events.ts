export type EventItem = {
  title: string;
  desc: string;
  date?: string;
  highlight?: string;
  poster?: {
    image: string;
    pdf: string;
  };
};

// Reihenfolge = Anzeige-Reihenfolge. Termine MIT Plakat stehen groß im Fokus, alle
// ohne Plakat laufen darunter als schlichte Liste "Weitere Anlässe im Jahr". Wiederkehrende
// Wochentermine stehen, falls vorhanden, vor den festen Terminen.
// Ist ein Termin vorbei: date auf "Termin auf Anfrage" setzen und poster/highlight
// entfernen. Die Plakat-Dateien bleiben im Repo und sind nächste Saison wiederverwendbar.
export const EVENTS: EventItem[] = [
  {
    title: "Adventsbrunch",
    desc:
      "Gemütlich in den vierten Advent starten: Brunch am Buffet bei Mario, die Getränke sind im Preis enthalten.",
    date: "Sonntag, 20. Dezember · ab 10:30",
    highlight: "22 € pro Person · Getränke inklusive",
    poster: {
      image: "/images/events/poster-adventsbrunch-20-dez.jpg",
      pdf: "/menu/poster-adventsbrunch-20-dez.pdf",
    },
  },
  {
    title: "Weihnachtsmenü",
    desc:
      "Festliches Essen in besonderer Atmosphäre am 1. und 2. Weihnachtstag. Bitte telefonisch oder persönlich anmelden.",
    date: "1. und 2. Weihnachtstag · 25. und 26. Dezember",
    highlight: "Hauptgang ab 25,50 €",
    poster: {
      image: "/images/events/poster-weihnachtsmenue-2026.jpg",
      pdf: "/menu/poster-weihnachtsmenue-2026.pdf",
    },
  },
  {
    title: "Silvesterparty 2027",
    desc:
      "Gemeinsam ins neue Jahr feiern: rustikales Buffet, Mitternachtssuppe und ein Glas Sekt zum Anstoßen.",
    date: "Donnerstag, 31. Dezember · ab 18:00",
    highlight: "30 € pro Person · Buffet, Mitternachtssuppe und 1 Glas Sekt",
    poster: {
      image: "/images/events/poster-silvester-31-dez.jpg",
      pdf: "/menu/poster-silvester-31-dez.pdf",
    },
  },
  {
    title: "Grünkohl-Buffet",
    desc:
      "Norddeutscher Klassiker am langen Tisch — Grünkohl wie er sein soll, mit Pinkel, Kassler und mehr.",
    date: "Dienstag, 1. Dezember · ab 12:30",
  },
  {
    title: "Sri Lanka Buffet",
    desc:
      "Marios Heimatküche zum Schlemmen — Currys, Sambols und Reisspezialitäten aus Sri Lanka am Buffet.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Spanische Tapas-Nacht",
    desc: "Paella, Tapas und Sangria. Anmeldung telefonisch bei Mario erbeten.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Rippchen zum Sattessen",
    desc:
      "Zarte Rippchen vom Grill, so viel Sie mögen — dazu frischer Salat und Baguette. Ein Abend für alle, die es herzhaft mögen.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Oktoberfest",
    desc:
      "Großes Oktoberfest-Buffet mit bayerischen Spezialitäten, Bier und Schnaps — Tracht gern gesehen.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Sonntags-Brunch",
    desc:
      "Ausgiebig in den Sonntag starten — herzhaftes Frühstück, frisch Gebackenes und süße Klassiker am Buffet.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Traditionelles Osteressen",
    desc: "Lamm, Spargel und alles, was zu Ostern auf den Tisch gehört — am Buffet oder à la carte.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Spargel-Saison",
    desc:
      "Eine Woche frischer Spargel aus der Region — klassisch mit Schinken oder mit asiatischem Twist.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Gambas satt essen",
    desc:
      "Gambas aus der Pfanne, in Knoblauch und Chili — so oft Sie nachlegen möchten. Dazu Baguette und ein Glas Wein.",
    date: "Termin auf Anfrage",
  },
  {
    title: "Spanferkel-Woche",
    desc:
      "Knuspriges Spanferkel frisch vom Holzkohlegrill, große Grillplatten und Beilagen aus dem Garten.",
    date: "Termin auf Anfrage",
  },
];
