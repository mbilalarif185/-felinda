"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

import SectionHeading from "@/components/luxe/ui/SectionHeading";
import { testimonials } from "@/lib/luxe/content";

const INTERVAL = 6000;

export default function Testimonials() {
  const reduce = useReducedMotion() ?? false;
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const current = testimonials[index];

  const go = useCallback(
    (n: number) => setIndex((i) => (n + count) % count),
    [count]
  );

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => window.clearInterval(id);
  }, [count, reduce]);

  return (
    <section className="relative bg-luxeBlack px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="Testimonials" title="In their words" />

        <div className="relative mt-14 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <FaQuoteLeft className="mx-auto text-luxeGold/70" size={26} />
              <p className="mx-auto mt-7 max-w-2xl font-serif text-2xl font-light italic leading-relaxed text-white sm:text-3xl">
                {current.quote}
              </p>
              <div className="mt-9 flex items-center justify-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-luxeGold/40 bg-luxeGold/10 font-serif text-lg text-luxeGoldSoft">
                  {current.avatarInitial}
                </span>
                <div className="text-left">
                  <div className="font-sans text-sm text-white">{current.name}</div>
                  <div className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-luxeSmoke">
                    {current.location}
                  </div>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2.5" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => go(i)}
              className={
                i === index
                  ? "h-2 w-7 rounded-full bg-luxeGold transition-all"
                  : "h-2 w-2 rounded-full bg-luxeSmoke/30 transition-all hover:bg-luxeGold/50"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
