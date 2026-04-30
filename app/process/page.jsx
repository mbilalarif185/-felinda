import Link from "next/link";
import {
  MessagesSquare,
  PencilRuler,
  Gem,
  Layers,
  Hammer,
  PackageCheck,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { consultationBookingHref } from "@/lib/contact";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { processMeta } from "@/lib/seo/meta-copy";

export const metadata = buildPageMetadata({
  absoluteTitle: processMeta.absoluteTitle,
  description: processMeta.description,
  path: "/process",
});

export const revalidate = 86400;

const steps = [
  {
    icon: MessagesSquare,
    week: "Week 1",
    title: "Consultation",
    body: "We meet in the atelier or by video to hear the story, the occasion, and how you want the piece to feel on the skin. We align on budget, timeline, and references before anything is drawn.",
    deliverables: [
      "Private consultation",
      "Mood & reference board",
      "Written brief & indicative budget",
    ],
  },
  {
    icon: PencilRuler,
    week: "Week 2",
    title: "Concept & Sketch",
    body: "Designers translate the brief into hand-drawn concepts and proportion studies. Together we choose a direction, refine silhouette and detail, and lock the creative line before stones and metal are committed.",
    deliverables: [
      "Hand-rendered concept routes",
      "Chosen direction refined on paper",
      "Approved design outline",
    ],
  },
  {
    icon: Gem,
    week: "Week 3",
    title: "Sourcing",
    body: "We shortlist gemstones and alloys with our trusted partners: traceable coloured stones, certified diamonds where needed, South Sea or Akoya pearls, matched to metal colour and finish for the stone story.",
    deliverables: [
      "Curated stone & pearl options",
      "Metal alloy & finish selection",
      "Provenance notes & certificates as applicable",
    ],
  },
  {
    icon: Layers,
    week: "Week 4",
    title: "Model & approval",
    body: "The approved sketch becomes a dimensional model (CAD, resin, or carved wax depending on the piece). You review proportions in the round and try a wax where it helps, before casting is authorised.",
    deliverables: [
      "CAD and/or wax milestone",
      "Wearable or visual fitting where relevant",
      "Your written go-ahead to cast",
    ],
  },
  {
    icon: Hammer,
    week: "Week 5",
    title: "Atelier craft",
    body: "Goldsmiths cast, file, set and polish entirely by hand on the bench. Settings are checked under loupe; every junction between metal and stone is finished to Felinda standard before final polish.",
    deliverables: [
      "Hand fabrication & stone setting",
      "In-process bench checks",
      "Pre-polish quality review",
    ],
  },
  {
    icon: PackageCheck,
    week: "Week 6",
    title: "Completion & unveiling",
    body: "Final polish, hallmarking where required, and a last quiet inspection. We present the finished piece with its certificate, care notes, and our lifetime craftsmanship promise, ready to wear home.",
    deliverables: [
      "Final QC & presentation",
      "Care guide & documentation",
      "Lifetime craftsmanship promise",
    ],
  },
];

const standards = [
  {
    title: "Ethically sourced gemstones",
    body: "Every diamond is conflict-free; every coloured stone is traceable to its mine.",
  },
  {
    title: "Recycled & responsible metals",
    body: "18k rose, yellow and white gold refined from recycled origin, never newly mined.",
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
    a: "We plan around a six-week arc from consultation to handover for many studio commissions. Complex high-jewellery pieces, multi-stone sourcing, or heirloom reworks can run longer; you receive a written timeline before work begins.",
  },
  {
    q: "Can I bring my own stones or old jewellery?",
    a: "Yes. Many of our most loved pieces begin as a grandmother's pearls or an inherited diamond. We'll evaluate, re-cut if needed, and design around them.",
  },
  {
    q: "What's the typical investment?",
    a: "Bespoke commissions begin around RM 8,000 and scale with the stones and complexity. We're transparent about costs from the first meeting, with no surprises.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship insured, white-glove worldwide. Virtual consultations are available across time zones; in-person fittings are by appointment in Petaling Jaya, Selangor.",
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
          <div className="mx-auto max-w-[1320px] rounded-[30px] bg-[#fbf7f4] px-6 py-10 shadow-[0_10px_30px_rgba(110,90,80,0.06)] md:px-10 md:py-12">
            {/* Lead */}
            <div className="mx-auto max-w-[900px] text-center">
              <h2 className="font-serif text-[40px] font-light leading-[1.05] tracking-[-0.03em] text-[#4f413a] md:text-[60px]">
                Six weeks,{" "}
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

              <p className="mx-auto mt-7 max-w-[760px] font-serif text-[18px] leading-[1.8] text-[#78675f] md:text-[20px]">
                Our reference bespoke journey is paced across six weeks: one
                chapter each for consultation, concept and sketch, sourcing,
                modelling and approval, bench craft, then completion and
                unveiling. Some commissions may extend; we always confirm a
                written timeline at sign-off.
              </p>
            </div>

            {/* Steps timeline */}
            <div className="relative mt-14">
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
                          className={`rounded-[18px] bg-[#fefcfa] p-7 shadow-[0_6px_24px_rgba(90,70,60,0.07)] ${
                            isRight ? "lg:ml-2" : "lg:mr-2"
                          }`}
                        >
                          <div
                            className={`flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-[#c88f87] ${
                              isRight ? "" : "lg:flex-row-reverse"
                            }`}
                          >
                            <span>Step {String(i + 1).padStart(2, "0")}</span>
                            <span className="text-[#d49a92]" aria-hidden>
                              ·
                            </span>
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
                        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#fbf7f4] text-[#cf938b] shadow-[0_8px_22px_rgba(207,147,139,0.22)]">
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
            <div className="mt-20 pt-4">
              <div className="mx-auto max-w-[760px] text-center">
                <h3 className="font-serif text-[30px] font-light text-[#4f413a] md:text-[40px]">
                  Our quiet standards
                </h3>
                <p className="mx-auto mt-4 max-w-[620px] text-[16px] text-[#78675f] md:text-[17px]">
                  The non-negotiables behind every Felinda piece: the things we
                  do whether you ask or not.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                {standards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[18px] bg-[#fefcfa] p-6 shadow-[0_6px_20px_rgba(90,70,60,0.06)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fdf9f7] text-[#cf938b] shadow-[0_2px_8px_rgba(207,147,139,0.15)]">
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
            <div className="mt-20 pt-4">
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
                    className="group overflow-hidden rounded-[14px] bg-[#fefcfa] shadow-[0_4px_16px_rgba(90,70,60,0.05)] open:shadow-[0_6px_22px_rgba(90,70,60,0.08)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-serif text-[18px] font-light text-[#4f413a] md:text-[20px]">
                      <span>{f.q}</span>
                      <span
                        aria-hidden
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fdf6f4] text-[#c88f87] transition group-open:rotate-45"
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
            <div className="mt-12 flex flex-col gap-5 rounded-[18px] bg-[#f8f3ef] px-6 py-6 shadow-[0_6px_20px_rgba(90,70,60,0.06)] lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fdf9f7] text-[#cf938b] shadow-[0_2px_10px_rgba(207,147,139,0.18)]">
                  <CalendarDays size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-serif text-[26px] font-light text-[#54463f] md:text-[34px]">
                    Ready for your first conversation?
                  </h3>
                  <p className="mt-1 text-[16px] text-[#807069] md:text-[18px]">
                    A private 60-minute session in the studio or by video. No
                    obligation to proceed.
                  </p>
                </div>
              </div>

              <Link
                href={consultationBookingHref}
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
