"use client";

import Link from "next/link";
import { useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header activeHref="/blog" />
      <main className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-10">
        <p className="font-sans text-xs font-medium uppercase tracking-luxe text-muted">Journal</p>
        <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">Something went wrong</h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
          We could not load this part of the journal. You can try again or return to the blog listing.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full border border-ink bg-ink px-6 py-2.5 font-sans text-sm font-medium text-cream transition hover:bg-noir"
          >
            Try again
          </button>
          <Link
            href="/blog"
            className="rounded-full border border-line bg-ivory px-6 py-2.5 font-sans text-sm font-medium text-ink transition hover:border-clay/40"
          >
            Back to blog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
