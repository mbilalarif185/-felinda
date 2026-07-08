import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { aboutMeta } from "@/lib/seo/meta-copy";

export const metadata = buildPageMetadata({
  absoluteTitle: aboutMeta.absoluteTitle,
  description: aboutMeta.description,
  keywords: aboutMeta.keywords,
  path: "/about",
});

export const revalidate = 86400;

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
    title: "By Appointment Only",
    text: "Auréa operates beyond the traditional storefront. Every engagement begins with a private conversation — personal, considered, and entirely without distraction."},
  {
    title: "Creative Direction by Auréa ",
    text: "Every piece is shaped under Auréa’s direction — from the initial concept to the final form. Supported by a trusted atelier team, each creation remains true to her vision, standards, and design philosophy."},
  {
    title: "Designed to Be Inherited",
    text: "Nothing at Auréa is created for a moment alone. Each commission is conceived with the weight of time — made to be returned to, not replaced."},
];

const craftPillars = [
  {
    Icon: IconAtelier,
    title: "The Studio",
    text: "A deliberately intimate space one that keeps the work close, the clients fewer, and the attention undivided. Auréa will never scale beyond what one pair of hands can do with integrity."  },
  {
    Icon: IconConsultation,
    title: "The Conversation",
    text: "Every commission begins not with a price list, but with a question: what are you trying to hold onto? That question guides everything that follows the design, the stones, the form." , },
  {
    Icon: IconStone,
    title: "Considered Stones",
    text: "Gemstones are not selected for their carat weight or their category. They are chosen for the quality of their light, the depth of their character, and the way they speak to the specific piece being made."  },
  {
    Icon: IconHand,
    title: "Handcrafted Finish",
    text: "Every Auréa piece is refined by hand through every stage of its making. There is a point in the process where the piece begins to feel inevitable and we do not stop until we reach it.",  },
];

