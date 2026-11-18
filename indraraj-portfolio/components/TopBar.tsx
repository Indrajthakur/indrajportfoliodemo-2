"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { githubUser, nav, profile, socials } from "@/lib/data";
import { SocialIcon } from "./Icons";
import { XPBar } from "./XPBar";

const href = (name: string) => socials.find((s) => s.name === name)?.href ?? "#";

// Contact HUD: icon always, short label from sm, full label from xl.
const contacts = [
  { label: `@${githubUser}`, short: "GitHub", href: href("GitHub"), icon: "github", external: true },
  { label: "LinkedIn", short: "LinkedIn", href: href("LinkedIn"), icon: "linkedin", external: true },
  { label: profile.email, short: "Email", href: href("Email"), icon: "mail", external: false },
];

export function TopBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (h: string) => (h === "/" ? pathname === "/" : pathname.startsWith(h));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 lg:px-16">
        <div className="flex min-w-0 items-center gap-3 text-xs">
          <span className="shrink-0 border border-acid px-2 py-0.5 font-bold text-acid">LVL {profile.level}</span>
          <span className="truncate uppercase tracking-widest text-bone">{profile.role}</span>
        </div>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 text-xs uppercase tracking-widest">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={`px-3 py-2 transition-colors hover:text-acid ${isActive(n.href) ? "text-acid" : "text-dim"}`}
                >
                  {isActive(n.href) && <span aria-hidden="true">&gt; </span>}
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="shrink-0 border border-line p-2 text-bone md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line md:hidden">
          <ul className="flex flex-col px-5 py-2 text-sm uppercase tracking-widest">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={`block py-3 ${isActive(n.href) ? "text-acid" : "text-dim"}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="border-t border-line bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-2 px-5 py-1.5 text-[10px] uppercase tracking-widest text-dim lg:px-16">
          <span className="flex min-w-0 items-center gap-3">
            <span className="whitespace-nowrap">
              XP_STATION [{profile.xp}]/{profile.xpMax / 1000}k
            </span>
            <XPBar value={profile.xp} max={profile.xpMax} label="XP progress" className="w-20 sm:w-32" />
          </span>

          <ul aria-label="Contact" className="flex items-center gap-3 sm:gap-4">
            {contacts.map((c) => (
              <li key={c.short}>
                <a
                  href={c.href}
                  aria-label={c.label}
                  title={c.label}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-1.5 normal-case tracking-normal text-bone transition-colors hover:text-acid"
                >
                  <SocialIcon name={c.icon} className="h-3.5 w-3.5 shrink-0" />
                  <span className="hidden text-[10px] uppercase tracking-widest sm:inline xl:hidden">{c.short}</span>
                  <span className="hidden text-[11px] xl:inline">{c.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <span className="ml-auto flex items-center gap-2 whitespace-nowrap">
            Status: <span className="text-acid">Online</span>
            <span aria-hidden="true" className="blink inline-block h-1.5 w-1.5 rounded-full bg-acid" />
          </span>
        </div>
      </div>
    </header>
  );
}
