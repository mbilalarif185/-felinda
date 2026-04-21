import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About — Felinda Jewelry",
  description:
    "A cinematic look inside Felinda — a private bespoke jewelry atelier built on emotion, craftsmanship, and quiet refinement.",
};

/* ──────────── Decorative ornaments (inline SVG) ──────────── */

function Crest({ className = "" }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="30" cy="30" r="19" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
      <path
        d="M30 11 L30 49 M11 30 L49 30"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.4"
      />
      <path
        d="M30 19 L33 27 L41 27 L34.5 32 L37 40 L30 35 L23 40 L25.5 32 L19 27 L27 27 Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
      />
      <circle cx="30" cy="30" r="1.4" fill="currentColor" />
    </svg>
  );
}

function Flourish({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 14"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="7" x2="80" y2="7" stroke="currentColor" strokeWidth="0.7" />
      <path
        d="M80 7 L92 1 L104 7 L92 13 Z"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
      />
      <circle cx="100" cy="7" r="1" fill="currentColor" />
      <path
        d="M96 7 L108 1 L120 7 L108 13 Z"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
      />
      <line x1="120" y1="7" x2="200" y2="7" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

function Mark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 50 30"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 15 L20 15" stroke="currentColor" strokeWidth="0.6" />
      <path
        d="M20 15 L25 9 L30 15 L25 21 Z"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
      />
      <path d="M30 15 L45 15" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

/* ──────────── 4 craft icons (filigree-style) ──────────── */

function IconAtelier() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="0.7">
      <path d="M20 6 L26 14 L20 22 L14 14 Z" />
      <circle cx="20" cy="14" r="2" />
      <path d="M14 22 L8 32 H32 L26 22" />
      <path d="M14 32 L14 36 M26 32 L26 36" />
    </svg>
  );
}

function IconConsultation() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="0.7">
      <circle cx="20" cy="20" r="14" />
      <path d="M14 18 Q20 14 26 18" />
      <path d="M14 22 Q20 26 26 22" />
      <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconStone() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="0.7">
      <path d="M10 16 L20 6 L30 16 L20 34 Z" />
      <path d="M10 16 L30 16" />
      <path d="M20 6 L20 16 M14 16 L20 34 M26 16 L20 34" />
    </svg>
  );
}

function IconHand() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="0.7">
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="8" />
      <path d="M20 6 L20 12 M20 28 L20 34 M6 20 L12 20 M28 20 L34 20" />
    </svg>
  );
}

const valueStrip = [
  {
    title: "A Private Atelier",
    text: "Felinda operates by appointment only — a quiet studio where time is given without measure.",
  },
  {
    title: "Founder-Led, by Hand",
    text: "Each piece passes through the founder's direct attention, from first conversation to final reveal.",
  },
  {
    title: "Made for Memory",
    text: "Designed to be inherited, returned to, and remembered across years and generations.",
  },
];

const craftPillars = [
  {
    Icon: IconAtelier,
    title: "The Atelier",
    text: "A private studio in Kuala Lumpur, opened only by appointment, intentionally kept small.",
  },
  {
    Icon: IconConsultation,
    title: "Quiet Consultation",
    text: "Conversations begin with story and intention, never with a catalog or a template.",
  },
  {
    Icon: IconStone,
    title: "Considered Stones",
    text: "Gemstones are sourced for character and proportion, not only for size or rarity.",
  },
  {
    Icon: IconHand,
    title: "Handcrafted Finish",
    text: "Refined by hand at every stage, until each piece feels rightful in its wearer's hand.",
  },
];