const signatureMoments = [
  {
    eyebrow: "I · THE BEGINNING",
    title: "Before There Was a Name, There Was a Standard.",
    text: "Auréa did not begin as a business. It began as a refusal — a refusal to accept the ordinary, to create what is expected, or to settle for what is simply enough. From the very first piece, everything has been measured against a single question: is this exactly right? Not good. Not almost. Exactly right."},
  {
    eyebrow: "II · THE PRACTICE",
    title: "One Vision. One Client. One Piece at a Time.",
    text: "No production lines. No excess. No dilution of intent. Every piece is approached with precision and purpose — guided from first sketch to final form with unwavering attention. This is not about volume. It is about getting it exactly right."},
  {
    eyebrow: "III · The Intention",
    title: "Made to Outlive the Moment",
    text: "Trends are a distraction. Auréa does not follow them. Each piece is created to endure — beyond the moment, beyond the years, beyond the person it was first made for. It demands a different standard: not is this beautiful now? but will this still be right in thirty years? It takes longer. It is worth it."},
    ];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header activeHref="/about" />

      <main className="min-w-0">
        <PageHero
          title="About Auréa"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        />

        {/* ════════ INTRO LEAD — cream, transitions out of the hero ════════ */}
        <section className="bg-[#f6f0ec] pb-12 pt-2 sm:pb-16 lg:pb-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
            <p className="auréa-serif text-[18px] leading-[1.7] text-[#5b4d44] sm:text-xl lg:text-2xl lg:leading-[1.7]">
              Auréa is a founder-led private atelier, where fine jewelry is created without haste, without compromise, and always in quiet devotion to the individual it is made for.
               
            </p>
          </div>
        </section>

        {/* ════════ VALUE STRIP — soft cream, rose accents (matches the banner) ════════ */}
        <section className="bg-[#f6f0ec] pb-12 sm:pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-7">
              {valueStrip.map((item, i) => (
                <div
                  key={item.title}
                  className="group min-w-0 flex h-full flex-col items-center rounded-[1.5rem] border border-line/80 bg-white px-5 py-8 text-center shadow-[0_10px_36px_rgba(72,49,41,0.05)] ring-1 ring-black/[0.02] transition duration-300 sm:rounded-[1.75rem] sm:px-8 sm:py-10 lg:px-9 lg:py-12 hover:border-line hover:shadow-[0_16px_44px_rgba(72,49,41,0.08)]"
                >
                  <div className="auréa-sans text-[11px] font-medium uppercase tracking-[0.24em] text-rose/90 sm:tracking-[0.3em]">
                    No. 0{i + 1}
                  </div>
                  <Mark className="mt-3.5 h-4 w-12 shrink-0 text-rose/70" />
                  <h3 className="auréa-serif mt-4 break-words text-[28px] leading-[1.12] text-ink sm:mt-5 sm:text-[30px] sm:leading-snug">
                    {item.title}
                  </h3>
                  <p className="auréa-sans mt-3 w-full max-w-sm flex-1 text-[14px] leading-[1.65] text-[#6b5e56] sm:mt-4 sm:max-w-none sm:text-[15px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      

        {/* ════════ EDITORIAL STORY — IMAGE + TEXT, ASYMMETRIC ════════ */}
        <section className="relative overflow-x-hidden bg-shell py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-16">
              <div className="w-full lg:col-span-5">
                <div className="relative">
                  <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-[0_22px_60px_rgba(72,49,41,0.1)]">
                    <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] sm:h-[500px] lg:h-[640px]">
                      <Image
                        src="/images/malaysia.webp"
                        alt="Auréa atelier studio"
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* floating caption card */}
                  <div className="absolute bottom-3 right-3 max-w-[180px] rounded-[1.25rem] border border-line bg-cream p-4 shadow-[0_14px_35px_rgba(72,49,41,0.1)] sm:max-w-[220px] sm:p-5 lg:-right-8 lg:-bottom-5">
                    <div className="auréa-sans text-[10px] uppercase tracking-[0.18em] text-clay sm:text-xs sm:tracking-[0.22em]">
                      Plate I
                    </div>
                    <div className="auréa-serif mt-2 text-lg leading-snug text-ink sm:text-xl">
                      The working studio
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full min-w-0 max-w-[760px] lg:col-span-7 lg:max-w-none">
                <Mark className="h-4 w-12 text-clay" />
                <div className="auréa-sans mt-5 text-xs uppercase tracking-[0.22em] text-clay sm:tracking-[0.32em]">
                  Our Story
                </div>
                <h2 className="auréa-serif mt-3 text-[30px] leading-[1.15] sm:mt-4 sm:text-4xl sm:leading-tight lg:text-6xl">
                    Not a brand  but a
                  <br />
                  <span className="italic text-rose">belief</span> in doing things properly.
                </h2>

                <div className="mt-7 space-y-4 sm:mt-10 sm:space-y-6">
                  {signatureMoments.map((m) => (
                    <article
                      key={m.eyebrow}
                      className="w-full max-w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-line bg-white p-4 shadow-[0_10px_30px_rgba(72,49,41,0.04)] sm:p-7"
                    >
                      <div className="auréa-sans text-[10px] uppercase tracking-[0.16em] text-rose sm:text-xs sm:tracking-[0.28em]">
                        {m.eyebrow}
                      </div>
                      <h3 className="auréa-serif mt-2 min-w-0 break-words text-[16px] leading-snug text-ink sm:mt-3 sm:text-2xl lg:text-3xl">
                        {m.title}
                      </h3>
                      <p className="auréa-sans mt-2 min-w-0 whitespace-normal break-words text-[14px] leading-7 text-muted [overflow-wrap:anywhere] sm:mt-3 sm:text-[15px]">
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
        <section className="relative overflow-hidden bg-ink py-16 text-cream sm:py-24 lg:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 25%, #D8A29A 0%, transparent 45%), radial-gradient(circle at 85% 75%, #E8C4BF 0%, transparent 45%)",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="text-center">
              <Mark className="mx-auto h-4 w-12 text-rose" />
              <div className="auréa-sans mt-5 text-xs uppercase tracking-[0.22em] text-rose sm:tracking-[0.32em]">
                The Auréa Promise
              </div>
              <h2 className="auréa-serif mt-4 text-[32px] leading-tight text-cream sm:text-4xl lg:text-6xl">
                Three Things We Will Never Compromise
              </h2>
              <Flourish className="mx-auto mt-8 h-3 w-48 text-rose/80 lg:w-60" />
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {[
                {
                  no: "01",
                  title: "Discretion",
                  text: "What is shared with Auréa remains with Auréa. No exposure. No exceptions."},
                {
                  no: "02",
                  title: "Time",
                  text: "A piece is finished only when it is right. Not when it is scheduled."},
                {
                  no: "03",
                  title: "Integrity of Material",
                  text: "Only what meets the atelier’s highest standard is accepted. Nothing less."},
              ].map((p) => (
                <article
                  key={p.no}
                  className="group relative min-w-0 overflow-hidden rounded-[2rem] border border-cream/15 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-rose/40 sm:p-8 lg:p-10"
                >
                  <div className="auréa-serif text-6xl leading-none text-rose/30 transition group-hover:text-rose/60 sm:text-7xl">
                    {p.no}
                  </div>
                  <h3 className="auréa-serif mt-4 min-w-0 break-words text-3xl leading-snug text-cream">
                    {p.title}
                  </h3>
                  <Mark className="mt-4 h-3 w-10 text-rose/80" />
                  <p className="auréa-sans mt-5 min-w-0 break-words text-[15px] leading-7 text-cream/70 [overflow-wrap:anywhere]">
                    {p.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FOUNDER PORTRAIT — INTIMATE, LIGHT ════════ */}
        <section className="bg-cream py-16 sm:py-24 lg:py-32">
          <div className="mx-auto box-border w-full max-w-7xl px-4 sm:px-6 lg:px-10">
            {/* Mobile: plain column (no 12-col grid) so text can shrink to viewport; lg: two-column grid */}
            <div className="flex w-full min-w-0 flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-16">
              <div className="w-full min-w-0 max-w-full lg:col-span-7">
                <div className="auréa-sans text-xs uppercase tracking-[0.22em] text-clay sm:tracking-[0.32em]">
                  The Hand Behind the Work
                </div>
                <h2 className="auréa-serif mt-4 max-w-full break-words text-[32px] leading-[1.15] sm:text-4xl sm:leading-tight lg:text-6xl">
                  Founder-led,
                  <br />
                  in every <span className="italic text-rose">Sense of the Word</span>
                </h2>

                <Flourish className="mt-8 block h-3 w-full max-w-[12rem] text-clay/70 sm:max-w-[15rem]" />

                <p className="auréa-serif mt-8 max-w-full hyphens-auto break-words text-[20px] leading-[1.45] text-ink [overflow-wrap:anywhere] sm:mt-10 sm:text-2xl sm:leading-relaxed lg:text-3xl">
                  &ldquo;I am not interested in making beautiful things quickly. I am interested in making the right thing once—fully—for the person who will carry it for a lifetime.&rdquo;
                </p>

                <p className="auréa-sans mt-8 max-w-full text-pretty hyphens-none text-[15px] leading-[1.7] text-muted sm:max-w-xl sm:text-[17px] sm:leading-8 lg:text-lg">
                  Auréa began not with adornment, but with precision. With an obsession for how much meaning a small object can hold. And with the quiet realisation that jewelry, when made with intention, can preserve light, memory, and presence — long after the moment itself has passed.
                </p>

                <div className="mt-10 flex min-w-0 items-center gap-5 border-t border-line pt-7">
                  <Crest className="h-12 w-12 shrink-0 text-clay" />
                  <div className="min-w-0">
                    <div className="auréa-serif text-2xl italic text-ink">
                      Auréa
                    </div>
                    <div className="auréa-sans mt-1 text-xs uppercase tracking-[0.22em] text-clay">
                      Founder · Atelier Auréa
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 min-w-0 max-w-full lg:col-span-5">
                <div className="relative">
                  <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-[0_22px_60px_rgba(72,49,41,0.1)]">
                    <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] sm:h-[500px] lg:h-[640px]">
                      <Image
                        src="/images/aurea-jewellery/buy-a-ring-in-malaysia.webp"
                        alt="Founder portrait, Auréa"
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* signature stamp */}
                  <div className="absolute -left-5 top-8 hidden h-24 w-24 -rotate-6 items-center justify-center rounded-full border-2 border-rose/60 bg-cream text-center shadow-[0_10px_30px_rgba(216,162,154,0.25)] sm:flex lg:-left-8">
                    <div>
                      <div className="auréa-serif text-2xl italic text-rose">
                        F.
                      </div>
                      <div className="auréa-sans text-[9px] uppercase tracking-[0.28em] text-clay">
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

          <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-28 lg:px-10 lg:py-36">
            <Crest className="mx-auto h-14 w-14 text-rose lg:h-16 lg:w-16" />
            <Mark className="mx-auto mt-6 h-4 w-12 text-clay" />
            <p className="auréa-serif mt-8 text-[33px] leading-[1.2] text-ink sm:text-3xl lg:text-6xl">
              A jewelry house should feel less like a catalog,
              
              and more like a{" "}
              <span className="italic text-rose">private letter-</span>written for one.
            </p>
            <Flourish className="mx-auto mt-10 h-3 w-48 text-clay/70 lg:w-60" />
            <div className="auréa-sans mt-6 text-xs uppercase tracking-[0.22em] text-clay sm:tracking-[0.32em]">
              The Auréa Approach
            </div>
          </div>
        </section>

        {/* ════════ CLOSING CTA ════════ */}
        <section className="bg-ink py-16 text-cream sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
            <div className="auréa-sans text-xs uppercase tracking-[0.22em] text-rose sm:tracking-[0.32em]">
              Begin
            </div>
            <h2 className="auréa-serif mt-4 text-[32px] leading-tight text-cream sm:text-4xl lg:text-6xl">
              A piece of your own,
              <br />
              in your <span className="italic text-roseSoft">own time.</span>
            </h2>
            <p className="auréa-sans mx-auto mt-6 max-w-xl text-[17px] leading-8 text-cream/70 sm:text-lg">
              Reach out to the atelier when you are ready. The first conversation is the only step you need to take today.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="auréa-sans rounded-full bg-rose px-7 py-3.5 text-sm font-medium tracking-[0.04em] text-white transition hover:opacity-90"
              >
                Begin a Conversation
              </Link>
              <Link
                href="/"
                className="auréa-sans rounded-full border border-cream/40 bg-transparent px-7 py-3.5 text-sm font-medium tracking-[0.04em] text-cream transition hover:bg-cream/10"
              >
                Return Home
              </Link>
            </div>

            <Flourish className="mx-auto mt-14 h-3 w-48 text-rose/60 lg:w-60" />
            <div className="auréa-sans mt-6 text-xs uppercase tracking-[0.2em] text-cream/50 sm:tracking-[0.32em]">
              Auréa Atelier · Petaling Jaya · 2026
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
