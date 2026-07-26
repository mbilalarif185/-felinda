"use client";

import { useCallback, useId, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeTestimonialSlider({ items }) {
  const id = useId();
  const [index, setIndex] = useState(0);
  const count = items.length;
  const safeIndex = count ? index % count : 0;
  const current = items[safeIndex] ?? null;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    },
    [goPrev, goNext]
  );

  if (!current || count === 0) return null;

  return (
    <div
      className="relative mt-12"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div
        id={`${id}-panel`}
        role="group"
        aria-live="polite"
        aria-atomic="true"
        className="relative rounded-[1.5rem] border border-atelierHair bg-atelierPorcelain px-8 py-12 shadow-[0_16px_45px_rgba(28,21,18,0.05)] lg:px-16"
      >
        <div
          key={safeIndex}
          className="animate-fade-in px-2 sm:px-10 md:px-14"
        >
          <div className="auréa-serif text-6xl leading-none text-atelierGold" aria-hidden="true">
            “
          </div>
          <p className="auréa-serif mt-2 text-3xl leading-relaxed text-atelierInk lg:text-4xl">
            {current.quote}
          </p>
          <div className="ledger-label mt-8 text-atelierMute">
            {current.attribution}
          </div>
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-controls={`${id}-panel`}
              aria-label="Previous testimonial"
              className="auréa-sans absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-atelierHair bg-white text-atelierInk shadow-sm transition hover:border-atelierGold hover:text-atelierGold md:left-5"
            >
              <ChevronLeft size={22} strokeWidth={1.6} aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-controls={`${id}-panel`}
              aria-label="Next testimonial"
              className="auréa-sans absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-atelierHair bg-white text-atelierInk shadow-sm transition hover:border-atelierGold hover:text-atelierGold md:right-5"
            >
              <ChevronRight size={22} strokeWidth={1.6} aria-hidden />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div
          className="mt-8 flex justify-center gap-2"
          role="tablist"
          aria-label="Choose testimonial"
        >
          {items.map((_, i) => {
            const selected = i === safeIndex;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`Testimonial ${i + 1} of ${count}`}
                onClick={() => setIndex(i)}
                className={
                  selected
                    ? "h-2.5 w-8 rounded-full bg-atelierGold transition"
                    : "h-2.5 w-2.5 rounded-full bg-atelierHair transition hover:bg-atelierGold/50"
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
