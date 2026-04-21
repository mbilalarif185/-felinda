import Link from "next/link";
import {
  MessagesSquare,
  PencilRuler,
  Gem,
  Hammer,
  Sparkles,
  PackageCheck,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Design Process — Felinda Jewelry",
  description:
    "From the first conversation to the final unveiling — six quiet steps that shape every Felinda bespoke piece.",
};

const steps = [
  {
    icon: MessagesSquare,
    week: "Week 1",
    title: "The Conversation",
    body: "We sit with you — in studio, by video, or over tea — to understand the moment, the wearer and the meaning. No sketches yet, just listening.",
    deliverables: ["Private 60-min consultation", "Mood references", "Indicative budget"],
  },
  {
    icon: PencilRuler,
    week: "Week 2 – 3",
    title: "Sketch & Concept",
    body: "Our designers draft three hand-rendered directions. We refine together until one feels unmistakably yours — silhouette, proportion, the curve of every line.",
    deliverables: ["3 concept sketches", "1 refined direction", "Approved silhouette"],
  },
  {
    icon: Gem,
    week: "Week 3 – 4",
    title: "Stone & Metal Sourcing",
    body: "We curate ethically-sourced gemstones from our trusted partners — South Sea pearls, certified diamonds, untreated sapphires — paired with the gold or platinum that flatters them best.",
    deliverables: ["Curated stone selection", "Certificates of origin", "Metal & finish chosen"],
  },
  {
    icon: Hammer,
    week: "Week 4 – 6",
    title: "CAD & Wax Model",
    body: "Your piece moves from paper to a 3D CAD render and a hand-finished wax. You'll see it from every angle — and try the wax on — before a single gram of gold is cast.",
    deliverables: ["360° CAD preview", "Wearable wax fitting", "Final sign-off"],
  },
  {
    icon: Sparkles,
    week: "Week 6 – 9",
    title: "Atelier Craft",
    body: "Our master jewellers cast, set and polish your piece by hand in our Bangsar atelier. Every prong, every facet, every micro-pavé is checked under loupe — twice.",
    deliverables: ["Hand-set stones", "Bench polish", "Independent QC"],
  },
  {
    icon: PackageCheck,
    week: "Week 10",
    title: "The Unveiling",
    body: "Your finished piece is presented in a Felinda heirloom box, with its certificate, care guide and a lifetime craftsmanship promise. Yours, finally.",
    deliverables: ["Heirloom presentation", "Lifetime care promise", "Insurance valuation"],
  },
];

const standards = [
  {
    title: "Ethically sourced gemstones",
    body: "Every diamond is conflict-free; every coloured stone is traceable to its mine.",
  },
  {
    title: "Recycled & responsible metals",
    body: "18k rose, yellow and white gold refined from recycled origin — never newly mined.",
  },
  {
    title: "Hand-set, never mass-produced",
    body: "Every Felinda piece is finished at one bench, by one jeweller, start to finish.",
  },
  {
    title: "Lifetime craftsmanship promise",
    body: "Re-polishing, re-rhodium and prong-tightening, complimentary, for as long as you wear it.",
  },
];

const faqs = [
  {
    q: "How long does a bespoke piece take?",
    a: "Most commissions are delivered in 8 – 10 weeks. Heirloom restorations and high-jewellery pieces can take 12 – 16 weeks; we always give you a written timeline at sign-off.",
  },
  {
    q: "Can I bring my own stones or old jewellery?",
    a: "Yes — many of our most loved pieces begin as a grandmother's pearls or an inherited diamond. We'll evaluate, re-cut if needed, and design around them.",
  },
  {
    q: "What's the typical investment?",
    a: "Bespoke commissions begin around RM 8,000 and scale with the stones and complexity. We're transparent about costs from the first meeting — no surprises.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship insured, white-glove worldwide. Virtual consultations are available across time zones; in-person fittings are by appointment in Kuala Lumpur.",
  },
];

