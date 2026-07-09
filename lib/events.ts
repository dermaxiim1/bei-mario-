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

export const EVENTS: EventItem[] = [
  {
    title: "Brunch-Buffet",
    desc:
      "Ausgiebig in den Sonntag starten — herzhaftes Frühstück, frisch Gebackenes und süße Klassiker am Buffet. Getränke inklusive.",
    date: "Sonntag, 26. Juli · ab 10:30",
    highlight: "22 € pro Person · Getränke inklusive",
    poster: {
      image: "/images/events/poster-brunch-buffet.jpg",
      pdf: "/menu/poster-brunch-26-juli.pdf",
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
    title: "Eröffnungsfeier mit Oktoberfest",
    desc:
      "Wir starten in die Saison — Oktoberfest-Klassiker, Live-Stimmung und ein voller Biergarten.",
    date: "1.–4. Oktober · täglich ab 18 Uhr",
    poster: {
      image: "/images/events/poster-oktoberfest-2026.jpg",
      pdf: "/menu/poster-oktoberfest-1-4-okt.pdf",
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
    title: "Spargel-Saison",
    desc:
      "Eine Woche frischer Spargel aus der Region — klassisch mit Schinken oder mit asiatischem Twist. Täglich von 11 bis 22 Uhr durchgehend warme Küche.",
    date: "18.–24. Juni · täglich 11–22 Uhr",
    highlight: "Zur Spargelplatte ab 4 Personen eine Flasche Riesling gratis.",
    poster: {
      image: "/images/events/poster-spargel-saison.jpg",
      pdf: "/menu/poster-spargel-saison-18-24-juni.pdf",
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
];
