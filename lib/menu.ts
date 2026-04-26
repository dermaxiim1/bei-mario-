export type MenuTag =
  | "Vegetarisch"
  | "Vegan"
  | "Asiatisch"
  | "Klassiker"
  | "Spanisch"
  | "Mit Pommes"
  | "Süß"
  | "Mamas Küche"
  | "Scharf";

export type MenuCategoryId =
  | "hauptgerichte"
  | "burger"
  | "salate"
  | "tapas"
  | "kinder"
  | "getraenke"
  | "bar";

export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  tags?: MenuTag[];
  cat: MenuCategoryId;
};

export const MENU_CATEGORIES: { id: MenuCategoryId | "alle"; label: string }[] = [
  { id: "alle", label: "Alles zeigen" },
  { id: "hauptgerichte", label: "Hauptgerichte" },
  { id: "burger", label: "Burger & Currywurst" },
  { id: "salate", label: "Salate & Suppe" },
  { id: "tapas", label: "Tapas" },
  { id: "kinder", label: "Kinder" },
  { id: "bar", label: "Cocktails & Bar" },
];

export const MENU: MenuItem[] = [
  // Hauptgerichte
  {
    cat: "hauptgerichte",
    name: "Schweineschnitzel",
    desc: "Mit Pommes, Kroketten oder Bratkartoffeln, dazu Pilzsoße oder Sambalsoße und Salat",
    price: "15,60",
    tags: ["Klassiker", "Mamas Küche"],
  },
  {
    cat: "hauptgerichte",
    name: "Schweinerücken Steak Hawaii",
    desc: "Mit Ananas und Käse überbacken, Currysoße und Coleslaw-Salat",
    price: "15,00",
    tags: ["Klassiker"],
  },
  {
    cat: "hauptgerichte",
    name: "Thai Curry mit Hähnchen",
    desc: "Hähnchen in Zitronensoße auf Jasminreis",
    price: "15,60",
    tags: ["Asiatisch"],
  },
  {
    cat: "hauptgerichte",
    name: "Veganes Curry",
    desc: "Auf Jasminreis",
    price: "15,60",
    tags: ["Asiatisch", "Vegan"],
  },
  {
    cat: "hauptgerichte",
    name: "Rindfleisch Teriyaki",
    desc: "Mit Bambus, Möhren und Paprika in Teriyakisoße, dazu Reis",
    price: "16,50",
    tags: ["Asiatisch"],
  },
  {
    cat: "hauptgerichte",
    name: "Garnelen in Knoblauchsoße",
    desc: "Mit Baguette",
    price: "12,50",
    tags: ["Asiatisch"],
  },
  {
    cat: "hauptgerichte",
    name: "Schafskäse",
    desc: "In Peperoni-Knoblauchsoße",
    price: "8,80",
    tags: ["Vegetarisch", "Scharf"],
  },

  // Burger & Currywurst
  {
    cat: "burger",
    name: "Beef Burger",
    desc: "Mit Balsamicozwiebeln, Käse, Salat und Pommes",
    price: "12,50",
    tags: ["Klassiker", "Mit Pommes"],
  },
  {
    cat: "burger",
    name: "Veggie Burger",
    desc: "Mit Guacamole, Salat und Pommes",
    price: "13,50",
    tags: ["Vegetarisch", "Mit Pommes"],
  },
  {
    cat: "burger",
    name: "Currywurst Klassisch",
    desc: "Klassisch serviert mit Pommes",
    price: "10,00",
    tags: ["Klassiker", "Mit Pommes"],
  },
  {
    cat: "burger",
    name: "Currywurst Mexikanisch",
    desc: "Mit Mais, Zwiebeln und Jalapeños",
    price: "10,00",
    tags: ["Mit Pommes", "Scharf"],
  },
  {
    cat: "burger",
    name: "Currywurst Dänisch",
    desc: "Mit Gurken und Röstzwiebeln",
    price: "10,00",
    tags: ["Mit Pommes"],
  },

  // Salate & Suppe
  {
    cat: "salate",
    name: "Tagessuppe",
    desc: "Als Tasse oder Terrine",
    price: "3,50 / 7,50",
  },
  {
    cat: "salate",
    name: "Großer Salatteller mit Lachs & Garnelen",
    desc: "Gebratener Lachs und Garnelen auf gemischtem Salat",
    price: "18,60",
  },
  {
    cat: "salate",
    name: "Großer Salatteller mit Hähnchenbrust",
    desc: "Gebratene Hähnchenbrust auf gemischtem Salat",
    price: "16,50",
  },
  {
    cat: "salate",
    name: "Großer Salatteller mit Schafskäse & Falafel",
    desc: "Schafskäse und Falafel auf gemischtem Salat",
    price: "15,80",
    tags: ["Vegetarisch"],
  },

  // Tapas
  {
    cat: "tapas",
    name: "Spanische Tapas-Platte",
    desc: "Ein Mix aus unserem vielfältigen Tapas-Menü — inkl. gratis Getränk",
    price: "15,60",
    tags: ["Spanisch", "Klassiker"],
  },
  {
    cat: "tapas",
    name: "Tapas-Platte für 4 Personen",
    desc: "Mix für vier Personen mit Flasche Wein nach Wahl gratis dazu",
    price: "62,40",
    tags: ["Spanisch"],
  },
  {
    cat: "tapas",
    name: "Jamón Ibérico",
    desc: "Hauchdünner, luftgetrockneter Edelschinken",
    price: "12,00",
    tags: ["Spanisch"],
  },
  {
    cat: "tapas",
    name: "Dátiles con Bacon",
    desc: "Mit Mandeln gefüllte Datteln im Speckmantel",
    price: "6,50",
    tags: ["Spanisch"],
  },
  {
    cat: "tapas",
    name: "Boquerones en Vinagre",
    desc: "In Essig marinierte Sardellenfilets",
    price: "5,50",
    tags: ["Spanisch"],
  },
  {
    cat: "tapas",
    name: "Calamares a la Romana",
    desc: "Frittierte Tintenfischringe mit Zitrone",
    price: "8,50",
    tags: ["Spanisch"],
  },
  {
    cat: "tapas",
    name: "Patatas Bravas",
    desc: "Frittierte Kartoffelwürfel mit scharfer Sauce",
    price: "4,00",
    tags: ["Spanisch", "Vegan", "Scharf"],
  },
  {
    cat: "tapas",
    name: "Pimientos de Padrón",
    desc: "Kleine grüne Bratpaprika mit Meersalz",
    price: "5,50",
    tags: ["Spanisch", "Vegan"],
  },
  {
    cat: "tapas",
    name: "Queso Manchego",
    desc: "Gereifter Schafskäse aus Kastilien",
    price: "6,50",
    tags: ["Spanisch", "Vegetarisch"],
  },
  {
    cat: "tapas",
    name: "Aceitunas Mixtas",
    desc: "Marinierte Oliven mit Kräutern",
    price: "3,50",
    tags: ["Spanisch", "Vegan"],
  },
  {
    cat: "tapas",
    name: "Pan y Alioli",
    desc: "Frischer Knoblauch, Olivenöl, Meersalz und Brotkorb",
    price: "4,50",
    tags: ["Spanisch", "Vegetarisch"],
  },

  // Kinder
  {
    cat: "kinder",
    name: "Kidis Piraten Burger",
    desc: "Mit Pommes als Beilage",
    price: "6,50",
    tags: ["Mit Pommes"],
  },
  { cat: "kinder", name: "Chicken Nuggets", desc: "Mit Pommes", price: "5,50", tags: ["Mit Pommes"] },
  {
    cat: "kinder",
    name: "Nudeln mit Tomatensoße",
    price: "5,00",
    tags: ["Vegetarisch"],
  },
  { cat: "kinder", name: "Portion Pommes", price: "5,00", tags: ["Vegan"] },

  // Bar (Highlights — komplette Karte vor Ort)
  {
    cat: "bar",
    name: "Hausgemachte Limonade",
    desc: "Erdbeer & Minze · Holunder & Gurke · Maracuja & Ingwer",
    price: "4,90",
    tags: ["Klassiker"],
  },
  {
    cat: "bar",
    name: "Aperol Spritz (0,4l)",
    price: "6,80",
  },
  {
    cat: "bar",
    name: "Cocktails (Auswahl)",
    desc: "Mojito · Caipirinha · Sex on the Beach · Maracuja Spritz · Pink Spritz · Zombie · Sunrise Spritz",
    price: "8,50",
  },
  {
    cat: "bar",
    name: "Mocktails",
    desc: "Alkoholfreie Cocktails — Maracuja Spritz, Caipirinha, Kasablanka, Zombie",
    price: "8,00",
  },
  {
    cat: "bar",
    name: "Riesling Pfalz trocken (0,2l / Flasche)",
    price: "5,50 / 16,00",
  },
];
