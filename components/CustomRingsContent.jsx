"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  CalendarDays,
  Truck,
  ShieldCheck,
  Gem,
  ArrowRight,
} from "lucide-react";

const filters = [
  "Daring Dazzlers",
  "Men's Rings",
  "Wedding Rings",
  "Engagement Rings",
];

const galleryItems = [
  {
    title: "Pink Brilliance Solitaire",
    category: "Daring Dazzlers",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Rose Halo Statement",
    category: "Daring Dazzlers",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Crystal Couture",
    category: "Daring Dazzlers",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Onyx Signet",
    category: "Men's Rings",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Brushed Titanium Band",
    category: "Men's Rings",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heritage Gold Ring",
    category: "Men's Rings",
    image:
      "https://images.unsplash.com/photo-1551446591-142875a901a1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Eternity Wedding Band",
    category: "Wedding Rings",
    image:
      "https://images.unsplash.com/photo-1606293459339-dc4f87c9c5d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Twin Promise Bands",
    category: "Wedding Rings",
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Vow Diamond Trio",
    category: "Wedding Rings",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Classic Brilliant Solitaire",
    category: "Engagement Rings",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Vintage Halo Promise",
    category: "Engagement Rings",
    image:
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pear-Cut Whisper",
    category: "Engagement Rings",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
  },
];

const sortOptions = ["Newest", "Featured", "Price: Low to High", "Price: High to Low"];

