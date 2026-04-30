import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  absoluteTitle: "Page Not Found | Felinda Jewelry",
  description:
    "The page you are looking for does not exist. Explore Felinda Jewelry custom rings, earrings, and bespoke fine jewelry collections.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header activeHref="" />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <p className="felinda-sans text-xs uppercase tracking-[0.28em] text-clay">404</p>
        <h1 className="felinda-serif mt-4 text-4xl lg:text-6xl">Page not found</h1>
        <p className="felinda-sans mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          This page may have moved or no longer exists. Continue exploring bespoke jewelry collections and
          atelier stories.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="felinda-sans rounded-full bg-rose px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-white transition hover:opacity-90"
          >
            Back to homepage
          </Link>
          <Link
            href="/custom-rings"
            className="felinda-sans rounded-full border border-line bg-white px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-ink transition hover:bg-shell"
          >
            Explore custom rings
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
