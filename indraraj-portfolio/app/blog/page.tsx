import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { posts } from "@/lib/data";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="pt-12">
      <SectionHeader sec="01" title="DEV_LOGS" caption="// Notes from the field" />
      {posts.length === 0 ? (
        <Panel className="border-dashed">
          <div className="p-8 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-acid">● LOG_BUFFER // EMPTY</p>
            <p className="mt-3 text-sm text-bone/85">No dev logs yet. The first entry is still compiling.</p>
          </div>
        </Panel>
      ) : (
        <ul className="space-y-5">
          {posts.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 0.06}>
                <Panel hover>
                  <article className="p-5">
                    <p className="mb-2 text-[11px] uppercase tracking-widest text-dim">
                      <time dateTime={p.date}>{p.date}</time> // {p.read}
                    </p>
                    <h2 className="text-lg font-bold text-bone">
                      <Link href={`/blog/${p.slug}`} className="hover:text-acid">
                        {p.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm text-bone/80">{p.excerpt}</p>
                    <Link href={`/blog/${p.slug}`} className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-acid hover:underline">
                      Read Log →
                    </Link>
                  </article>
                </Panel>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
