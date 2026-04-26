import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink px-6 pb-9 pt-20 text-cream lg:px-14">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo-bei-mario.png"
            alt={SITE.name}
            width={240}
            height={68}
            className="h-14 w-auto brightness-110"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-80">
            Deutsche und asiatische Küche im Gartenvereinsheim. Seit {SITE.founded} in
            Hannover-{SITE.address.district}.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-serif text-base font-medium">Kontakt</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>{SITE.address.street}</li>
            <li>
              {SITE.address.postalCode} {SITE.address.city}
            </li>
            <li>
              <a
                href={`tel:${SITE.contact.phoneFestnetzTel}`}
                className="transition-opacity hover:opacity-100"
              >
                {SITE.contact.phoneFestnetz}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="transition-opacity hover:opacity-100"
              >
                {SITE.contact.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-serif text-base font-medium">Folgen</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link href="#" aria-disabled className="hover:text-cream">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" aria-disabled className="hover:text-cream">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-serif text-base font-medium">Information</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1440px] flex-col items-start justify-between gap-2 border-t border-cream/10 pt-8 text-xs opacity-50 md:flex-row">
        <span>
          © {year} {SITE.name} · {SITE.address.venue}
        </span>
        <span>Hannover · {SITE.address.district}</span>
      </div>
    </footer>
  );
}
