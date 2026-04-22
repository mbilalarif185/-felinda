"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  ChevronDown,
  CalendarDays,
  Truck,
  ShieldCheck,
  Gem,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

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
    "18K-AIYANA-Felindas-Signature-Ring-Kunzite-malaysia.webp",
    "18K-Amethyst-Lavender-and-Spinel-Ring-malaysia.webp",
    "18K-Amethyst-Ring-malaysia.webp",
    "18K-Amethyst-with-Diamond-Ring-BUY.webp",
    "18K-Bi-Colour-Sapphire-Ring-kl.webp",
    "18K-Blue-Topaz-Ring-scaled.webp",
    "18K-Cabochon-Emerald-Ring-kl.webp",
    "18K-Citrine-and-Spinel-Stack-Rings-KL.webp",
    "18K-Cornflower-Blue-Sapphire-Rings-kl.webp",
    "18K-Dark-Pink-Sapphire-Ring-malaysia.webp",
    "18K-Garnet-and-Citrine-Rings-malaysia.webp",
    "18k-Gold-Ruby-with-Pave-Diamond-Ring-pave.webp",
    "18k-Gold-Ruby-with-Pave-Diamond-Ring.webp",
    "18K-Gred-Garnet-with-Spinel-and-Diamond-Ring-Malaysia.webp",
    "18K-Green-Tourmaline-Ring-malaysia.webp",
    "18K-Jede-ring-malaysia.webp",
    "18K-London-Blue-Topaz-Ring-malaysia.webp",
    "18K-Opal-Ring-1-malaysia.webp",
    "18K-Pink-Garnet-Ring-1-kl.webp",
    "18K-Pink-Tourmaline-Ring-kl.webp",
    "18K-Pink-Tourmaline-with-Ruby-Ring-malaysia.webp",
    "18K-Red-Garnet-and-Diamond-Ring-kl.webp",
    "18K-Salt-and-Pepper-Rings-kl.webp",
    "18K-Special-Cut-Garnet-Ring-malaysia.webp",
    "18K-Tanzanite-and-Pink-Sapphire-Ring-kl.webp",
    "18K-Tanzanite-Ring-in-kl.webp",
    "18K-Tanzanite-Vintage-Ring-kl.webp",
    "18K-Triple-Ring-Black-Diamond-Emerald-and-Mabe-Pearl-kl.webp",
    "18K-Watermelon-Tourmaline-Ring-in-malaysia.webp",
    "916 gold ring Malaysia.webp",
    "916-gold jewellery Malaysia.webp",
    "999 gold Malaysia.webp",
    "999-gold-Malaysia.webp",
    "ADA-18k-Gold-with-Imperial-Topaz-Diamond-Ring-kl.webp",
    "buy -gold- ring -Subang- Jaya.webp",
    "buy gold ring KL.webp",
    "buy gold ring Subang Jaya.webp",
    "buy gold ring Subang-jaya.webp",
    "buy jewellery online Malaysia.webp",
    "buy ring in k.webp",
    "buy ring in malayisa.webp",
    "buy Subang Jaya gold ring.webp",
    "buy-gold-ring-Subang-Jaya.webp",
    "engagement ring Malaysia.webp",
    "engagement ring-Malaysia.webp",
    "engagement-ring Malaysia.webp",
    "gold  jewellery Malaysia.webp",
    "gold jewellery Malaysia.webp",
    "gold Malaysia 999.webp",
    "gold ring KL.webp",
    "gold ring Subang Jaya.webp",
    "gold shop kl.webp",
    "gold shop Petaling Jaya.webp",
    "gold shop Petaling-Jaya.webp",
    "gold shop-Petaling Jaya.webp",
    "gold shop.webp",
    "gold- jewellery Malaysia.webp",
    "gold-Malaysia.webp",
    "jewellery gift set Malaysia.webp",
    "jewellery gift-set Malaysia.webp",
    "jewellery gold Malaysia.webp",
    "jewellery Malaysia gold.webp",
    "jewellery Malaysia silver.webp",
    "jewellery Malaysia.webp",
    "jewellery shop Kl.webp",
    "jewellery shop Kuala Lumpur.webp",
    "jewellery store Penang.webp",
    "jewellery-gift set Malaysia.webp",
    "jewelry online Malaysia.webp",
    "personalised jewellery in Malaysia.webp",
    "personalised jewellery Malaysia.webp",
    "personalised-jewellery Malaysia.webp",
    "Petaling Jaya gold shop.webp",
    "ring Malaysia.webp",
    "RIngs-malaysia.webp",
    "silver jewellery Malaysia.webp",
    "silver-jewellery-malaysia.webp",
    "stackable rings Malaysia.webp",
    "stackable-rings Malaysia.webp",
  ],
  "Men's Rings": [
    "18K-Agate-with-Diamond-Ring-KL.webp",
    "18K-Bi-colour-Sapphire-Ring-KL.webp",
    "18K-Black-Diamond-Ring-Malaysia.webp",
    "18K-Blue-Sapphire-Ring-KL.webp",
    "18K-Citrine-and-Diamond-Ring-KL.webp",
    "18K-Citrine-with-Diamond-Ring-KL.webp",
    "18k-Gold-Emerald-with-Diamond-Ring-2-malaysia.webp",
    "18k-Gold-Jade-Ring-in kl.webp",
    "18k-Gold-Mens-Diamond-Rings-in malaysia.webp",
    "18k-Gold-Mens-Rings-malaysia.webp",
    "18k-Gold-with-Topaz-Diamond-Ring-malaysia.webp",
    "18K-Grey-Spinel-with-Diamond-Ring-KL.webp",
    "Buy mens rings in kl.webp",
    "Gold-with-Pave-Diamond-Ring-KL.webp",
    "jewellery store Penang-.webp",
    "jewellery store Penang.webp",
  ],
  "Wedding Rings": [
    "Wedding-Bands.webp",
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
    "Engagement-ring.webp",
    "916-gold-jewellery-malaysia__18k-dual-colour-halo-diamond-ring.webp",
    "925-sterling-silver-malaysia__18k-dual-colour-halo-diamond-ring.webp",
    "999-gold-malaysia__18k-dual-colour-leaf-diamond-ring.webp",
    "affordable-gold-jewellery-malaysia__18k-heart-shape-halo-engagement-ring.webp",
    "birthstone-necklace-malaysia__18k-halo-diamond-ring.webp",
    "bracelet-malaysia__18k-6-prongs-engagement-and-twist-wedding-rings.webp",
    "bracelet-malaysia__18k-heart-engagement-ring.webp",
    "buy-gold-ring-subang-jaya__18k-vintage-engagement-and-wedding-rings.webp",
    "buy-jewellery-online-malaysia__18k-3-stones-diamond-ring.webp",
    "buy-jewellery-online-malaysia__18k-crown-engagement-ring.webp",
    "couple-ring-malaysia__18k-dual-colour-diamond-ring.webp",
    "custom-name-necklace-malaysia__18k-halo-diamond-ring.webp",
    "custom-ring-malaysia__18k-dual-colour-engagement-ring.webp",
    "diamond-pendant-malaysia__18k-dual-colour-marquise-diamond-ring.webp",
    "diamond-ring-malaysia__18k-5-stones-diamond-ring.webp",
    "diamond-ring-malaysia__18k-diamond-and-pink-sapphire-engagement-ring.webp",
    "earrings-malaysia__18k-6-prongs-engagement-and-twist-wedding-rings.webp",
    "earrings-malaysia__18k-dual-colour-pink-zircon-engagement-ring.webp",
    "engagement-ring-malaysia__18k-dual-colour-engagement-ring.webp",
    "gold-bangle-malaysia__18k-6-prongs-pave-engagement-and-wedding-ring.webp",
    "gold-ring-malaysia__18k-6-prongs-diamond-and-fancy-wedding-ring.webp",
    "gold-ring-malaysia__18k-engagement-ring.webp",
    "gold-shop-petaling-jaya__18k-twist-diamond-ring.webp",
    "jade-jewellery-malaysia__18k-diamond-and-ruby-ring.webp",
    "jewellery-boutique-bangsar__18k-vintage-diamond-engagement-ring.webp",
    "jewellery-gift-set-malaysia__18k-pave-diamond-ring.webp",
    "jewellery-shop-johor-bahru__18k-gold-oval-tulip-prongs-ring.webp",
    "jewellery-shop-kuala-lumpur__18k-pave-diamond-ring.webp",
    "jewellery-shop-selangor__18k-gold-dual-colour-hello-kitty-ring.webp",
    "jewellery-store-penang__18k-roman-numeral-diamond-ring.webp",
    "jewelry-online-malaysia__18k-2-stones-diamond-ring.webp",
    "jewelry-online-malaysia__18k-oval-engagement-ring.webp",
    "korean-style-jewellery-malaysia__18k-engagement-and-wedding-rings.webp",
    "men-gold-ring-malaysia__18k-dual-colour-crown-diamond-ring.webp",
    "minimalist-jewellery-malaysia__18k-emerald-and-tapered-baguette-cut-diamond-ring.webp",
    "necklace-malaysia__18k-6-prongs-diamond-ring.webp",
    "necklace-malaysia__18k-twist-engagement-ring.webp",
    "pearl-necklace-malaysia__18k-6-prongs-pave-engagement-ring.webp",
    "pendant-malaysia__18k-6-prongs-engagement-and-stacking-wedding-rings.webp",
    "pendant-malaysia__18k-diamond-with-sapphire-engagement-ring.webp",
    "personalised-jewellery-malaysia__18k-halo-diamond-ring.webp",
    "silver-jewellery-malaysia__18k-3-stones-diamond-ring.webp",
    "silver-jewellery-malaysia__18k-diamond-with-ruby-engagement-ring.webp",
    "stackable-rings-malaysia__18k-dual-colour-pave-diamond-ring.webp",
    "sustainable-jewellery-malaysia__18k-gold-oval-pave-diamond-ring.webp",
    "wedding-ring-malaysia__18k-dual-colour-engagement-ring.webp",
    "zirconia-ring-malaysia__18k-gold-twist-diamond-ring.webp",
  ],
};

function titleFromFilename(filename) {
  const base = filename.replace(/\.webp$/i, "");
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

export default function CustomRingsContent() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [sortOpen, setSortOpen] = useState(false);
  const [sort, setSort] = useState(sortOptions[0]);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
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
