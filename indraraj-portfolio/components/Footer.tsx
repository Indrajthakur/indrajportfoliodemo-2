import { socials } from "@/lib/data";
import { SocialIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-line bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-dim sm:flex-row lg:px-16">
        <div className="text-center sm:text-left">
          <p>
            Built with <span aria-label="coffee">☕</span> and lots of coffee
          </p>
          <p className="mt-1 uppercase tracking-[0.3em] text-acid">engineered for engineering</p>
        </div>
        <ul className="flex items-center gap-4">
          {socials.map((s) => (
            <li key={s.name}>
              <a href={s.href} aria-label={s.name} className="transition-colors hover:text-acid" target={s.name === "Email" ? undefined : "_blank"} rel="noopener noreferrer">
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
