"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ChevronDown,
  CalendarDays,
  ShieldCheck,
  Gem,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import {
  customRingsClosingBody,
  customRingsClosingLead,
  customRingsClosingTitle,
  customRingsConsultationHref,
  customRingsJourneyHref,
  customRingsFaqItems,
  customRingsFaqTitle,
  customRingsIntroCtaConsultation,
  customRingsIntroCtaJourney,
  customRingsIntroHeadline,
  customRingsIntroParagraphs,
  customRingsProcessSteps,
  customRingsProcessSubtitle,
  customRingsProcessTitle,
  customRingsStripBody,
  customRingsStripConsultation,
  customRingsStripJourney,
  customRingsStripTitle,
  customRingsWhyLead,
  customRingsWhyPillars,
  customRingsWhyTitle,
} from "@/lib/content/custom-rings-page";
import {
  CUSTOM_RINGS_TAB_PARAM,
  customRingsFilterToSlug,
  customRingsTabBySlug,
} from "@/lib/customRingsTabs";

const scriptAccent = {
  fontFamily: "var(--font-great-vibes), 'Great Vibes', 'Allura', cursive",
  fontWeight: 400,
  fontStyle: "italic",
};

const whyIcons = [Sparkles, Gem, ShieldCheck, CalendarDays];

const filters = [
  "Daring Dazzlers",
  "Men's Rings",
  "Wedding Rings",
  "Engagement Rings",
];

const categoryFolders = {
  "Daring Dazzlers": "daring-dazzlers",
  "Men's Rings": "Men's Rings",
  "Wedding Rings": "Wedding Brands",
  "Engagement Rings": "Engagement Rings",
};

