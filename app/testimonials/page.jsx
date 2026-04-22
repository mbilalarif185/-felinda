import Link from "next/link";
import { Quote, Star, CalendarDays, ArrowRight } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import YouTubeCard from "@/components/YouTubeCard";

export const metadata = {
  title: "Testimonials — Felinda Jewelry",
  description:
    "Stories from Felinda clients — written reflections and short films from the people who wear our bespoke pieces every day.",
};

/**
 * Replace the `url` values with your real YouTube links.
 * Any of these formats are accepted by <YouTubeCard />:
 *   https://www.youtube.com/watch?v=XXXXXXXXXXX
 *   https://youtu.be/XXXXXXXXXXX
 *   https://www.youtube.com/embed/XXXXXXXXXXX
 *   https://www.youtube.com/shorts/XXXXXXXXXXX
 */
const videoTestimonials = [
  {
    url: "https://youtu.be/Fktcu-bvvSk",
    title: "Designing Sara's engagement ring",
    name: "Sara & Ahmad",
    role: "Bespoke engagement ring",
  },
  {
    url: "https://youtu.be/-hYwP-FeuR4",
    title: "A pearl heirloom, reimagined",
    name: "Datin Liyana",
    role: "South Sea pearl restoration",
  },
  {
    url: "https://youtu.be/FdPMOmd5p1g",
    title: "From sketch to finished cuff",
    name: "Alia M.",
    role: "Signature bangle commission",
  },
  {
    url: "https://youtu.be/mC-8U4HbFtA",
    title: "Behind the atelier doors",
    name: "Felinda Studio",
    role: "Studio film",
  },
  {
    url: "https://youtu.be/7huMgNyV7zQ",
    title: "Stones, settings & second chances",
    name: "Aishah R.",
    role: "Heirloom redesign",
  },
  {
    url: "https://youtu.be/TdizF2pRo90",
    title: "A wedding band, a quiet promise",
    name: "Imran & Dania",
    role: "Bespoke wedding bands",
  },
  {
    url: "https://youtu.be/FSGL7Ix-gbA",
    title: "Notes from a private commission",
    name: "Priya N.",
    role: "Couture pendant",
  },
  {
    url: "https://youtu.be/HvF6Mh5Cpno",
    title: "The making of a signature piece",
    name: "Felinda Atelier",
    role: "Studio film",
  },
];

const writtenTestimonials = [
  {
    quote:
      "Felinda took a single sketch on a napkin and turned it into the most personal piece I own. Every detail — the rose-gold weight, the way the centre stone catches afternoon light — feels like it was always meant for me.",
    name: "Adriana K.",
    role: "Bespoke pendant client",
  },
  {
    quote:
      "I came in with my grandmother's old pearls in a tissue and left with a heirloom my daughter will one day fight her sisters over. The team treated the stones — and the story — with so much care.",
    name: "Datin Suraya",
    role: "Pearl restoration",
  },
  {
    quote:
      "What surprised me most was how much they listened. The ring isn't just beautiful, it's mine. Six months in and I still catch myself looking at it under every light.",
    name: "Mei-Ling T.",
    role: "Engagement ring",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Header activeHref="/testimonials" />

      <main className="min-h-screen bg-[#f6f0ec] text-[#56463f]">
        <PageHero
          title="Stories from our Clients"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Testimonials" },
          ]}
        />

        {/* Intro card */}
        <section className="relative z-10 px-6 pb-12">
          <div className="mx-auto max-w-[1320px] rounded-[30px] border border-[#e7dbd5] bg-[#fbf7f4] px-6 py-10 shadow-[0_10px_30px_rgba(110,90,80,0.04)] md:px-10 md:py-12">
            {/* Lead */}
            <div className="mx-auto max-w-[900px] text-center">
              <h2 className="font-serif text-[40px] font-light leading-[1.05] tracking-[-0.03em] text-[#4f413a] md:text-[60px]">
                Worn,{" "}
                <span
                  className="text-[#d59a92]"
                  style={{
                    fontFamily:
                      "var(--font-great-vibes), 'Great Vibes', 'Allura', cursive",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  loved
                </span>
                , passed on.
              </h2>

              <div className="mx-auto mt-6 flex items-center justify-center gap-4">
                <div className="h-px w-14 bg-[#e4c9c0]" />
                <div className="text-[#d49a92]">✦</div>
                <div className="h-px w-14 bg-[#e4c9c0]" />
              </div>

              <p className="mx-auto mt-7 max-w-[760px] font-serif text-[18px] leading-[1.8] text-[#78675f] md:text-[20px]">
                Every Felinda piece begins with a conversation and ends with a
                story. These are a few of the people who carry ours — in their
                own words, and on film.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-[#c88f87]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-2 text-[14px] tracking-[0.06em] text-[#7d6e67] md:text-[15px]">
                  300+ private commissions · 12 years of atelier work
                </span>
              </div>
            </div>

            {/* Video grid */}
            <div className="mt-12">
              <div className="mb-6 flex items-end justify-between gap-4">
                <h3 className="font-serif text-[26px] font-light text-[#4f413a] md:text-[34px]">
                  In their own words — on film.
                </h3>
                <span className="hidden text-[13px] uppercase tracking-[0.18em] text-[#a89a92] md:inline">
                  Click to play
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {videoTestimonials.map((v) => (
                  <YouTubeCard
                    key={v.url}
                    url={v.url}
                    title={v.title}
                    name={v.name}
                    role={v.role}
                  />
                ))}
              </div>
            </div>

            {/* Written testimonials */}
            <div className="mt-12 border-t border-[#ece1dc] pt-10">
              <h3 className="mb-6 text-center font-serif text-[26px] font-light text-[#4f413a] md:text-[34px]">
                Written reflections
              </h3>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {writtenTestimonials.map((t, i) => (
                  <article
                    key={i}
                    className="relative flex flex-col overflow-hidden rounded-[18px] border border-[#eee3de] bg-[#fefcfa] p-7 shadow-[0_4px_15px_rgba(90,70,60,0.04)]"
                  >
                    <Quote
                      className="text-[#e9c8bf]"
                      size={32}
                      strokeWidth={1.5}
                    />
                    <p className="mt-4 font-serif text-[17px] leading-[1.75] text-[#6c5d56] md:text-[18px]">
                      “{t.quote}”
                    </p>
                    <div className="mt-6 border-t border-[#ece1dc] pt-4">
                      <div className="font-serif text-[18px] text-[#4f413a]">
                        {t.name}
                      </div>
                      <div className="text-[14px] italic text-[#8e7b73]">
                        {t.role}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* CTA strip */}
            <div className="mt-12 flex flex-col gap-5 rounded-[18px] border border-[#eaded8] bg-[#f8f3ef] px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#dfc5bc] text-[#cf938b]">
                  <CalendarDays size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-serif text-[26px] font-light text-[#54463f] md:text-[34px]">
                    Begin your own Felinda story.
                  </h3>
                  <p className="mt-1 text-[16px] text-[#807069] md:text-[18px]">
                    A private consultation, in studio or online.
                  </p>
                </div>
              </div>

              <Link
                href="/bespoke"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-[10px] border border-[#ddbdb3] bg-transparent px-8 py-4 text-[14px] tracking-[0.04em] text-[#c88f87] transition hover:bg-[#c88f87] hover:text-white md:px-10 md:text-[16px]"
              >
                BOOK A CONSULTATION
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
