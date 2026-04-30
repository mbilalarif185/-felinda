import {
  CalendarDays,
  Gem,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import {
  bespokeDocContentStructureLines,
  bespokeDocSeoStrategyParagraphs,
  bespokeGalleryHighlights,
  bespokeProcess,
  bespokeWhyChoose,
} from "@/lib/content/bespoke-page";

const WHY_ICONS = [Sparkles, Gem, ShieldCheck, Truck, CalendarDays];

function SectionShell({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-[1040px] ${className}`}>{children}</div>
  );
}

export default function BespokeStorySections() {
  return (
    <div className="mt-14 space-y-16 md:space-y-20">
    

      {/* Why Felinda */}
      <section aria-labelledby="bespoke-why-heading">
        <SectionShell>
          <div className="text-center">
            <h2
              id="bespoke-why-heading"
              className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#4f413a] md:text-[44px]"
            >
              {bespokeWhyChoose.title}
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] font-serif text-[17px] leading-[1.85] text-[#78675f] md:text-[19px]">
              {bespokeWhyChoose.lead}
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {(() => {
              const [featured, ...rest] = bespokeWhyChoose.items;
              const FeaturedIcon = WHY_ICONS[0];
              return (
                <>
                  <li className="md:col-span-2">
                    <div className="h-full overflow-hidden rounded-[22px] border border-[#e5d5ce] bg-gradient-to-br from-[#fffdfb] via-[#faf5f2] to-[#f3e8e2] shadow-[0_16px_40px_rgba(110,90,80,0.06)]">
                      <div className="flex flex-col gap-6 p-7 md:flex-row md:items-start md:gap-10 md:p-10">
                        <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl border border-[#e8cfc7] bg-white/90 text-[#c88f87] shadow-sm">
                          <FeaturedIcon className="h-9 w-9" strokeWidth={1.35} aria-hidden />
                        </div>
                        <div className="min-w-0 flex-1 text-left">
                          <h3 className="font-serif text-[26px] font-light leading-snug tracking-[-0.02em] text-[#3d3532] md:text-[32px]">
                            {featured.title}
                          </h3>
                          <p className="mt-4 max-w-[720px] font-serif text-[16px] leading-[1.75] text-[#6e5f59] md:text-[17px]">
                            {featured.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  {rest.map((item, i) => {
                    const Icon = WHY_ICONS[i + 1];
                    return (
                      <li key={item.title}>
                        <div className="group flex h-full min-h-[220px] flex-col rounded-[18px] border border-[#ebe0db] bg-[#fffdfb] p-6 shadow-[0_6px_22px_rgba(110,90,80,0.04)] transition duration-300 hover:border-[#dfc9c0] hover:shadow-[0_12px_32px_rgba(110,90,80,0.07)]">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ead6d0] bg-[#fdf9f7] text-[#c88f87] transition group-hover:border-[#e0c4bc] group-hover:bg-white">
                              <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                            </div>
                            <span
                              className="font-serif text-[11px] tabular-nums text-[#d4b5ad] opacity-80"
                              aria-hidden
                            >
                              {String(i + 2).padStart(2, "0")}
                            </span>
                          </div>
                          <h3 className="mt-5 font-serif text-[19px] font-light leading-snug text-[#4f413a] md:text-[21px]">
                            {item.title}
                          </h3>
                          <p className="mt-3 flex-1 font-serif text-[14px] leading-relaxed text-[#756860] md:text-[15px]">
                            {item.text}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </>
              );
            })()}
          </ul>

          <p className="mx-auto mt-12 max-w-[800px] border-t border-[#ece1dc] pt-10 text-center font-serif text-[17px] leading-[1.85] text-[#6e5c54] md:text-[19px]">
            {bespokeWhyChoose.closing}
          </p>
        </SectionShell>
      </section>

      <div className="border-t border-[#ece1dc]" />

      {/* Process */}
      <section aria-labelledby="bespoke-process-heading">
        <SectionShell>
          <div className="text-center">
            <h2
              id="bespoke-process-heading"
              className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#4f413a] md:text-[44px]"
            >
              {bespokeProcess.title}
            </h2>
          </div>

          <ol className="mx-auto mt-12 grid max-w-[1000px] gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {bespokeProcess.steps.map((step, index) => (
              <li key={step.title}>
                <div className="flex h-full flex-col rounded-[16px] border border-[#eaded8] bg-[#fffdfb] px-5 py-6 text-center shadow-[0_4px_18px_rgba(110,90,80,0.04)] md:px-4 md:py-7">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#dfc5bc] bg-[#fbf7f4] font-serif text-[15px] text-[#c88f87]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-serif text-[19px] font-light leading-snug text-[#54463f] md:text-[21px]">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-center text-[14px] leading-relaxed text-[#807069] md:text-[15px]">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-12 max-w-[760px] text-center font-serif text-[17px] leading-[1.85] text-[#78675f] md:text-[18px]">
            {bespokeProcess.footer}
          </p>
        </SectionShell>
      </section>

     

   

     
    </div>
  );
}
