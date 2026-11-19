import { SITE } from "@/lib/site";

// Inhalte vom Plakat "Kesel Kole A3" (November 2026). Preise stehen dort noch
// nicht, deshalb werden die Varianten ohne Preis gezeigt.
export const FOODTRUCK = {
  name: "Kesel Kole",
  intro:
    "Mit Kesel Kole ist Bei Mario jetzt auch unterwegs: unser Foodtruck bringt Street Food aus Sri Lanka zu Ihnen.",
  kottu:
    "Die Spezialität heißt Kottu. Das ist ein beliebtes srilankisches Street-Food-Gericht, bei dem in Stücke gehacktes Fladenbrot (Gothamba Roti) gemeinsam mit Gemüse, Ei, Gewürzen und oft Fleisch oder Fisch unter lautem Rhythmus auf einer heißen Eisenplatte angebraten wird.",
  variants: ["Gemüse + Ei", "Chicken", "Vegan", "Käse"],
  phone: SITE.contact.phoneFestnetz,
  phoneTel: SITE.contact.phoneFestnetzTel,
  email: "beimario.listerdamm@gmail.com",
} as const;
