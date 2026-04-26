import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-14">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-bei-mario.png"
            alt={`${SITE.name} — ${SITE.tagline}`}
            width={220}
            height={64}
            priority
            className="h-10 w-auto md:h-12 lg:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {SITE.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-ink transition-colors hover:text-terra"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#besuch"
            className="hidden rounded-full bg-terra px-[22px] py-3 text-[13px] font-medium tracking-[0.04em] text-cream transition-all hover:-translate-y-px hover:bg-terra-deep md:inline-block"
          >
            Tisch reservieren
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
