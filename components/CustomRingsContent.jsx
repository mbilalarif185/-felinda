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

const whyIcons = [Sparkles, Gem, ShieldCheck, CalendarDays];

const filters = [
  "The Auréa Signature",
  "Daring Dazzlers",
  "Men's Collection",
  "Wedding Rings",
  "Engagement Rings",
];

const categoryFolders = {
  "The Auréa Signature": "Auréa's Signature",
  "Daring Dazzlers": "daring-dazzlers",
  "Men's Collection": "Men's Rings",
  "Wedding Rings": "Wedding Brands",
  "Engagement Rings": "Engagement Rings",
};

const galleryFilesByCategory = {
  "The Auréa Signature": [
    "aurea-piece-105.webp",
    "aurea-piece-99.webp",
    "aurea-piece-100.webp",
    "aurea-piece-101.webp",
    "aurea-piece-102.webp",
    "aurea-piece-103.webp",
    "aurea-piece-104.webp",
    "aurea-piece-106.webp",
    "aurea-piece-107.webp",
  ],
  "Daring Dazzlers": [
    "Aquamarine Vintage Ring 2.webp",
    "aurea-piece-12.webp",
    "aurea-piece-13.webp",
    "aurea-piece-14.webp",
    "aurea-piece-15.webp",
    "aurea-piece-16.webp",
    "aurea-piece-17.webp",
    "aurea-piece-18.webp",
    "aurea-piece-19.webp",
    "aurea-piece-20.webp",
    "aurea-piece-21.webp",
    "aurea-piece-22.webp",
    "aurea-piece-23.webp",
    "aurea-piece-24.webp",
    "aurea-piece-25.webp",
    "aurea-piece-26.webp",
    "aurea-piece-27.webp",
    "aurea-piece-28.webp",
    "aurea-piece-29.webp",
    "aurea-piece-30.webp",
    "aurea-piece-31.webp",
    "aurea-piece-32.webp",
    "aurea-piece-33.webp",
    "aurea-piece-34.webp",
    "aurea-piece-35.webp",
    "aurea-piece-36.webp",
    "aurea-piece-37.webp",
    "aurea-piece-38.webp",
    "aurea-piece-39.webp",
    "aurea-piece-40.webp",
    "aurea-piece-41.webp",
    "emerald-ring.webp",
    "aurea-piece-42.webp",
    "aurea-piece-43.webp",
    "aurea-piece-44.webp",
    "aurea-piece-45.webp",
    "aurea-piece-46.webp",
    "aurea-piece-47.webp",
    "aurea-piece-48.webp",
    "aurea-piece-49.webp",
    "aurea-piece-50.webp",
    "aurea-piece-51.webp",
    "aurea-piece-52.webp",
    "aurea-piece-53.webp",
    "aurea-piece-54.webp",
    "aurea-piece-55.webp",
    "aurea-piece-56.webp",
    "aurea-piece-57.webp",
    "aurea-piece-58.webp",
    "aurea-piece-59.webp",
    "aurea-piece-60.webp",
    "aurea-piece-61.webp",
    "aurea-piece-62.webp",
    "aurea-piece-63.webp",
    "aurea-piece-64.webp",
    "aurea-piece-65.webp",
  ],
  "Men's Collection": [
    "aurea-piece-108.webp",
    "aurea-piece-109.webp",
    "aurea-piece-110.webp",
    "aurea-piece-111.webp",
    "aurea-piece-112.webp",
    "aurea-piece-113.webp",
    "aurea-piece-114.webp",
    "aurea-piece-115.webp",
    "aurea-piece-116.webp",
    "aurea-piece-117.webp",
    "aurea-piece-118.webp",
    "hoop-classics.webp",
    "aurea-piece-119.webp",
    "aurea-piece-120.webp",
    "aurea-piece-121.webp",
    "aurea-piece-122.webp",
    "aurea-piece-123.webp",
    "aurea-piece-8.webp",
    "aurea-piece-125.webp",
    "aurea-piece-126.webp",
  ],
  "Wedding Rings": [
    "aurea-piece-127.webp",
    "aurea-piece-128.webp",
    "aurea-piece-129.webp",
    "aurea-piece-130.webp",
    "aurea-piece-131.webp",
    "aurea-piece-132.webp",
    "aurea-piece-133.webp",
    "aurea-piece-134.webp",
    "aurea-piece-135.webp",
    "aurea-piece-136.webp",
    "aurea-piece-137.webp",
    "aurea-piece-138.webp",
    "aurea-piece-139.webp",
    "aurea-piece-140.webp",
    "aurea-piece-141.webp",
    "aurea-piece-142.webp",
    "aurea-piece-143.webp",
    "aurea-piece-144.webp",
    "aurea-piece-145.webp",
    "aurea-piece-146.webp",
    "aurea-piece-147.webp",
    "aurea-piece-148.webp",
    "aurea-piece-149.webp",
  ],
  "Engagement Rings": [
    "diamond-solitaire.webp",
    "aurea-piece-81.webp",
    "aurea-piece-66.webp",
    "aurea-piece-67.webp",
    "aurea-piece-68.webp",
    "aurea-piece-69.webp",
    "aurea-piece-70.webp",
    "aurea-piece-71.webp",
    "aurea-piece-72.webp",
    "aurea-piece-73.webp",
    "aurea-piece-74.webp",
    "aurea-piece-75.webp",
    "aurea-piece-76.webp",
    "aurea-piece-77.webp",
    "aurea-piece-78.webp",
    "aurea-piece-79.webp",
    "aurea-piece-80.webp",
    "aurea-piece-82.webp",
    "aurea-piece-83.webp",
    "aurea-piece-84.webp",
    "aurea-piece-85.webp",
    "aurea-piece-86.webp",
    "aurea-piece-87.webp",
    "aurea-piece-88.webp",
    "aurea-piece-89.webp",
    "aurea-piece-90.webp",
    "aurea-piece-91.webp",
    "aurea-piece-92.webp",
    "aurea-piece-93.webp",
    "aurea-piece-94.webp",
    "aurea-piece-95.webp",
    "aurea-piece-96.webp",
    "aurea-piece-97.webp",
    "aurea-piece-98.webp",
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
    "/images/aurea-jewellery/Custom-Rings/" +
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
      <div className="mx-auto max-w-[1320px] rounded-[30px] border border-[#26221e] bg-[#121212] px-6 py-10 shadow-[0_10px_30px_rgba(110,90,80,0.04)] md:px-10 md:py-12">
        {/* ── Intro (typography matches CreationsPage) ── */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-serif text-[44px] font-light leading-[1.05] tracking-[-0.03em] text-[#f3efe6] md:text-[64px]">
            {customRingsIntroHeadline.beforeScript}{" "}
            <span className="font-normal italic text-[#d4af37]">
              {customRingsIntroHeadline.script}
            </span>
          </h2>

          <div className="mx-auto mt-7 max-w-[760px] space-y-6">
            {customRingsIntroParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-serif text-[18px] leading-[1.8] text-[#b8b2a6] md:text-[20px] [&:last-of-type]:text-[#b8b2a6]"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href={customRingsJourneyHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#6b5a2e] bg-transparent px-8 py-4 text-[14px] font-medium tracking-[0.04em] text-[#d4af37] transition hover:border-[#d4af37] hover:bg-[#141414] sm:w-auto md:text-[15px]"
            >
              {customRingsIntroCtaJourney}
              <ArrowRight size={17} aria-hidden />
            </Link>
            <Link
              href={customRingsConsultationHref}
              className="inline-flex w-full items-center justify-center gap-3 rounded-[8px] bg-[#d4af37] px-8 py-4 text-[15px] font-medium tracking-[0.02em] text-luxeBlack shadow-sm transition hover:bg-[#e8ce8b] sm:w-auto md:text-[17px]"
            >
              <CalendarDays size={18} aria-hidden />
              {customRingsIntroCtaConsultation}
            </Link>
          </div>
        </div>

        {/* ── Why Auréa (section type matches BespokeStorySections) ── */}
      

        {/* ── Divider ── */}
        <div className="mt-12 border-t border-[#26221e]" />

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
                      ? "rounded-[8px] bg-[#d4af37] px-7 py-3 text-[15px] text-luxeBlack transition md:text-[16px]"
                      : "text-[15px] text-[#b8b2a6] transition hover:text-[#d4af37] md:text-[17px]"
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
              className="inline-flex items-center gap-3 rounded-[8px] border border-[#26221e] bg-white/[0.05] px-5 py-3 text-[15px] text-[#7d6e67] transition hover:border-[#d4af37] md:text-[16px]"
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
                className="absolute right-0 z-20 mt-2 w-[210px] overflow-hidden rounded-[10px] border border-[#26221e] bg-white/[0.05] shadow-[0_10px_28px_rgba(110,90,80,0.12)]"
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
                            ? "bg-[#161310] text-[#d4af37]"
                            : "text-[#cfc9be] hover:bg-[#121212] hover:text-[#d4af37]"
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
                  className="group block overflow-hidden rounded-[18px] border border-[#211c17] bg-[#141414] text-left shadow-[0_4px_15px_rgba(90,70,60,0.04)] transition hover:shadow-[0_10px_28px_rgba(110,90,80,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
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
                  className="inline-flex items-center gap-2 rounded-[10px] border border-[#6b5a2e] bg-transparent px-8 py-3 text-[14px] tracking-[0.04em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-luxeBlack md:px-10 md:text-[15px]"
                >
                  VIEW MORE
                  <ChevronDown size={16} />
                </button>
                <span className="text-[13px] text-[#a89f95]">
                  Showing {paginatedItems.length} of {visibleItems.length}
                </span>
              </div>
            )}
          </>
        ) : (
          <div className="mt-12 rounded-[18px] border border-dashed border-[#211c17] bg-[#141414] py-16 text-center text-[15px] text-[#a89f95]">
            No pieces in this category yet. Please check back soon.
          </div>
        )}

          <div className="mt-14 border-t border-[#26221e] pt-12">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#f3efe6] md:text-[44px]">
              {customRingsWhyTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] font-serif text-[17px] leading-[1.85] text-[#b8b2a6] md:text-[19px]">
              {customRingsWhyLead}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            {customRingsWhyPillars.map((pillar, i) => {
              const Icon = whyIcons[i] ?? Gem;
              return (
                <div
                  key={pillar.title}
                  className="group flex h-full min-h-[220px] flex-col rounded-[18px] border border-[#26221e] bg-[#141414] p-6 shadow-[0_6px_22px_rgba(110,90,80,0.04)] transition duration-300 hover:border-[#dfc9c0] hover:shadow-[0_12px_32px_rgba(110,90,80,0.07)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3a301c] bg-[#161310] text-[#d4af37] transition group-hover:border-[#3a301c] group-hover:bg-white/[0.05]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="mt-5 font-serif text-[19px] font-light leading-snug text-[#f3efe6] md:text-[21px]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 flex-1 font-serif text-[14px] leading-relaxed text-[#b8b2a6] md:text-[15px]">
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>


        {/* ── Process (step typography matches BespokeStorySections) ── */}
        <div className="mt-14 border-t border-[#26221e] pt-12">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#f3efe6] md:text-[44px]">
              {customRingsProcessTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] font-serif text-[17px] leading-[1.85] text-[#b8b2a6] md:text-[18px]">
              {customRingsProcessSubtitle}
            </p>
          </div>

          <ol className="mx-auto mt-12 grid max-w-[1100px] list-none gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-6">
            {customRingsProcessSteps.map((step, index) => (
              <li key={step.title}>
                <div className="flex h-full flex-col rounded-[16px] border border-[#26221e] bg-[#141414] px-5 py-6 text-center shadow-[0_4px_18px_rgba(110,90,80,0.04)] md:px-4 md:py-7">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#3a301c] bg-[#121212] font-serif text-[15px] text-[#d4af37]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-serif text-[19px] font-light leading-snug text-[#e7e1d6] md:text-[21px]">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-center font-serif text-[14px] leading-relaxed text-[#b8b2a6] md:text-[15px]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── CTA strip (matches CreationsPage) ── */}
        <div className="mt-7 rounded-[18px] border border-[#26221e] bg-[#121212] px-6 py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-1 items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#3a301c] text-[#d4af37]">
                <Gem size={22} strokeWidth={1.8} aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-[26px] font-light text-[#e7e1d6] md:text-[38px]">
                  {customRingsStripTitle}
                </h3>
                <p className="mt-1 text-[16px] text-[#b8b2a6] md:text-[20px]">
                  {customRingsStripBody}
                </p>
              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:justify-end lg:w-auto">
              <Link
                href={customRingsJourneyHref}
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#6b5a2e] bg-transparent px-8 py-4 text-[14px] font-medium tracking-[0.04em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-luxeBlack md:px-10 md:text-[16px]"
              >
                {customRingsStripJourney}
                <ArrowRight size={18} aria-hidden />
              </Link>
              <Link
                href={customRingsConsultationHref}
                className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-[#d4af37] px-8 py-4 text-[14px] font-medium tracking-[0.02em] text-luxeBlack shadow-sm transition hover:bg-[#e8ce8b] md:px-10 md:text-[16px]"
              >
                <CalendarDays size={18} aria-hidden />
                {customRingsStripConsultation}
              </Link>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mt-12 border-t border-[#26221e] pt-10">
          <h2 className="text-center font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#f3efe6] md:text-[44px]">
            {customRingsFaqTitle}
          </h2>
          <div className="mx-auto mt-8 max-w-[720px] divide-y divide-[#26221e] border-y border-[#26221e]">
            {customRingsFaqItems.map((item, i) => {
              const open = openFaqIndex === i;
              return (
                <div key={item.question} className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(open ? null : i)}
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
        </div>

        {/* ── Closing ── */}
        <div className="mt-12 rounded-[20px] border border-[#26221e] bg-gradient-to-b from-[#141414] to-[#141414] px-6 py-10 text-center md:px-12 md:py-12">
          <h2 className="font-serif text-[32px] font-light leading-tight tracking-[-0.02em] text-[#f3efe6] md:text-[44px]">
            {customRingsClosingTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] font-serif text-[18px] leading-[1.85] text-[#b8b2a6] md:text-[20px]">
            {customRingsClosingLead}
          </p>
          <p className="mx-auto mt-5 max-w-[640px] font-serif text-[16px] leading-[1.85] text-[#b8b2a6] md:text-[17px]">
            {customRingsClosingBody}
          </p>
          <Link
            href={customRingsConsultationHref}
            className="mt-9 inline-flex items-center gap-3 rounded-[8px] bg-[#d4af37] px-8 py-4 text-[15px] font-medium tracking-[0.02em] text-luxeBlack shadow-sm transition hover:bg-[#e8ce8b] md:text-[17px]"
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
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-white/90 transition hover:bg-white/[0.05] hover:text-white md:right-8 md:top-8"
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
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/85 transition hover:bg-white/[0.05] hover:text-white md:left-6"
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
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/85 transition hover:bg-white/[0.05] hover:text-white md:right-6"
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
