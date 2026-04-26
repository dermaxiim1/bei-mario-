"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SITE } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Menü öffnen"
        className="rounded-full border border-ink/15 p-2 text-ink transition-colors hover:border-terra hover:text-terra lg:hidden"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-paper text-ink">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl italic">{SITE.name}</SheetTitle>
          <SheetDescription className="text-ink-soft">{SITE.tagline}</SheetDescription>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-2 px-4">
          {SITE.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 font-serif text-xl text-ink transition-colors hover:bg-paper-dark hover:text-terra"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#besuch"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-full bg-terra px-5 py-3 text-sm font-medium tracking-wider text-cream"
          >
            Tisch reservieren
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
