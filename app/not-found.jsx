import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  absoluteTitle: "Page Not Found | Auréa Jewellery",
  description:
    "The page you are looking for does not exist. Explore Auréa Jewellery custom rings, earrings, and bespoke fine jewelry collections.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header activeHref="" />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-40 text-center lg:pb-32 lg:pt-48">
        <p className="auréa-sans text-xs uppercase tracking-[0.28em] text-clay">404</p>
        <h1 className="auréa-serif mt-4 text-4xl lg:text-6xl">Page not found</h1>
        <p className="auréa-sans mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          This page may have moved or no longer exists. Continue exploring bespoke jewelry collections and
          atelier stories.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="auréa-sans rounded-full bg-luxeGold px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-luxeBlack transition hover:bg-luxeGoldSoft"
          >
            Back to homepage
          </Link>
          <Link
            href="/custom-rings"
            className="auréa-sans rounded-full border border-luxeGold/40 bg-transparent px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-luxeGoldSoft transition hover:border-luxeGold hover:bg-white/[0.05]"
          >
            Explore custom rings
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
