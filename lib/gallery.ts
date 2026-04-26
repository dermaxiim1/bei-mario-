export type GalleryImage = {
  src: string;
  alt: string;
  /** custom Tailwind grid spans for the masonry-feel layout (12-col base) */
  className: string;
};

export const GALLERY: GalleryImage[] = [
  {
    src: "/images/gallery/gast-buffet.jpg",
    alt: "Gäste am Buffet im Gartenvereinsheim",
    className: "col-span-12 row-span-2 sm:col-span-6 lg:col-span-5 lg:row-span-4",
  },
  {
    src: "/images/gallery/buffet-garten.jpg",
    alt: "Buffet im Garten an einem Sommerabend",
    className: "col-span-6 row-span-2 lg:col-span-4",
  },
  {
    src: "/images/gallery/spiesse.jpg",
    alt: "Frisch gegrillte Spieße vom Holzkohlegrill",
    className: "col-span-6 row-span-2 lg:col-span-3 lg:row-span-3",
  },
  {
    src: "/images/gallery/paella-event.jpg",
    alt: "Paella zum spanischen Tapas-Tag",
    className: "col-span-6 row-span-2 lg:col-span-4",
  },
  {
    src: "/images/gallery/buffet-antipasti.jpg",
    alt: "Antipasti-Auswahl auf dem Buffet",
    className: "col-span-6 row-span-2 lg:col-span-3 lg:row-span-3",
  },
  {
    src: "/images/gallery/zutaten-korb.jpg",
    alt: "Frische Zutaten im Korb",
    className: "col-span-6 row-span-2 lg:col-span-4",
  },
  {
    src: "/images/gallery/buffet-wraps.jpg",
    alt: "Wraps und Häppchen auf dem Buffet",
    className: "col-span-12 row-span-2 sm:col-span-6 lg:col-span-4",
  },
];
