import { CalendarDays, Gem, Palette, ShieldCheck, Sparkles } from "lucide-react";

import {
  earringsBenefitsBullets,
  earringsBenefitsClosing,
  earringsBenefitsLead,
  earringsBenefitsSectionTitle,
  earringsProcessFooter,
  earringsProcessSteps,
  earringsProcessSubtitle,
  earringsProcessTitle,
  earringsWhyLead,
  earringsWhyPillars,
  earringsWhyTitle,
} from "@/lib/content/earrings-page";

import EarringsFaqAccordion from "@/components/earrings/EarringsFaqAccordion";

const WHY_ICONS = [Sparkles, Palette, Gem, ShieldCheck, CalendarDays];

function SectionShell({ children, className = "" }) {
  return <div className={`mx-auto max-w-[1040px] ${className}`}>{children}</div>;
}

export default function EarringsStorySections() {
  return (
    <div className="mt-14 space-y-16 md:space-y-20">
      <section aria-labelledby="earrings-why-heading">
        <SectionShell>
          <div className="text-center">
            <h2
              id="earrings-why-heading"
              className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#4f413a] md:text-[44px]"
            >
              {earringsWhyTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] font-serif text-[17px] leading-[1.85] text-[#78675f] md:text-[19px]">
              {earringsWhyLead}
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5 xl:gap-4">
            {earringsWhyPillars.map((pillar, i) => {
              const Icon = WHY_ICONS[i] ?? Sparkles;
              return (
                <li key={pillar.title}>
                  <div className="group flex h-full min-h-[200px] flex-col rounded-[18px] border border-[#ebe0db] bg-[#fffdfb] p-6 shadow-[0_6px_22px_rgba(110,90,80,0.04)] transition duration-300 hover:border-[#dfc9c0] hover:shadow-[0_12px_32px_rgba(110,90,80,0.07)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ead6d0] bg-[#fdf9f7] text-[#c88f87] transition group-hover:border-[#e0c4bc] group-hover:bg-white">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3 className="mt-5 font-serif text-[19px] font-light leading-snug text-[#4f413a] md:text-[21px]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 flex-1 font-serif text-[14px] leading-relaxed text-[#756860] md:text-[15px]">
                      {pillar.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </SectionShell>
      </section>

      <div className="border-t border-[#ece1dc]" />

      <section aria-labelledby="earrings-process-heading">
        <SectionShell>
          <div className="text-center">
            <h2
              id="earrings-process-heading"
              className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#4f413a] md:text-[44px]"
            >
              {earringsProcessTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] font-serif text-[17px] leading-[1.85] text-[#78675f] md:text-[18px]">
              {earringsProcessSubtitle}
            </p>
          </div>

          <ol className="mx-auto mt-12 grid max-w-[1100px] list-none gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-6">
            {earringsProcessSteps.map((step, index) => (
              <li key={step.title}>
                <div className="flex h-full flex-col rounded-[16px] border border-[#eaded8] bg-[#fffdfb] px-5 py-6 text-center shadow-[0_4px_18px_rgba(110,90,80,0.04)] md:px-4 md:py-7">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#dfc5bc] bg-[#fbf7f4] font-serif text-[15px] text-[#c88f87]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-serif text-[19px] font-light leading-snug text-[#54463f] md:text-[21px]">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-center font-serif text-[14px] leading-relaxed text-[#807069] md:text-[15px]">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-12 max-w-[760px] text-center font-serif text-[17px] leading-[1.85] text-[#78675f] md:text-[18px]">
            {earringsProcessFooter}
          </p>
        </SectionShell>
      </section>

      <div className="border-t border-[#ece1dc]" />

      <section aria-labelledby="earrings-benefits-heading">
        <SectionShell>
          <div className="text-center">
            <h2
              id="earrings-benefits-heading"
              className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#4f413a] md:text-[44px]"
            >
              {earringsBenefitsSectionTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] font-serif text-[17px] leading-[1.85] text-[#78675f] md:text-[19px]">
              {earringsBenefitsLead}
            </p>
          </div>

          <ul className="mx-auto mt-10 max-w-[800px] space-y-4 border border-[#eee3de] bg-[#fefcfa] px-6 py-8 font-serif text-[16px] leading-[1.75] text-[#6e5f59] md:px-10 md:text-[17px] md:leading-[1.8]">
            {earringsBenefitsBullets.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d49a92]" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-10 max-w-[720px] text-center font-serif text-[17px] leading-[1.85] text-[#6e5c54] md:text-[19px]">
            {earringsBenefitsClosing}
          </p>
        </SectionShell>
      </section>

      <EarringsFaqAccordion />
    </div>
  );
}