const galleryFilesByCategory = {
  "Daring Dazzlers": [
    "Aquamarine Vintage Ring 2.webp",
    "FJ Insta- Bi colour sapphire Rng 3.webp",
    "FJ Insta- Bi colour sapphire Rng 5.webp",
    "FJ Insta- Bi colour sapphire Rng.webp",
    "FJ Insta- Friendship and Spinel Rings.webp",
    "FJ Insta- Friendship Rings.webp",
    "FJ Insta- Green Tourmaline Ring.webp",
    "FJ Insta- Ice Jade Ring.webp",
    "FJ Insta- Imperial Topaz Ring.webp",
    "FJ Insta- Lab Diamond Ring.webp",
    "FJ Insta- Mint Tourmaline Ring.webp",
    "FJ Insta- Opal Ring.webp",
    "FJ Insta- Peridot Diamond Ring.webp",
    "FJ Insta- Pink Garnet Rng.webp",
    "FJ Insta- Pink Heart Tourmaline Ring.webp",
    "FJ Insta- Rubellite Tourmaline Ring.webp",
    "FJ Insta- Star Ruby Ring.webp",
    "FJ Insta- Tanzanite Diamond Ring.webp",
    "FJ Insta- Tourmaline & Emerald Pendant.webp",
    "FJ Insta-ADELA Mabe.webp",
    "FJ Insta-ADELA Ring 1.webp",
    "FJ Insta-AMORA.webp",
    "FJ Insta-Blue Sapphire Rng.webp",
    "FJ Insta-Blue Topaz Ring.webp",
    "FJ Insta-Cat's Eye Ring 2.webp",
    "FJ Insta-Cat's Eye Ring 3.webp",
    "FJ Insta-Citrine Ring.webp",
    "FJ Insta-Cornflower Blue Sapphire Rng.webp",
    "FJ Insta-Dandelion Ring 2.webp",
    "FJ Insta-Dark Pink Sapphire-3.webp",
    "FJ Insta-Dark Pink Sapphire.webp",
    "FJ Insta-Emerald Ring 2.webp",
    "FJ Insta-Emerald Ring 3.webp",
    "FJ Insta-Green Garnet.webp",
    "FJ Insta-Jede ring 6.webp",
    "FJ Insta-Jede ring.webp",
    "FJ Insta-Jede ring4.webp",
    "FJ Insta-Kunzite Ring.webp",
    "FJ Insta-Leaf Ring.webp",
    "FJ Insta-London Blue Topaz Ring 2.webp",
    "FJ Insta-London Blue Topaz Ring.webp",
    "FJ Insta-Malachite Ring 2.webp",
    "FJ Insta-Mix Gemstones Ring.webp",
    "FJ Insta-Padparacha Sapphire Diamond Ring.webp",
    "FJ Insta-Pink Sapphire.webp",
    "FJ Insta-Red Garnet 6.webp",
    "FJ Insta-Red Ruby 4.webp",
    "FJ Insta-Red Ruby 5.webp",
    "FJ Insta-Red Ruby 6.webp",
    "FJ Insta-Rome Numbers Ring 2.webp",
    "FJ Insta-Salt and Pepper Ring 2.webp",
    "FJ Insta-Salt and Pepper Ring 3.webp",
    "FJ Insta-Spinel Ring.webp",
    "FJ Insta-Tanzanite Rng 2.webp",
    "FJ Insta-Tanzanite Rng 4.webp",
    "FJ Insta-Triple Ring 8.webp",
  ],
  "Men's Rings": [
    "FJ Insta- Horse Brooch.webp",
    "FJ Insta- Watermelon Tourmaline Pendant Necklace 1.webp",
    "FJ Insta-Citrine Mens Ring.webp",
    "FJ Insta-Emerald Men's Ring.webp",
    "FJ Insta-Emerald Ring 4.webp",
    "FJ Insta-Mens Agate Ring.webp",
    "FJ Insta-Mens Alexandrite Ring.webp",
    "FJ Insta-Mens Bi-colour Sapphire Ring.webp",
    "FJ Insta-Mens Black Diamond Ring 2.webp",
    "FJ Insta-Mens Black Spinel Pendant 2.webp",
    "FJ Insta-Mens Blue Grey Spinel Ring.webp",
    "FJ Insta-Mens Blue Sapphire Ring 2.webp",
    "FJ Insta-Mens Blue Sapphire Ring.webp",
    "FJ Insta-Mens Blue Topaz Ring-2.webp",
    "FJ Insta-Mens Diamond Ring 2.webp",
    "FJ Insta-Mens Garnet Ring 2.webp",
    "FJ Insta-Mens Garnet Ring 3A.webp",
    "FJ Insta-Name Bracelet.webp",
    "FJ Insta-Sapphire Mens Ring 2.webp",
    "FJ Insta-Teal Sapphire Diamond Ring.webp",
  ],
  "Wedding Rings": [
    
    "916-gold-jewellery-malaysia__felinda-19.webp",
    "925-sterling-silver-malaysia__felinda-18.webp",
    "999-gold-malaysia__felinda-20.webp",
    "affordable-gold-jewellery-malaysia__felinda-wedding-ring-43.webp",
    "birthstone-necklace-malaysia__felinda-wedding-ring-38.webp",
    "bracelet-malaysia__felinda-08.webp",
    "buy-gold-ring-subang-jaya__felinda-wedding-ring-54.webp",
    "buy-jewellery-online-malaysia__felinda-02.webp",
    "couple-ring-malaysia__felinda-14.webp",
    "custom-name-necklace-malaysia__felinda-wedding-ring-36b.webp",
    "custom-ring-malaysia__felinda-17.webp",
    "diamond-pendant-malaysia__felinda-21.webp",
    "diamond-ring-malaysia__felinda-04.webp",
    "earrings-malaysia__felinda-07.webp",
    "engagement-ring-malaysia__felinda-15.webp",
    "gold-bangle-malaysia__felinda-10.webp",
    "gold-ring-malaysia__felinda-05.webp",
    "gold-shop-petaling-jaya__felinda-wedding-ring-51.webp",
    "jade-jewellery-malaysia__felinda-12.webp",
    "jewellery-boutique-bangsar__felinda-wedding-ring-53.webp",
    "jewellery-gift-set-malaysia__felinda-wedding-ring-46.webp",
    "jewellery-shop-johor-bahru__felinda-wedding-ring-50.webp",
    "jewellery-shop-kuala-lumpur__felinda-wedding-ring-48.webp",
    "jewellery-shop-selangor__felinda-wedding-ring-45.webp",
    "jewellery-store-penang__felinda-wedding-ring-49.webp",
    "jewelry-online-malaysia__felinda-01.webp",
    "korean-style-jewellery-malaysia__felinda-24.webp",
    "men-gold-ring-malaysia__felinda-13.webp",
    "minimalist-jewellery-malaysia__felinda-23.webp",
    "necklace-malaysia__felinda-06.webp",
    "pearl-necklace-malaysia__felinda-11.webp",
    "pendant-malaysia__felinda-09.webp",
    "personalised-jewellery-malaysia__felinda-wedding-ring-39.webp",
    "silver-jewellery-malaysia__felinda-03.webp",
    "stackable-rings-malaysia__felinda-22.webp",
    "sustainable-jewellery-malaysia__felinda-wedding-ring-35c.webp",
    "wedding-ring-malaysia__felinda-16.webp",
    "zirconia-ring-malaysia__felinda-wedding-ring-44.webp",
  ],
  "Engagement Rings": [
    "FJ Insta- Bi colour sapphire Rng 4.webp",
    "FJ Insta-Engagemen ring 19.webp",
    "FJ Insta-Engagemen ring 22.webp",
    "FJ Insta-Engagemen ring 23.webp",
    "FJ Insta-Engagemen ring 29.webp",
    "FJ Insta-Engagemen ring 32.webp",
    "FJ Insta-Engagemen ring 33.webp",
    "FJ Insta-Engagemen ring 34.webp",
    "FJ Insta-Engagemen ring 36.webp",
    "FJ Insta-Engagemen ring 38.webp",
    "FJ Insta-Engagemen ring 40.webp",
    "FJ Insta-Engagemen ring 43.webp",
    "FJ Insta-Engagemen ring 47.webp",
    "FJ Insta-Engagemen ring 48.webp",
    "FJ Insta-Engagemen ring 49.webp",
    "FJ Insta-Engagement ring 53.webp",
    "FJ Insta-Engagement ring 54.webp",
    "FJ Insta-Engagement ring 57.webp",
    "FJ Insta-Engagement ring 61.webp",
    "FJ Insta-Engagement ring 63.webp",
    "FJ Insta-Engagement ring 64.webp",
    "FJ Insta-Engagement ring 66.webp",
    "FJ Insta-Engagement ring 68.webp",
    "FJ Insta-Engagement ring 69.webp",
    "FJ Insta-Engagement ring 71.webp",
    "FJ Insta-Engagement ring 74.webp",
    "FJ Insta-Engagement ring 77.webp",
    "FJ Insta-Engagement ring 79.webp",
    "FJ Insta-Engagement ring 80.webp",
    "FJ Insta-Engagement ring 83.webp",
    "FJ Insta-Engagement ring 84.webp",
    "FJ Insta-female wedding ring 58.webp",
    "FJ Insta-female wedding ring 59.webp",
    "FJ Insta-female&male wedding ring 35C.webp",
    "FJ Insta-female&male wedding ring 36B.webp",
    "FJ Insta-female&male wedding ring 38.webp",
    "FJ Insta-female&male wedding ring 43.webp",
    "FJ Insta-female&male wedding ring 44.webp",
    "FJ Insta-female&male wedding ring 46.webp",
    "FJ Insta-female&male wedding ring 51.webp",
    "FJ Insta-female&male wedding ring 54.webp",
    "FJ Insta-female&male wedding ring 55.webp",
    "FJ Insta-female&male wedding ring 56.webp",
    "FJ Insta-female&male wedding ring 57.webp",
    "FJ Insta-Rome Numbers Ring 3.webp",
    "FJ Insta-Rome Numbers Ring.webp",
    "FJ Insta-wedding ring 63.webp",
    "FJ Insta-wedding ring 64.webp",
    "FJ Insta-wedding ring 65.webp",
    "FJ Insta-Yellow Sapphire Ring 3.webp",
  ],
};

