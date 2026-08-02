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

// Reihenfolge = Anzeige-Reihenfolge: erst der wöchentliche Gambas-Freitag, dann die
// Termine mit festem Datum (chronologisch, mit Plakat), danach die wiederkehrenden
// Anlässe "auf Anfrage".
// Ist ein Termin vorbei: date auf "Termin auf Anfrage" setzen und poster/highlight
// entfernen. Die Plakat-Dateien bleiben im Repo und sind nächste Saison wiederverwendbar.
export const EVENTS: EventItem[] = [
  {
    title: "Gambas satt essen",
    desc:
      "Jeden Freitagabend Gambas aus der Pfanne, in Knoblauch und Chili — so oft Sie nachlegen möchten. Dazu Baguette und ein Glas Wein.",
    date: "Jeden Freitag · ab 18 Uhr",
    highlight: "18,50 € pro Person · ab 4 Personen eine Flasche Wein gratis.",
    poster: {
      image: "/images/events/poster-gambas-freitags.jpg",
      pdf: "/menu/poster-gambas-freitags.pdf",
    },
  },
  {
    title: "Spanferkel-Woche",
    desc:
      "Eine ganze Woche knuspriges Spanferkel frisch vom Holzkohlegrill, große Grillplatten und Beilagen aus dem Garten — jeden Abend.",
    date: "18.–24. August · täglich 18–22 Uhr",
    highlight: "Zur Grillplatte ab 4 Personen eine Flasche Wein gratis.",
    poster: {
      image: "/images/events/poster-spanferkel-woche.jpg",
      pdf: "/menu/poster-spanferkel-18-24-aug.pdf",
    },
  },
  {
    title: "Sri Lanka Buffet",
    desc:
      "Marios Heimatküche zum Schlemmen — Currys, Sambols und Reisspezialitäten aus Sri Lanka am Buffet.",
    date: "Samstag, 29. August · ab 18:00",
    highlight: "28 € pro Person · inklusive Welcome Drink",
    poster: {
      image: "/images/events/poster-sri-lanka-buffet.jpg",
      pdf: "/menu/poster-sri-lanka-buffet-29-aug.pdf",
    },
  },
  {
    title: "Spanische Tapas-Nacht",
    desc:
      "Paella, Tapas und Sangria — dazu DJ Lopez auflegt und ein halbstündiger Salsa-Schnupperkurs. Anmeldung telefonisch bei Mario erbeten.",
    date: "Sonntag, 30. August · ab 18:00",
    highlight: "Zur Tapasplatte ab 4 Personen eine Flasche spanischer Wein gratis.",
    poster: {
      image: "/images/events/poster-spanische-tapas.jpg",
      pdf: "/menu/poster-spanische-tapas-30-aug.pdf",
    },
  },
  {
    title: "Rippchen zum Sattessen",
    desc:
      "Zarte Rippchen vom Grill, so viel Sie mögen — dazu frischer Salat und Baguette. Ein Abend für alle, die es herzhaft mögen.",
    date: "Samstag, 5. September · ab 12:30",
    highlight: "24 € zum Sattessen · als einzelne Portion 16 €",
    poster: {
      image: "/images/events/poster-rippchen-5-sep.jpg",
      pdf: "/menu/poster-rippchen-5-sep.pdf",
    },
  },
  {
    title: "Oktoberfest 2026",
    desc:
      "Großes Oktoberfest-Buffet mit bayerischen Spezialitäten, Bier und Schnaps — Tracht gern gesehen.",
    date: "Samstag, 3. Oktober · ab 13:00",
    highlight: "26,50 € pro Person · Reservierung empfohlen",
    poster: {
      image: "/images/events/poster-oktoberfest-3-okt.jpg",
      pdf: "/menu/poster-oktoberfest-3-okt.pdf",
    },
  },
  {
    title: "Sonntags-Brunch",
    desc:
      "Ausgiebig in den Sonntag starten — herzhaftes Frühstück, frisch Gebackenes und süße Klassiker am Buffet.",
    date: "Sonntag, 18. Oktober · ab 10:30",
    highlight: "22 € pro Person",
    poster: {
      image: "/images/events/poster-brunch-18-okt.jpg",
      pdf: "/menu/poster-brunch-18-okt.pdf",
    },
  },
  {
    title: "Grünkohl-Buffet",
    desc:
      "Norddeutscher Klassiker am langen Tisch — Grünkohl wie er sein soll, mit Pinkel, Kassler und mehr.",
    date: "Dienstag, 1. Dezember · ab 12:30",
    highlight: "25 € pro Person am Buffet · 16,50 € als Tellergericht",
    poster: {
      image: "/images/events/poster-gruenkohl-1-dez.jpg",
      pdf: "/menu/poster-gruenkohl-1-dez.pdf",
    },
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
    title: "Spargel-Saison",
    desc:
      "Eine Woche frischer Spargel aus der Region — klassisch mit Schinken oder mit asiatischem Twist.",
    date: "Termin auf Anfrage",
  },
];
