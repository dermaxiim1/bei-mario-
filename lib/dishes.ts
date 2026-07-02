export type Dish = {
  src: string;
  /** kurzer Gerichtsname für die Bild-Bildunterschrift */
  name: string;
  /** vollständige Bildbeschreibung für Screenreader + Lightbox */
  alt: string;
};

/** Einzelne Gerichte von der Tageskarte — Fotos aus Marios Küche. */
export const DISHES: Dish[] = [
  {
    src: "/images/tageskarte/braten-rotkohl.jpg",
    name: "Braten mit Rotkohl",
    alt: "Gebratenes Fleisch mit Rotkohl, Salzkartoffeln und Bratensoße",
  },
  {
    src: "/images/tageskarte/schnitzel-pilzrahm.jpg",
    name: "Schnitzel mit Pilzrahmsoße",
    alt: "Paniertes Schnitzel mit Pommes frites und Pilzrahmsoße",
  },
  {
    src: "/images/tageskarte/medaillons-gratin.jpg",
    name: "Medaillons mit Kartoffelgratin",
    alt: "Schweinemedaillons mit Kartoffelgratin, Pfifferlingen und Grillgemüse",
  },
  {
    src: "/images/tageskarte/gyros.jpg",
    name: "Gyros mit Pommes",
    alt: "Gyros mit Pommes frites, buntem Salat und Tzatziki",
  },
  {
    src: "/images/tageskarte/schnitzel-spargel.jpg",
    name: "Schnitzel mit Spargel",
    alt: "Schnitzel mit weißem Spargel, Salzkartoffeln und Sauce",
  },
  {
    src: "/images/tageskarte/fisch-ravioli.jpg",
    name: "Fisch mit Ravioli",
    alt: "Gebratener Fisch mit Ravioli, Kartoffeln und mediterranem Gemüse",
  },
  {
    src: "/images/tageskarte/currywurst.jpg",
    name: "Currywurst mit Pommes",
    alt: "Currywurst mit Pommes frites, Salat und Mayonnaise",
  },
  {
    src: "/images/tageskarte/braten-kloesse.jpg",
    name: "Braten mit Klößen",
    alt: "Braten mit Kartoffelklößen, Rotkohl und Bratensoße",
  },
  {
    src: "/images/tageskarte/lachstatar.jpg",
    name: "Lachstatar mit Mango",
    alt: "Lachstatar mit Mango, Kaviar und Reiscracker",
  },
  {
    src: "/images/tageskarte/bratwurst-pommes.jpg",
    name: "Bratwurst mit Pommes",
    alt: "Bratwurst in Soße mit Pommes frites und Beilagensalat",
  },
];
