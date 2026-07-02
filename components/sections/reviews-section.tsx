import { SectionLabel } from "@/components/ui/section-label";
import { REVIEWS } from "@/lib/reviews";

export function ReviewsSection() {
  return (
    <section className="bg-paper px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionLabel>Google-Bewertungen</SectionLabel>
        <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]">
          Stimmen vom
          <br />
          <em className="italic text-terra">Stammtisch.</em>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <article
              key={review.author}
              className="relative overflow-hidden rounded-sm border border-ink/10 bg-cream p-10"
            >
              <span
                aria-hidden
                className="absolute left-6 top-3 font-serif text-[96px] italic leading-none text-terra opacity-40"
              >
                &ldquo;
              </span>
              <p className="relative z-10 pt-4 font-serif text-xl font-light italic leading-snug md:text-2xl">
                {review.text}
              </p>
              <p className="mt-5 text-sm tracking-wide text-ink-soft">
                <strong className="font-semibold text-ink">{review.author}</strong> —{" "}
                {review.source}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
