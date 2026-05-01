"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

const INITIAL_VISIBLE = 15;
const PAGE_STEP = 15;

/**
 * Reusable gallery used by every Creations page.
 *
 * Props:
 *   items — array of { title, image } objects
 */
export default function CreationsGallery({ items = [] }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    setMounted(true);
  }, []);

  const paginatedItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );
  const hasMore = visibleCount < items.length;
  const lightboxOpen = lightboxIndex !== null;
  const currentItem = lightboxOpen ? items[lightboxIndex] : null;

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + items.length) % items.length
    );
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? i : (i + 1) % items.length));

  // Keyboard navigation + scroll lock while lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;

    const len = items.length;
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
  }, [lightboxOpen, items.length]);

  if (items.length === 0) {
    return (
      <div className="mt-12 rounded-[18px] border border-dashed border-[#eee3de] bg-[#fefcfa] py-16 text-center text-[15px] text-[#8a7a71]">
        No pieces in this category yet. Please check back soon.
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
              setVisibleCount((n) => Math.min(n + PAGE_STEP, items.length))
            }
            className="inline-flex items-center gap-2 rounded-[10px] border border-[#ddbdb3] bg-transparent px-8 py-3 text-[14px] tracking-[0.04em] text-[#c88f87] transition hover:bg-[#c88f87] hover:text-white md:px-10 md:text-[15px]"
          >
            VIEW MORE
            <ChevronDown size={16} />
          </button>
          <span className="text-[13px] text-[#8a7a71]">
            Showing {paginatedItems.length} of {items.length}
          </span>
        </div>
      )}

      {/* Lightbox (portaled to body so it sits above the sticky header) */}
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

            {items.length > 1 && (
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
              className="relative flex h-[min(82vh,900px)] w-full max-w-[1100px] flex-col items-center"
            >
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                sizes="100vw"
                className="object-contain object-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                priority
              />
              <div className="mt-4 text-center text-[13px] tracking-[0.08em] text-white/70">
                {lightboxIndex + 1} / {items.length}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
