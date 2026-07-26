"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  pendantsNecklacesFaqItems,
  pendantsNecklacesFaqTitle,
} from "@/lib/content/pendants-necklaces-page";

export default function PendantsNecklacesFaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="mt-14 border-t border-[#26221e] pt-10"
      aria-labelledby="pendants-necklaces-faq-heading"
    >
      <h2
        id="pendants-necklaces-faq-heading"
        className="text-center font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#f3efe6] md:text-[44px]"
      >
        {pendantsNecklacesFaqTitle}
      </h2>
      <div className="mx-auto mt-8 max-w-[720px] divide-y divide-[#26221e] border-y border-[#26221e]">
        {pendantsNecklacesFaqItems.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.question} className="py-1">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-start justify-between gap-4 py-4 text-left transition hover:text-[#f3efe6]"
              >
                <span className="font-serif text-[18px] font-light leading-snug text-[#e7e1d6] md:text-[20px]">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`mt-0.5 shrink-0 text-[#d4af37] transition-transform ${open ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {open ? (
                <p className="pb-4 font-serif text-[16px] leading-[1.75] text-[#b8b2a6] md:text-[17px]">
                  {item.answer}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