const signatureMoments = [
  {
    eyebrow: "I · Origin",
    title: "An idea before a brand",
    text: "Felinda begins as a private practice — a few pieces, a few clients, one conversation at a time. From the start, the work is shaped by feeling rather than formula.",
  },
  {
    eyebrow: "II · The Hand",
    title: "Founder-led, in every detail",
    text: "There is no production floor. Every Felinda creation moves through a single set of hands, ensuring each piece carries an unmistakably personal signature.",
  },
  {
    eyebrow: "III · The Future",
    title: "Made to outlast a season",
    text: "The atelier resists trend. Each piece is created to remain meaningful long after the moment it was received — to become part of a wearer's identity.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header activeHref="/about" />

      <main>
        <PageHero
          title="About Felinda"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        />

        {/* ════════ INTRO LEAD — cream, transitions out of the hero ════════ */}
        <section className="bg-[#f6f0ec] pb-16 pt-2 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <p className="felinda-serif text-xl leading-[1.7] text-[#5b4d44] lg:text-2xl lg:leading-[1.7]">
              A house of quiet jewelry — a private bespoke atelier creating
              personal pieces with softness, refinement, and timeless emotional
              value, founder-led and by appointment in Kuala Lumpur.
            </p>
          </div>
        </section>

        {/* ════════ VALUE STRIP — soft cream, rose accents (matches the banner) ════════ */}
        <section className="bg-[#f6f0ec] pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {valueStrip.map((item, i) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-[1.75rem] border border-[#e7dbd5] bg-[#fbf7f4] px-8 py-12 text-center shadow-[0_8px_28px_rgba(120,90,80,0.05)] lg:px-10 lg:py-16"
                >
                  <div className="felinda-sans text-[11px] uppercase tracking-[0.32em] text-[#cf938b]">
                    No. 0{i + 1}
                  </div>
                  <Mark className="mt-4 h-4 w-12 text-[#cf938b]/80" />
                  <h3 className="felinda-serif mt-5 text-3xl leading-snug text-[#3a2f28]">
                    {item.title}
                  </h3>
                  <p className="felinda-sans mt-4 max-w-xs text-[15px] leading-7 text-[#7b6b62]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ THE FOUR PILLARS — LIGHT, FORMAL ════════ */}
        <section id="story" className="bg-cream py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <Mark className="mx-auto h-4 w-12 text-clay" />
              <div className="felinda-sans mt-5 text-xs uppercase tracking-[0.32em] text-clay">
                The Four Pillars
              </div>
              <h2 className="felinda-serif mt-4 text-4xl leading-tight lg:text-6xl">
                What shapes the work
              </h2>
              <Flourish className="mx-auto mt-8 h-3 w-48 text-clay/70 lg:w-60" />
            </div>

            <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {craftPillars.map(({ Icon, title, text }) => (
                <div key={title} className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-line bg-white text-clay shadow-[0_8px_25px_rgba(72,49,41,0.05)]">
                    <Icon />
                  </div>
                  <h3 className="felinda-serif mt-7 text-2xl leading-snug text-ink lg:text-[1.7rem]">
                    {title}
                  </h3>
                  <div className="mx-auto mt-3 h-px w-10 bg-clay/40" />
                  <p className="felinda-sans mt-5 text-[15px] leading-7 text-muted">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ EDITORIAL STORY — IMAGE + TEXT, ASYMMETRIC ════════ */}
        <section className="relative overflow-hidden bg-shell py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-12 gap-10 lg:gap-16">
              <div className="col-span-12 lg:col-span-5">
                <div className="relative">
                  <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-[0_22px_60px_rgba(72,49,41,0.1)]">
                    <div className="relative h-[500px] overflow-hidden rounded-[1.5rem] lg:h-[640px]">
                      <Image
                        src="/images/gold-jewellery-malaysia-premium.webp"
                        alt="Felinda atelier studio"
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* floating caption card */}
                  <div className="absolute -bottom-5 -right-5 max-w-[220px] rounded-[1.25rem] border border-line bg-cream p-5 shadow-[0_14px_35px_rgba(72,49,41,0.1)] lg:-right-8">
                    <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                      Plate I
                    </div>
                    <div className="felinda-serif mt-2 text-xl leading-snug text-ink">
                      The working studio
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7">
                <Mark className="h-4 w-12 text-clay" />
                <div className="felinda-sans mt-5 text-xs uppercase tracking-[0.32em] text-clay">
                  Our Story
                </div>
                <h2 className="felinda-serif mt-4 text-4xl leading-tight lg:text-6xl">
                  A jewelry house built
                  <br />
                  on <span className="italic text-rose">feeling</span>, not formula.
                </h2>

                <div className="mt-10 space-y-6">
                  {signatureMoments.map((m) => (
                    <article
                      key={m.eyebrow}
                      className="rounded-[1.5rem] border border-line bg-white p-7 shadow-[0_10px_30px_rgba(72,49,41,0.04)]"
                    >
                      <div className="felinda-sans text-xs uppercase tracking-[0.28em] text-rose">
                        {m.eyebrow}
                      </div>
                      <h3 className="felinda-serif mt-3 text-2xl leading-snug text-ink lg:text-3xl">
                        {m.title}
                      </h3>
                      <p className="felinda-sans mt-3 text-[15px] leading-7 text-muted">
                        {m.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ DARK FEATURE CARDS ════════ */}
        <section className="relative overflow-hidden bg-ink py-24 text-cream lg:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 25%, #D8A29A 0%, transparent 45%), radial-gradient(circle at 85% 75%, #E8C4BF 0%, transparent 45%)",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <Mark className="mx-auto h-4 w-12 text-rose" />
              <div className="felinda-sans mt-5 text-xs uppercase tracking-[0.32em] text-rose">
                The Felinda Promise
              </div>
              <h2 className="felinda-serif mt-4 text-4xl leading-tight text-cream lg:text-6xl">
                Three quiet commitments
              </h2>
              <Flourish className="mx-auto mt-8 h-3 w-48 text-rose/80 lg:w-60" />
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {[
                {
                  no: "01",
                  title: "Privacy",
                  text: "Each consultation, design, and piece is held in confidence. The atelier is open only to those it speaks with directly.",
                },
                {
                  no: "02",
                  title: "Patience",
                  text: "Every creation is given the time it requires. The work is never rushed to meet a calendar or a quota.",
                },
                {
                  no: "03",
                  title: "Permanence",
                  text: "Pieces are made to be inherited and returned to — designed to remain meaningful long after the moment they were given.",
                },
              ].map((p) => (
                <article
                  key={p.no}
                  className="group relative overflow-hidden rounded-[2rem] border border-cream/15 bg-white/[0.04] p-8 backdrop-blur-sm transition hover:border-rose/40 lg:p-10"
                >
                  <div className="felinda-serif text-7xl leading-none text-rose/30 transition group-hover:text-rose/60">
                    {p.no}
                  </div>
                  <h3 className="felinda-serif mt-4 text-3xl leading-snug text-cream">
                    {p.title}
                  </h3>
                  <Mark className="mt-4 h-3 w-10 text-rose/80" />
                  <p className="felinda-sans mt-5 text-[15px] leading-7 text-cream/70">
                    {p.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FOUNDER PORTRAIT — INTIMATE, LIGHT ════════ */}
        <section className="bg-cream py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-12 gap-10 lg:gap-16">
              <div className="col-span-12 lg:col-span-7">
                <div className="felinda-sans text-xs uppercase tracking-[0.32em] text-clay">
                  The Hand Behind the Work
                </div>
                <h2 className="felinda-serif mt-4 text-4xl leading-tight lg:text-6xl">
                  Founder-led,
                  <br />
                  in every <span className="italic text-rose">detail.</span>
                </h2>

                <Flourish className="mt-8 h-3 w-48 text-clay/70 lg:w-60" />

                <p className="felinda-serif mt-10 text-2xl leading-relaxed text-ink lg:text-3xl">
                  &ldquo;I work slowly, on purpose. The pieces I help shape
                  are intended to be lived with, returned to, and
                  remembered.&rdquo;
                </p>

                <p className="felinda-sans mt-8 max-w-xl text-lg leading-8 text-muted">
                  Every Felinda creation passes through the founder&rsquo;s
                  direct attention — from the first conversation, through
                  stone selection, to the final reveal. It is a slower way of
                  working, and an entirely intentional one.
                </p>

                <div className="mt-10 flex items-center gap-5 border-t border-line pt-7">
                  <Crest className="h-12 w-12 text-clay" />
                  <div>
                    <div className="felinda-serif text-2xl italic text-ink">
                      Felinda
                    </div>
                    <div className="felinda-sans mt-1 text-xs uppercase tracking-[0.22em] text-clay">
                      Founder · Atelier Felinda
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <div className="relative">
                  <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-[0_22px_60px_rgba(72,49,41,0.1)]">
                    <div className="relative h-[500px] overflow-hidden rounded-[1.5rem] lg:h-[640px]">
                      <Image
                        src="/images/custom-ring-malaysia.webp"
                        alt="Founder portrait — Felinda"
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* signature stamp */}
                  <div className="absolute -left-5 top-8 hidden h-24 w-24 -rotate-6 items-center justify-center rounded-full border-2 border-rose/60 bg-cream text-center shadow-[0_10px_30px_rgba(216,162,154,0.25)] sm:flex lg:-left-8">
                    <div>
                      <div className="felinda-serif text-2xl italic text-rose">
                        F.
                      </div>
                      <div className="felinda-sans text-[9px] uppercase tracking-[0.28em] text-clay">
                        Atelier
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ TAKEOVER QUOTE ════════ */}
        <section className="relative overflow-hidden border-y border-line bg-shell">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-roseSoft/25 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:px-10 lg:py-36">
            <Crest className="mx-auto h-14 w-14 text-rose lg:h-16 lg:w-16" />
            <Mark className="mx-auto mt-6 h-4 w-12 text-clay" />
            <p className="felinda-serif mt-8 text-3xl leading-[1.2] text-ink lg:text-6xl">
              A jewelry house should feel less like a catalog
              <br />
              and more like a{" "}
              <span className="italic text-rose">private letter.</span>
            </p>
            <Flourish className="mx-auto mt-10 h-3 w-48 text-clay/70 lg:w-60" />
            <div className="felinda-sans mt-6 text-xs uppercase tracking-[0.32em] text-clay">
              The Felinda Approach
            </div>
          </div>
        </section>

        {/* ════════ CLOSING CTA ════════ */}
        <section className="bg-ink py-24 text-cream lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
            <div className="felinda-sans text-xs uppercase tracking-[0.32em] text-rose">
              Begin
            </div>
            <h2 className="felinda-serif mt-4 text-4xl leading-tight text-cream lg:text-6xl">
              A piece of your own,
              <br />
              in your <span className="italic text-roseSoft">own time.</span>
            </h2>
            <p className="felinda-sans mx-auto mt-6 max-w-xl text-lg leading-8 text-cream/70">
              Reach the atelier when you&rsquo;re ready. The first
              conversation is the only step you need to take today.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="felinda-sans rounded-full bg-rose px-7 py-3.5 text-sm font-medium tracking-[0.04em] text-white transition hover:opacity-90"
              >
                Begin a Conversation
              </Link>
              <Link
                href="/"
                className="felinda-sans rounded-full border border-cream/40 bg-transparent px-7 py-3.5 text-sm font-medium tracking-[0.04em] text-cream transition hover:bg-cream/10"
              >
                Return Home
              </Link>
            </div>

            <Flourish className="mx-auto mt-14 h-3 w-48 text-rose/60 lg:w-60" />
            <div className="felinda-sans mt-6 text-xs uppercase tracking-[0.32em] text-cream/50">
              Felinda Atelier · Kuala Lumpur · MMXXVI
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
