export type Review = {
  text: string;
  author: string;
  source: string;
};

// Echte Google-Bewertungen (Stand Juli 2026, Ø 4,8★).
// Weitere Stimmen: einfach hier ergänzen — Reihenfolge = Anzeigereihenfolge.
export const REVIEWS: Review[] = [
  {
    text: "Super leckeres Essen und sehr freundlich.",
    author: "Thomas Züllich",
    source: "★★★★★ · Google",
  },
  {
    text: "Sehr schön in einer Gartenkolonie gelegen. Sehr freundliches Personal, abwechslungsreiche Wochenkarte — kinderfreundlich und barrierefrei.",
    author: "Achim Wolfram",
    source: "★★★★★ · Google",
  },
  {
    text: "Tolles Personal!",
    author: "Felix Wolf",
    source: "★★★★★ · Google",
  },
];