function titleFromFilename(filename) {
  const base = filename.replace(/\.(webp|jpg|jpeg|png)$/i, "");
  const productPart = base.includes("__") ? base.split("__").pop() : base;
  return productPart
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function imageSrc(category, filename) {
  const folder = categoryFolders[category];
  return (
    "/images/felinda-jewelry/Custom-Rings/" +
    encodeURIComponent(folder) +
    "/" +
    encodeURIComponent(filename)
  );
}

const galleryItems = Object.entries(galleryFilesByCategory).flatMap(
  ([category, files]) =>
    files.map((file) => ({
      title: titleFromFilename(file),
      category,
      image: imageSrc(category, file),
    }))
);

const sortOptions = ["Newest", "Featured", "Price: Low to High", "Price: High to Low"];

const INITIAL_VISIBLE = 15;
const PAGE_STEP = 15;

function activeFilterFromSearchParams(searchParams) {
  const tab = searchParams.get(CUSTOM_RINGS_TAB_PARAM);
  if (tab && customRingsTabBySlug[tab]) return customRingsTabBySlug[tab];
  return filters[0];
}

export default function CustomRingsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [activeFilter, setActiveFilter] = useState(() =>
    activeFilterFromSearchParams(searchParams)
  );
  const [sortOpen, setSortOpen] = useState(false);
  const [sort, setSort] = useState(sortOptions[0]);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setActiveFilter(activeFilterFromSearchParams(searchParams));
  }, [searchParams]);

  const visibleItems = useMemo(
    () => galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  const paginatedItems = useMemo(
    () => visibleItems.slice(0, visibleCount),
    [visibleItems, visibleCount]
  );

  const hasMore = visibleCount < visibleItems.length;

  // Reset pagination when the user switches categories
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeFilter]);

  const lightboxOpen = lightboxIndex !== null;
  const currentItem = lightboxOpen ? visibleItems[lightboxIndex] : null;

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + visibleItems.length) % visibleItems.length
    );
  const showNext = () =>
    setLightboxIndex((i) =>
      i === null ? i : (i + 1) % visibleItems.length
    );

  // Reset lightbox if the active filter changes while it's open
  useEffect(() => {
    setLightboxIndex(null);
  }, [activeFilter]);

  // Keyboard navigation + body scroll lock while lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;

    const len = visibleItems.length;
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i === null ? i : (i - 1 + len) % len
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i === null ? i : (i + 1) % len));
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen, visibleItems.length]);

  return (
    <section className="relative z-10 px-6 pb-12">
      <div className="mx-auto max-w-[1320px] rounded-[30px] border border-[#e7dbd5] bg-[#fbf7f4] px-6 py-10 shadow-[0_10px_30px_rgba(110,90,80,0.04)] md:px-10 md:py-12">
        {/* ── Intro (typography matches CreationsPage) ── */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-serif text-[44px] font-light leading-[1.05] tracking-[-0.03em] text-[#4f413a] md:text-[64px]">
            {customRingsIntroHeadline.beforeScript}{" "}
            <span className="text-[#d59a92]" style={scriptAccent}>
              {customRingsIntroHeadline.script}
            </span>
          </h2>

          <div className="mx-auto mt-7 max-w-[760px] space-y-6">
            {customRingsIntroParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-serif text-[18px] leading-[1.8] text-[#78675f] md:text-[20px] [&:last-of-type]:text-[#6e5c54]"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href={customRingsJourneyHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#ddbdb3] bg-transparent px-8 py-4 text-[14px] font-medium tracking-[0.04em] text-[#c88f87] transition hover:border-[#c88f87] hover:bg-[#fdf8f6] sm:w-auto md:text-[15px]"
            >
              {customRingsIntroCtaJourney}
              <ArrowRight size={17} aria-hidden />
            </Link>
            <Link
              href={customRingsConsultationHref}
              className="inline-flex w-full items-center justify-center gap-3 rounded-[8px] bg-[#d29189] px-8 py-4 text-[15px] font-medium tracking-[0.02em] text-white shadow-sm transition hover:bg-[#c5827a] sm:w-auto md:text-[17px]"
            >
              <CalendarDays size={18} aria-hidden />
              {customRingsIntroCtaConsultation}
            </Link>
          </div>
        </div>

        {/* ── Why Felinda (section type matches BespokeStorySections) ── */}
      

        {/* ── Divider ── */}
        <div className="mt-12 border-t border-[#ece1dc]" />

        {/* ── Filters (functional) ── */}
        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            id="custom-rings-tabs"
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
                  onClick={() => {
                    setActiveFilter(item);
                    const slug = customRingsFilterToSlug[item];
                    if (!slug) return;
                    const next = new URLSearchParams(searchParams.toString());
                    next.set(CUSTOM_RINGS_TAB_PARAM, slug);
                    router.replace(`${pathname}?${next.toString()}`, {
                      scroll: false,
                    });
                  }}
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

          {/* <div className="relative self-start">
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
          </div> */}
        </div>

        {/* ── Gallery (filtered + paginated) ── */}
        {visibleItems.length > 0 ? (
          <>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {paginatedItems.map((item, index) => (
                <button
                  type="button"
                  key={item.image}
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`View ${item.title}`}
                  className="group block overflow-hidden rounded-[18px] border border-[#eee3de] bg-[#fefcfa] text-left shadow-[0_4px_15px_rgba(90,70,60,0.04)] transition hover:shadow-[0_10px_28px_rgba(110,90,80,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d29189]"
                >
                  <div className="relative aspect-[1.22/1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      loading={index < 3 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                </button>
              ))}
            </div>

            {hasMore && (
              <div className="mt-8 flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((n) =>
                      Math.min(n + PAGE_STEP, visibleItems.length)
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-[10px] border border-[#ddbdb3] bg-transparent px-8 py-3 text-[14px] tracking-[0.04em] text-[#c88f87] transition hover:bg-[#c88f87] hover:text-white md:px-10 md:text-[15px]"
                >
                  VIEW MORE
                  <ChevronDown size={16} />
                </button>
                <span className="text-[13px] text-[#8a7a71]">
                  Showing {paginatedItems.length} of {visibleItems.length}
                </span>
              </div>
            )}
          </>
        ) : (
          <div className="mt-12 rounded-[18px] border border-dashed border-[#eee3de] bg-[#fefcfa] py-16 text-center text-[15px] text-[#8a7a71]">
            No pieces in this category yet — please check back soon.
          </div>
        )}

          <div className="mt-14 border-t border-[#ece1dc] pt-12">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#4f413a] md:text-[44px]">
              {customRingsWhyTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] font-serif text-[17px] leading-[1.85] text-[#78675f] md:text-[19px]">
              {customRingsWhyLead}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            {customRingsWhyPillars.map((pillar, i) => {
              const Icon = whyIcons[i] ?? Gem;
              return (
                <div
                  key={pillar.title}
                  className="group flex h-full min-h-[220px] flex-col rounded-[18px] border border-[#ebe0db] bg-[#fffdfb] p-6 shadow-[0_6px_22px_rgba(110,90,80,0.04)] transition duration-300 hover:border-[#dfc9c0] hover:shadow-[0_12px_32px_rgba(110,90,80,0.07)]"
                >
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
              );
            })}
          </div>
        </div>


        {/* ── Process (step typography matches BespokeStorySections) ── */}
        <div className="mt-14 border-t border-[#ece1dc] pt-12">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#4f413a] md:text-[44px]">
              {customRingsProcessTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] font-serif text-[17px] leading-[1.85] text-[#78675f] md:text-[18px]">
              {customRingsProcessSubtitle}
            </p>
          </div>

          <ol className="mx-auto mt-12 grid max-w-[1100px] list-none gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-6">
            {customRingsProcessSteps.map((step, index) => (
              <li key={step.title}>
                <div className="flex h-full flex-col rounded-[16px] border border-[#eaded8] bg-[#fffdfb] px-5 py-6 text-center shadow-[0_4px_18px_rgba(110,90,80,0.04)] md:px-4 md:py-7">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#dfc5bc] bg-[#fbf7f4] font-serif text-[15px] text-[#c88f87]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-serif text-[19px] font-light leading-snug text-[#54463f] md:text-[21px]">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-center font-serif text-[14px] leading-relaxed text-[#807069] md:text-[15px]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── CTA strip (matches CreationsPage) ── */}
        <div className="mt-7 rounded-[18px] border border-[#eaded8] bg-[#f8f3ef] px-6 py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-1 items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#dfc5bc] text-[#cf938b]">
                <Gem size={22} strokeWidth={1.8} aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-[26px] font-light text-[#54463f] md:text-[38px]">
                  {customRingsStripTitle}
                </h3>
                <p className="mt-1 text-[16px] text-[#807069] md:text-[20px]">
                  {customRingsStripBody}
                </p>
              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:justify-end lg:w-auto">
              <Link
                href={customRingsJourneyHref}
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#ddbdb3] bg-transparent px-8 py-4 text-[14px] font-medium tracking-[0.04em] text-[#c88f87] transition hover:bg-[#c88f87] hover:text-white md:px-10 md:text-[16px]"
              >
                {customRingsStripJourney}
                <ArrowRight size={18} aria-hidden />
              </Link>
              <Link
                href={customRingsConsultationHref}
                className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-[#d29189] px-8 py-4 text-[14px] font-medium tracking-[0.02em] text-white shadow-sm transition hover:bg-[#c5827a] md:px-10 md:text-[16px]"
              >
                <CalendarDays size={18} aria-hidden />
                {customRingsStripConsultation}
              </Link>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mt-12 border-t border-[#ece1dc] pt-10">
          <h2 className="text-center font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#4f413a] md:text-[44px]">
            {customRingsFaqTitle}
          </h2>
          <div className="mx-auto mt-8 max-w-[720px] divide-y divide-[#ece1dc] border-y border-[#ece1dc]">
            {customRingsFaqItems.map((item, i) => {
              const open = openFaqIndex === i;
              return (
                <div key={item.question} className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-4 py-4 text-left transition hover:text-[#4f413a]"
                  >
                    <span className="font-serif text-[18px] font-light leading-snug text-[#54463f] md:text-[20px]">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`mt-0.5 shrink-0 text-[#c88f87] transition-transform ${open ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  {open ? (
                    <p className="pb-4 font-serif text-[16px] leading-[1.75] text-[#78675f] md:text-[17px]">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Closing ── */}
        <div className="mt-12 rounded-[20px] border border-[#e8d9d3] bg-gradient-to-b from-[#fffdfb] to-[#fbf6f3] px-6 py-10 text-center md:px-12 md:py-12">
          <h2 className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#4f413a] md:text-[44px]">
            {customRingsClosingTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] font-serif text-[18px] leading-[1.85] text-[#78675f] md:text-[20px]">
            {customRingsClosingLead}
          </p>
          <p className="mx-auto mt-5 max-w-[640px] font-serif text-[16px] leading-[1.85] text-[#78675f] md:text-[17px]">
            {customRingsClosingBody}
          </p>
          <Link
            href={customRingsConsultationHref}
            className="mt-9 inline-flex items-center gap-3 rounded-[8px] bg-[#d29189] px-8 py-4 text-[15px] font-medium tracking-[0.02em] text-white shadow-sm transition hover:bg-[#c5827a] md:text-[17px]"
          >
            <CalendarDays size={18} aria-hidden />
            {customRingsIntroCtaConsultation}
          </Link>
        </div>
      </div>

      {/* ── Lightbox (portaled to body so it sits above the sticky header) ── */}
      {mounted && lightboxOpen && currentItem &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          onClick={closeLightbox}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white md:right-8 md:top-8"
          >
            <X size={26} strokeWidth={1.6} />
          </button>

          {visibleItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-white md:left-6"
              >
                <ChevronLeft size={32} strokeWidth={1.6} />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-white md:right-6"
              >
                <ChevronRight size={32} strokeWidth={1.6} />
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-[1100px] flex-col items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="h-auto max-h-[82vh] w-auto max-w-full rounded-[8px] object-contain shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            />
            <div className="mt-4 text-center text-[13px] tracking-[0.08em] text-white/70">
              {lightboxIndex + 1} / {visibleItems.length}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
