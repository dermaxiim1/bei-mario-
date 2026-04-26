import { SITE } from "./site";

const dayMap = new Map<number, string>([
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
  [0, "Sunday"],
]);

function buildOpeningHoursSpec() {
  return SITE.hours
    .filter((h) => !h.closed && h.from && h.to)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: (h.days as readonly number[]).map((d) => dayMap.get(d)!),
      opens: h.from,
      closes: h.to,
    }));
}

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.contact.phoneFestnetz,
  email: SITE.contact.email,
  servesCuisine: ["German", "Sri Lankan", "Asian", "Spanish"],
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.city,
    addressRegion: "Niedersachsen",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.address.geo.lat,
    longitude: SITE.address.geo.lng,
  },
  openingHoursSpecification: buildOpeningHoursSpec(),
  hasMenu: `${SITE.url}#karte`,
} as const;
