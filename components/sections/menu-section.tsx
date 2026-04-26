"use client";

import { useState } from "react";

import { SectionLabel } from "@/components/ui/section-label";
import { MENU, MENU_CATEGORIES, type MenuCategoryId, type MenuTag } from "@/lib/menu";
import { cn } from "@/lib/utils";

function tagClass(tag: MenuTag): string {
  if (tag === "Mamas Küche" || tag === "Klassiker")
    return "bg-gold/15 text-[#8a6a2c]";
  if (tag === "Vegetarisch" || tag === "Vegan") return "bg-olive/15 text-[#4d5a25]";
  return "bg-terra/10 text-terra";
}

export function MenuSection() {
  const [active, setActive] = useState<MenuCategoryId | "alle">("alle");
  const items = active === "alle" ? MENU : MENU.filter((m) => m.cat === active);

  return (
    <section id="karte" className="bg-paper px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Speisekarte</SectionLabel>
            <h2 className="font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]">
              Was heute auf
              <br />
              den <em className="italic text-terra">Tisch</em> kommt.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-soft">
            Saisonal angepasst, immer frisch. Filtern Sie nach Kategorie oder lassen Sie
            sich von Mario beraten.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-2">
          {MENU_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-xs uppercase tracking-wider transition-all",
                active === c.id
                  ? "border-ink bg-ink text-cream"
                  : "border-ink/20 text-ink-soft hover:border-ink hover:text-ink",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-24 lg:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.cat + "-" + item.name}
              className="grid grid-cols-[1fr_auto] gap-6 border-b border-dashed border-ink/15 py-6 transition-[padding] hover:pl-3"
            >
              <div>
                <h3 className="font-serif text-xl font-medium leading-tight md:text-2xl">
                  {item.name}
                </h3>
                {item.desc && (
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                )}
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={cn(
                          "rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]",
                          tagClass(t),
                        )}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="whitespace-nowrap font-serif text-xl font-medium tabular-nums">
                {item.price} €
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink-soft/80">
          Alle Preise in Euro inkl. MwSt. Allergene auf Anfrage. Die meisten Speisen
          werden frisch zubereitet — bitte gedulden Sie sich, um zu schlemmen wie bei
          Mario.
        </p>
      </div>
    </section>
  );
}
