import { About } from "@/components/sections/about";
import { EventsSection } from "@/components/sections/events-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { Hero } from "@/components/sections/hero";
import { MenuSection } from "@/components/sections/menu-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { VisitSection } from "@/components/sections/visit-section";
import { restaurantJsonLd } from "@/lib/json-ld";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <MenuSection />
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
