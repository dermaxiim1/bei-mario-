export type Review = {
  text: string;
  author: string;
  source: string;
};

// Platzhalter-Reviews aus dem Design — durch echte Stammgast-Stimmen ersetzen
export const REVIEWS: Review[] = [
  {
    text: "Jeder Teller ist mit so viel Kunst angerichtet, dass der Genuss schon vor dem Essen beginnt.",
    author: "Renate K.",
    source: "Stammgast seit 2001",
  },
  {
    text: "Mario nimmt sich immer Zeit für ein Schwätzchen. Hier fühlt man sich wie zu Hause.",
    author: "Klaus und Birgit M.",
    source: "Stammgäste",
  },
  {
    text: "Curry mit Mango neben Schnitzel mit Pommes — und beides auf den Punkt. Wie das geht? Frag Mario.",
    author: "Hannoversche Allgemeine",
    source: "Restaurantkritik",
  },
  {
    text: "Das Sommerfest im Garten ist jedes Jahr der Höhepunkt. Buffet wie aus dem Bilderbuch.",
    author: "Andreas H.",
    source: "Stammgast",
  },
];