export default function CustomRingsContent() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [sortOpen, setSortOpen] = useState(false);
  const [sort, setSort] = useState(sortOptions[0]);

  const visibleItems = useMemo(
    () => galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <section className="relative z-10 px-6 pb-12">
      <div className="mx-auto max-w-[1320px] rounded-[30px] border border-[#e7dbd5] bg-[#fbf7f4] px-6 py-10 shadow-[0_10px_30px_rgba(110,90,80,0.04)] md:px-10 md:py-12">
        {/* ── Intro ── */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-serif text-[44px] font-light leading-[1.05] tracking-[-0.03em] text-[#4f413a] md:text-[64px]">
            Designed{" "}
            <span
              className="text-[#d59a92]"
              style={{
                fontFamily:
                  "var(--font-great-vibes), 'Great Vibes', 'Allura', cursive",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              for Felinda
            </span>
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#e4c9c0]" />
            <div className="text-[#d49a92]">✦</div>
            <div className="h-px w-14 bg-[#e4c9c0]" />
          </div>

          <p className="mx-auto mt-7 max-w-[760px] font-serif text-[18px] leading-[1.8] text-[#78675f] md:text-[20px]">
            Every ring is shaped around a moment, a person, a promise. From
            daring dazzlers to quiet vows, our custom ring atelier crafts each
            piece with intention, light, and craftsmanship that lasts a
            lifetime.
          </p>

          <button className="mt-9 inline-flex items-center gap-3 rounded-[8px] bg-[#d29189] px-8 py-4 text-[15px] font-medium tracking-[0.02em] text-white shadow-sm transition hover:bg-[#c5827a] md:text-[17px]">
            <CalendarDays size={18} />
            BOOK A CONSULTATION
          </button>
        </div>

        {/* ── Divider ── */}
        <div className="mt-12 border-t border-[#ece1dc]" />

        {/* ── Filters (functional) ── */}
        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="tablist"
            aria-label="Ring categories"
            className="flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            {filters.map((item) => {
              const isActive = item === activeFilter;
              return (
                <button
                  key={item}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(item)}
                  className={
                    isActive
                      ? "rounded-[8px] bg-[#d29189] px-7 py-3 text-[15px] text-white transition md:text-[16px]"
                      : "text-[15px] text-[#73645c] transition hover:text-[#c88f87] md:text-[17px]"
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Sort dropdown */}
          <div className="relative self-start">
            <button
              type="button"
              onClick={() => setSortOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
              className="inline-flex items-center gap-3 rounded-[8px] border border-[#e5d8d2] bg-white px-5 py-3 text-[15px] text-[#7d6e67] transition hover:border-[#d49a92] md:text-[16px]"
            >
              <span>Sort by: {sort}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}
              />
            </button>

            {sortOpen && (
              <ul
                role="listbox"
                className="absolute right-0 z-20 mt-2 w-[210px] overflow-hidden rounded-[10px] border border-[#e5d8d2] bg-white shadow-[0_10px_28px_rgba(110,90,80,0.12)]"
              >
                {sortOptions.map((option) => {
                  const isSelected = option === sort;
                  return (
                    <li key={option} role="option" aria-selected={isSelected}>
                      <button
                        type="button"
                        onClick={() => {
                          setSort(option);
                          setSortOpen(false);
                        }}
                        className={`block w-full px-5 py-2.5 text-left text-[14px] transition ${
                          isSelected
                            ? "bg-[#fbeeea] text-[#c88f87]"
                            : "text-[#5a4d46] hover:bg-[#f8f1ec] hover:text-[#c88f87]"
                        }`}
                      >
                        {option}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        {/* ── Gallery (filtered) ── */}
        {visibleItems.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleItems.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[18px] border border-[#eee3de] bg-[#fefcfa] shadow-[0_4px_15px_rgba(90,70,60,0.04)]"
              >
                <div className="aspect-[1.22/1] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-[18px] border border-dashed border-[#eee3de] bg-[#fefcfa] py-16 text-center text-[15px] text-[#8a7a71]">
            No pieces in this category yet — please check back soon.
          </div>
        )}

        {/* ── CTA strip ── */}
        <div className="mt-7 flex flex-col gap-5 rounded-[18px] border border-[#eaded8] bg-[#f8f3ef] px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#dfc5bc] text-[#cf938b]">
              <Gem size={22} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="font-serif text-[26px] font-light text-[#54463f] md:text-[38px]">
                Create something truly yours.
              </h3>
              <p className="mt-1 text-[16px] text-[#807069] md:text-[20px]">
                Our designers are here to bring your vision to life.
              </p>
            </div>
          </div>

          <button className="inline-flex shrink-0 items-center justify-center gap-3 rounded-[10px] border border-[#ddbdb3] bg-transparent px-8 py-4 text-[14px] tracking-[0.04em] text-[#c88f87] transition hover:bg-[#c88f87] hover:text-white md:px-10 md:text-[17px]">
            START YOUR BESPOKE JOURNEY
            <ArrowRight size={18} />
          </button>
        </div>

        {/* ── Benefits ── */}
        <div className="mt-7 border-t border-[#ece1dc] pt-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-start gap-4">
              <Truck className="mt-1 text-[#d0938a]" size={22} />
              <div>
                <div className="font-serif text-[20px] font-light text-[#564840] md:text-[24px]">
                  Complimentary Shipping
                </div>
                <div className="text-[14px] italic text-[#8e7b73] md:text-[16px]">
                  On all orders
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 text-[#d0938a]" size={22} />
              <div>
                <div className="font-serif text-[20px] font-light text-[#564840] md:text-[24px]">
                  Lifetime Craftsmanship
                </div>
                <div className="text-[14px] italic text-[#8e7b73] md:text-[16px]">
                  Guaranteed for life
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Gem className="mt-1 text-[#d0938a]" size={22} />
              <div>
                <div className="font-serif text-[20px] font-light text-[#564840] md:text-[24px]">
                  Finest Materials
                </div>
                <div className="text-[14px] italic text-[#8e7b73] md:text-[16px]">
                  Ethically sourced gemstones
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CalendarDays className="mt-1 text-[#d0938a]" size={22} />
              <div>
                <div className="font-serif text-[20px] font-light text-[#564840] md:text-[24px]">
                  Book a Consultation
                </div>
                <div className="text-[14px] italic text-[#8e7b73] md:text-[16px]">
                  Virtual or in-person
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
