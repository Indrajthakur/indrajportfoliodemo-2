"use client";

import { useState, type FormEvent } from "react";
import { profile, socials } from "@/lib/data";
import { SocialIcon } from "./Icons";
import { Panel } from "./Panel";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const field =
  "w-full border border-line bg-black/50 px-3 py-2 text-sm text-bone placeholder:text-dim/60 focus:border-acid";

const CODE = [
  "const dev = new Developer('Indraraj');",
  "dev.fuel = 'coffee';",
  "while (bugs.length) {",
  "  bugs.pop(); // one at a time",
  "}",
  "dev.ship('it works!');",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend yet: this opens the visitor's mail client with the message prefilled.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-32 pt-24">
      <SectionHeader sec="06" title="LETS_CONNECT" id="contact-title" />
      <p className="-mt-4 mb-8 max-w-xl text-sm text-bone/85">
        Got a project, a job, or a bug that only appears in production? Send a message. Replies are faster than my CI pipeline.
      </p>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <Panel title="NEW_MESSAGE.exe">
            <form onSubmit={onSubmit} className="space-y-4 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-1 block text-[11px] uppercase tracking-widest text-dim">
                    Name
                  </label>
                  <input id="c-name" name="name" required autoComplete="name" className={field} />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-1 block text-[11px] uppercase tracking-widest text-dim">
                    Email
                  </label>
                  <input id="c-email" name="email" type="email" required autoComplete="email" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="c-subject" className="mb-1 block text-[11px] uppercase tracking-widest text-dim">
                  Subject
                </label>
                <input id="c-subject" name="subject" required className={field} />
              </div>
              <div>
                <label htmlFor="c-message" className="mb-1 block text-[11px] uppercase tracking-widest text-dim">
                  Message
                </label>
                <textarea id="c-message" name="message" required rows={5} className={field} />
              </div>
              <button type="submit" className="glow-btn bg-acid px-5 py-3 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:-translate-y-0.5">
                Send Message
              </button>
              <p role="status" className="min-h-[1.25rem] text-xs text-ice">
                {sent ? "// TRANSMISSION_READY :: finish sending in your mail app" : ""}
              </p>
            </form>
          </Panel>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.08}>
            <Panel title="// My typical coding vibe">
              <div className="typeloop p-4 text-xs leading-6" aria-label="Decorative animated code snippet" role="img">
                {CODE.map((line, i) => (
                  <code key={line} className="typeline text-ice" style={{ ["--n" as string]: i }}>
                    <span className="text-dim">{String(i + 1).padStart(2, "0")} </span>
                    {line}
                  </code>
                ))}
                <span aria-hidden="true" className="blink text-acid">
                  ▌
                </span>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.14}>
            <Panel title="SOCIAL_LINKS">
              <ul className="flex flex-wrap gap-3 p-4">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      aria-label={s.name}
                      target={s.name === "Email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center border border-line text-bone transition-colors hover:border-acid hover:text-acid hover:shadow-[0_0_14px_rgba(182,255,60,0.3)]"
                    >
                      <SocialIcon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
