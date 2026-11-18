import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-mag">ERROR 404 // ZONE_NOT_FOUND</p>
      <h1 className="mt-4 text-3xl font-bold text-bone">You wandered off the map.</h1>
      <p className="mt-3 text-sm text-dim">That page doesn&apos;t exist. Respawn at the start.</p>
      <Link href="/" className="glow-btn mt-8 inline-block bg-acid px-5 py-3 text-sm font-bold uppercase tracking-widest text-black">
        RESPAWN
      </Link>
    </div>
  );
}
