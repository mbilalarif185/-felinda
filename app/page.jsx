import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageFrame from "@/components/ImageFrame";
import ConsultationCTA from "@/components/ConsultationCTA";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { homeMeta } from "@/lib/seo/meta-copy";
import {
  heroFeatured,
  founderPortrait,
  creations,
  processSteps,
  categories,
  homeTestimonials,
} from "@/lib/content";

const HomeTestimonialSlider = dynamic(
  () => import("@/components/HomeTestimonialSlider"),
  {
    loading: () => (
      <div
        className="mx-auto mt-12 min-h-[220px] max-w-3xl animate-pulse rounded-[2rem] border border-line bg-white/60"
        role="status"
        aria-label="Loading testimonials"
      />
    ),
  }
);

export const metadata = {
  ...buildPageMetadata({
    absoluteTitle: homeMeta.absoluteTitle,
    description: homeMeta.description,
    keywords: homeMeta.keywords,
    path: "/",
    ogImage: heroFeatured.src,
  }),
  verification: {
    google: "SaMCE1pImIZgYHQW_3A6jOkcJOFur-oCy_G7yI8CGfU",
  },
};

export const revalidate = 3600;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header activeHref="/" />

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-roseSoft/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-roseSoft/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="felinda-sans mb-6 text-xs uppercase tracking-[0.28em] text-clay">
                FINE JEWELRY, MADE FOR YOU
              </div>
              <h1 className="felinda-serif max-w-xl text-5xl leading-[0.98] tracking-[-0.02em] lg:text-7xl">
                You Are Not Like Everyone Else — Your Jewelry Shouldn’t Be Either
              </h1>
              <p className="felinda-sans mt-6 max-w-xl text-lg leading-8 text-muted">
               Felinda is a private atelier where fine jewelry is conceived around one person, one story, and a moment meant to endure. We do not design collections. We design for you.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="felinda-sans rounded-full bg-rose px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-white transition hover:opacity-90"
                >
                  Reserve Your Consultation
                </Link>
                <Link
                  href="/custom-rings"
                  className="felinda-sans rounded-full border border-line bg-white px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-ink transition hover:bg-shell"
                >
                  Explore our creations
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_20px_70px_rgba(72,49,41,0.08)]">
                <div className="rounded-[1.5rem] bg-gradient-to-b from-[#F4E9E5] via-[#F8F3F1] to-[#EEE3DE] p-4">
                  <ImageFrame
                    src={heroFeatured.src}
                    alt={heroFeatured.alt}
                    className="h-[500px]"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -bottom-2 left-2 rounded-[1.5rem] border border-line bg-white/95 p-5 shadow-[0_10px_30px_rgba(72,49,41,0.08)] lg:bottom-6 lg:left-0">
                <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                  Private Atelier
                </div>
                <div className="felinda-serif mt-2 text-2xl text-ink">
                  Crafted for your story
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[2rem] border border-line bg-[linear-gradient(180deg,#f6efec_0%,#fdfbfa_100%)] p-6 shadow-[0_16px_50px_rgba(72,49,41,0.05)]">
            <ImageFrame
              src={founderPortrait.src}
              alt={founderPortrait.alt}
              className="h-[560px] lg:h-[720px]"
              rounded="rounded-[1.6rem]"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
              THE STORY OF FELINDA
            </div>
            <h2 className="felinda-serif max-w-xl text-4xl leading-tight lg:text-6xl">
              Jewelry That Holds What Words Cannot.
            </h2>
            <p className="felinda-sans mt-6 max-w-2xl text-lg leading-8 text-muted">
             At Felinda, every piece begins with you.
Your story. Your moment. Your meaning.
We do not follow trends, and we do not design for the masses. Each creation is conceived for one — shaped by intention, guided by emotion, and brought to life through uncompromising craftsmanship.
            </p>
            <p className="felinda-sans mt-4 max-w-2xl text-lg leading-8 text-muted">
             Every gemstone is chosen for its character. Every line is deliberate. Every detail exists for a reason.
This is not jewelry made to be worn and forgotten.
It is made to be remembered — an extension of who you are, and a moment that endures.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="felinda-sans inline-block rounded-full border border-line bg-white px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-ink transition hover:bg-shell"
              >
                Explore the Felinda Story
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-shell py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
                  Recent Commissions
                </div>
                <h2 className="felinda-serif text-4xl lg:text-6xl">
                  Every Piece, A Private World.
                </h2>
              </div>
              <p className="felinda-sans max-w-xl text-lg leading-8 text-muted">
              A curated selection of recent bespoke commissions, each created in close collaboration and designed to exist only once.
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-5">
              {creations.map((item) => (
                <article
                  key={item.title}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line/90 bg-white shadow-[0_8px_30px_rgba(72,49,41,0.04)] ring-1 ring-black/[0.02] transition duration-300 hover:-translate-y-0.5 hover:border-line hover:shadow-[0_20px_50px_rgba(72,49,41,0.09)]"
                >
                  <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-[#f3ece8]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 90vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-line/50 bg-white px-6 pb-6 pt-6">
                    <div className="felinda-sans text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                      {item.tag}
                    </div>
                    <h3 className="felinda-serif mt-3 text-2xl leading-[1.15] tracking-[-0.01em] text-ink md:text-[1.65rem]">
                      {item.title}
                    </h3>
                    <p className="felinda-sans mt-3.5 flex-1 text-[15px] leading-[1.65] text-muted">
                      {item.desc}
                    </p>
                    <Link
                      href={item.href}
                      className="felinda-sans mt-7 inline-flex w-full shrink-0 items-center justify-center rounded-full border border-line bg-white px-5 py-3 text-sm font-medium tracking-[0.04em] text-ink transition hover:border-rose/40 hover:bg-shell"
                    >
                      View collection
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
              
              HOW IT WORKS
            </div>
            <h2 className="felinda-serif text-4xl lg:text-6xl">
              Unhurried. Considered. Entirely Yours.

            </h2>
            <p className="felinda-sans mt-5 text-lg leading-8 text-muted">
              
                The Felinda process is designed to feel the opposite of a transaction. It unfolds at the pace of trust, guided by conversation, intention, and detail. It is only complete when every element feels exactly right — because nothing leaves the atelier until it belongs fully to you.

            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.no}
                className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white p-7 shadow-[0_10px_35px_rgba(72,49,41,0.04)]"
              >
                <div className="felinda-serif absolute right-4 top-1 text-7xl text-[#F2E6E1]">
                  {step.no}
                </div>
                <div className="relative z-10">
                  <h3 className="felinda-serif text-3xl">{step.title}</h3>
                  <p className="felinda-sans mt-4 text-[15px] leading-7 text-muted">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 text-center">
              <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
                The Collections
              </div>
              <h2 className="felinda-serif text-4xl lg:text-6xl">
                Find Your Point of Entry.
              </h2>
               <p className="felinda-sans mt-5 text-lg leading-8 text-muted">
              
             If you are unsure where to begin, each Felinda category serves as a doorway into the same intimate experience — one that concludes with a piece made exclusively for you
            </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {categories.map((item) => (
                <article
                  key={item.title}
                  className="group relative min-w-0 overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(180deg,#f8f1ee_0%,#f4e7e3_100%)] p-4 shadow-[0_12px_35px_rgba(72,49,41,0.05)]"
                >
                  <Link
                    href={item.href}
                    className="absolute inset-0 z-10 rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8dcd6]"
                    aria-label={`Explore ${item.title}`}
                  />
                  <div className="relative z-0">
                    <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] border border-white">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, 90vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 min-w-0 p-5 text-white sm:p-7">
                        <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-white/80">
                          {item.subtitle}
                        </div>
                        <div
                          className="felinda-serif mt-3 w-full max-w-full whitespace-nowrap text-[clamp(1rem,0.75vw+0.8rem,1.65rem)] leading-[1.12] tracking-[-0.015em]"
                          title={item.title}
                        >
                          {item.title}
                        </div>
                        <span className="felinda-sans mt-5 inline-flex w-fit rounded-full border border-white/60 bg-white/10 px-5 py-3 text-sm tracking-[0.04em] text-white backdrop-blur transition group-hover:bg-white/20 sm:mt-6">
                          Explore
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F2EE] py-24">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
            <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
              Client Voices
            </div>
            <h2 className="felinda-serif text-4xl lg:text-6xl">
              What They Keep Closest
            </h2>

            <HomeTestimonialSlider items={homeTestimonials} />
          </div>
        </section>

        <ConsultationCTA />
      </main>

      <Footer />
    </div>
  );
}