export default function DesignProcessPage() {
  return (
    <>
      <Header activeHref="/process" />

      <main className="min-h-screen bg-[#f6f0ec] text-[#56463f]">
        <PageHero
          title="The Design Process"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Design Process" },
          ]}
        />

        <section className="relative z-10 px-6 pb-12">
          <div className="mx-auto max-w-[1320px] rounded-[30px] border border-[#e7dbd5] bg-[#fbf7f4] px-6 py-10 shadow-[0_10px_30px_rgba(110,90,80,0.04)] md:px-10 md:py-12">
            {/* Lead */}
            <div className="mx-auto max-w-[900px] text-center">
              <h2 className="font-serif text-[40px] font-light leading-[1.05] tracking-[-0.03em] text-[#4f413a] md:text-[60px]">
                Six quiet steps,{" "}
                <span
                  className="text-[#d59a92]"
                  style={{
                    fontFamily:
                      "var(--font-great-vibes), 'Great Vibes', 'Allura', cursive",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  one heirloom
                </span>
                .
              </h2>

              <div className="mx-auto mt-6 flex items-center justify-center gap-4">
                <div className="h-px w-14 bg-[#e4c9c0]" />
                <div className="text-[#d49a92]">✦</div>
                <div className="h-px w-14 bg-[#e4c9c0]" />
              </div>

              <p className="mx-auto mt-7 max-w-[760px] font-serif text-[18px] leading-[1.8] text-[#78675f] md:text-[20px]">
                Every Felinda commission moves through the same considered
                rhythm — from the very first conversation to the morning we
                place your finished piece in your hands. Here is how.
              </p>
            </div>

            {/* Steps timeline */}
            <div className="relative mt-14">
              {/* Center vertical line (desktop only) */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#e3c8bf] to-transparent lg:block"
              />

              <ol className="space-y-10 lg:space-y-16">
                {steps.map((s, i) => {
                  const Icon = s.icon;
                  const isRight = i % 2 === 1;
                  return (
                    <li
                      key={s.title}
                      className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10"
                    >
                      {/* Card */}
                      <div
                        className={`order-2 lg:order-${isRight ? "3" : "1"} ${
                          isRight ? "lg:text-left" : "lg:text-right"
                        }`}
                      >
                        <div
                          className={`rounded-[18px] border border-[#eee3de] bg-[#fefcfa] p-7 shadow-[0_4px_15px_rgba(90,70,60,0.04)] ${
                            isRight ? "lg:ml-2" : "lg:mr-2"
                          }`}
                        >
                          <div
                            className={`flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-[#c88f87] ${
                              isRight ? "" : "lg:flex-row-reverse"
                            }`}
                          >
                            <span>Step {String(i + 1).padStart(2, "0")}</span>
                            <span className="h-px w-6 bg-[#e3c8bf]" />
                            <span className="italic tracking-normal text-[#a89a92]">
                              {s.week}
                            </span>
                          </div>
                          <h3 className="mt-3 font-serif text-[26px] font-light leading-tight text-[#4f413a] md:text-[32px]">
                            {s.title}
                          </h3>
                          <p className="mt-3 text-[16px] leading-[1.75] text-[#78675f] md:text-[17px]">
                            {s.body}
                          </p>
                          <ul
                            className={`mt-5 space-y-2 text-[14px] text-[#5a4d46] md:text-[15px] ${
                              isRight ? "" : "lg:text-right"
                            }`}
                          >
                            {s.deliverables.map((d) => (
                              <li
                                key={d}
                                className={`flex items-start gap-2 ${
                                  isRight ? "" : "lg:flex-row-reverse lg:gap-2"
                                }`}
                              >
                                <CheckCircle2
                                  size={16}
                                  className="mt-[3px] shrink-0 text-[#cf938b]"
                                />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Center icon node */}
                      <div className="relative order-1 flex justify-center lg:order-2">
                        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#dfc5bc] bg-[#fbf7f4] text-[#cf938b] shadow-[0_8px_22px_rgba(207,147,139,0.18)]">
                          <Icon size={24} strokeWidth={1.6} />
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div
                        aria-hidden
                        className={`hidden lg:block ${
                          isRight ? "lg:order-1" : "lg:order-3"
                        }`}
                      />
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Standards */}
            <div className="mt-16 border-t border-[#ece1dc] pt-12">
              <div className="mx-auto max-w-[760px] text-center">
                <h3 className="font-serif text-[30px] font-light text-[#4f413a] md:text-[40px]">
                  Our quiet standards
                </h3>
                <p className="mx-auto mt-4 max-w-[620px] text-[16px] text-[#78675f] md:text-[17px]">
                  The non-negotiables behind every Felinda piece — the things
                  we do whether you ask or not.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                {standards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[18px] border border-[#eee3de] bg-[#fefcfa] p-6 shadow-[0_4px_15px_rgba(90,70,60,0.04)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfc5bc] text-[#cf938b]">
                      <Gem size={18} strokeWidth={1.6} />
                    </div>
                    <h4 className="mt-4 font-serif text-[20px] font-light text-[#4f413a] md:text-[22px]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[14px] leading-[1.7] text-[#78675f] md:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16 border-t border-[#ece1dc] pt-12">
              <div className="mx-auto max-w-[760px] text-center">
                <h3 className="font-serif text-[30px] font-light text-[#4f413a] md:text-[40px]">
                  Questions, answered
                </h3>
                <p className="mx-auto mt-4 max-w-[620px] text-[16px] text-[#78675f] md:text-[17px]">
                  The things our clients usually want to know before we begin.
                </p>
              </div>

              <div className="mx-auto mt-8 max-w-[920px] space-y-3">
                {faqs.map((f, i) => (
                  <details
                    key={i}
                    className="group overflow-hidden rounded-[14px] border border-[#eee3de] bg-[#fefcfa] open:shadow-[0_4px_15px_rgba(90,70,60,0.05)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-serif text-[18px] font-light text-[#4f413a] md:text-[20px]">
                      <span>{f.q}</span>
                      <span
                        aria-hidden
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e3c8bf] text-[#c88f87] transition group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5 text-[15px] leading-[1.75] text-[#78675f] md:text-[16px]">
                      {f.a}
                    </div>
                  </details>
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
                    Ready for your first conversation?
                  </h3>
                  <p className="mt-1 text-[16px] text-[#807069] md:text-[18px]">
                    A private 60-minute session, in studio or by video — yours,
                    no obligation.
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
