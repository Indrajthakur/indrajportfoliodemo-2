import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return { title: p ? p.title : "Post", description: p?.excerpt };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article className="mx-auto max-w-2xl pt-12">
      <Link href="/blog" className="text-xs uppercase tracking-widest text-dim hover:text-acid">
        ← BACK_TO_LOGS
      </Link>
      <p className="mt-8 text-[11px] uppercase tracking-widest text-dim">
        <time dateTime={p.date}>{p.date}</time> // {p.read}
      </p>
      <h1 className="glitch mt-2 text-2xl font-bold text-bone sm:text-4xl" data-text={p.title}>
        {p.title}
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-bone/90">
        {p.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    </article>
  );
}
