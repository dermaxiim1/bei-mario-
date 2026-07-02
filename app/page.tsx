import { About } from "@/components/sections/about";
import { EventsSection } from "@/components/sections/events-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { Hero } from "@/components/sections/hero";
import { MenuCards } from "@/components/sections/menu-cards";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { TageskarteSection } from "@/components/sections/tageskarte-section";
import { VisitSection } from "@/components/sections/visit-section";
import { restaurantJsonLd } from "@/lib/json-ld";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MenuCards />
      <TageskarteSection />
      <About />
      <GallerySection />
      <EventsSection />
      <ReviewsSection />
      <VisitSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
    </main>
  );
}
