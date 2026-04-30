"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Extract the YouTube video ID from any common URL form:
 *   https://www.youtube.com/watch?v=XXXX
 *   https://youtu.be/XXXX
 *   https://www.youtube.com/embed/XXXX
 *   https://www.youtube.com/shorts/XXXX
 *   "XXXX" (raw id)
 */
export function getYouTubeId(url = "") {
  if (!url) return "";
  if (/^[\w-]{11}$/.test(url)) return url;
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const parts = u.pathname.split("/").filter(Boolean);
    const i = parts.findIndex((p) => p === "embed" || p === "shorts");
    if (i !== -1 && parts[i + 1]) return parts[i + 1];
    return parts[parts.length - 1] || "";
  } catch {
    return url;
  }
}

/**
 * Lightweight YouTube card.
 *
 * Shows only a thumbnail + play button on first paint (≈15KB per card).
 * The actual <iframe> (which pulls ~500KB+ of YouTube JS) is only
 * mounted after the user clicks play. Off-screen thumbnails are
 * `loading="lazy"` so they don't cost anything until scrolled into view.
 */
export default function YouTubeCard({ url, title, name, role }) {
  const id = getYouTubeId(url);
  const [active, setActive] = useState(false);

  // hqdefault is a sensible balance of size and quality across all videos.
  // (maxresdefault is sharper but doesn't exist for every video.)
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.webp`;

  return (
    <figure className="group overflow-hidden rounded-[18px] border border-[#eee3de] bg-[#fefcfa] shadow-[0_4px_15px_rgba(90,70,60,0.04)] transition hover:shadow-[0_10px_30px_rgba(90,70,60,0.08)]">
      <div className="relative aspect-video w-full overflow-hidden bg-[#1a1614]">
        {active ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title || "Felinda testimonial"}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play testimonial${name ? ` from ${name}` : ""}`}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt={title || "Felinda testimonial"}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1614]/55 via-transparent to-transparent" />
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#c88f87] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition group-hover:scale-110 group-hover:bg-white">
              <Play size={26} fill="currentColor" strokeWidth={0} className="ml-[3px]" />
            </span>
          </button>
        )}
      </div>

      {(name || title) && (
        <figcaption className="px-6 py-5">
          {title && (
            <h3 className="font-serif text-[20px] font-light leading-snug text-[#4f413a] md:text-[22px]">
              {title}
            </h3>
          )}
          {(name || role) && (
            <p className="mt-1 text-[14px] text-[#8e7b73] md:text-[15px]">
              {name}
              {name && role ? " · " : ""}
              <span className="italic">{role}</span>
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
