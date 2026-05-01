import Link from "next/link";

function JewelCorner({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute text-[#e4bfb4] opacity-80 ${className}`}
    >
      <svg viewBox="0 0 300 300" className="h-full w-full" fill="none">
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {/* Solitaire ring */}
          <g transform="translate(78 78)">
            <ellipse cx="0" cy="38" rx="50" ry="56" strokeWidth="1.4" />
            <ellipse cx="0" cy="38" rx="42" ry="48" strokeWidth="1.1" />
            <circle cx="0" cy="-22" r="24" strokeWidth="1.3" />
            <circle cx="0" cy="-22" r="16" strokeWidth="1.1" />
            <path d="M-16 -22 L0 -38 L16 -22 L0 -6 Z" strokeWidth="1" />
            <path d="M-24 -22 L24 -22" strokeWidth="0.9" />
            <path d="M0 -46 L0 2" strokeWidth="0.9" />
            <path d="M-17 -34 L17 -10" strokeWidth="0.8" />
            <path d="M17 -34 L-17 -10" strokeWidth="0.8" />
            <path d="M-19 -34 L-13 -28" strokeWidth="1" />
            <path d="M19 -34 L13 -28" strokeWidth="1" />
            <path d="M-19 -10 L-13 -16" strokeWidth="1" />
            <path d="M19 -10 L13 -16" strokeWidth="1" />
          </g>

          {/* Pear-cut pendant */}
          <g transform="translate(208 132)">
            <path
              d="M0 -42 C20 -30 30 -8 26 16 C22 36 8 50 0 50 C-8 50 -22 36 -26 16 C-30 -8 -20 -30 0 -42 Z"
              strokeWidth="1.3"
            />
            <path
              d="M0 -42 C14 -24 18 -4 16 14 C12 32 4 44 0 44 C-4 44 -12 32 -16 14 C-18 -4 -14 -24 0 -42 Z"
              strokeWidth="1"
            />
            <path d="M0 -42 L0 44" strokeWidth="0.9" />
            <path d="M-26 0 L26 0" strokeWidth="0.9" />
            <path d="M-16 -16 L16 -16" strokeWidth="0.8" />
            <path d="M-22 18 L22 18" strokeWidth="0.8" />
            <path d="M0 -46 L-32 -78" strokeWidth="1" />
            <path d="M0 -46 L32 -78" strokeWidth="1" />
          </g>

          {/* Marquise / oval cluster */}
          <g transform="translate(60 218)">
            <path
              d="M0 -28 C24 -28 40 -10 40 0 C40 10 24 28 0 28 C-24 28 -40 10 -40 0 C-40 -10 -24 -28 0 -28 Z"
              strokeWidth="1.3"
            />
            <path d="M-40 0 L40 0" strokeWidth="0.9" />
            <path d="M0 -28 L0 28" strokeWidth="0.9" />
            <path d="M-28 -16 L28 16" strokeWidth="0.8" />
            <path d="M-28 16 L28 -16" strokeWidth="0.8" />
          </g>

          {/* Eternity band */}
          <g transform="translate(180 230)">
            <ellipse cx="0" cy="0" rx="44" ry="22" strokeWidth="1.3" />
            <ellipse cx="0" cy="0" rx="36" ry="16" strokeWidth="1" />
            <circle cx="-30" cy="-12" r="2.4" strokeWidth="0.9" />
            <circle cx="-18" cy="-16" r="2.6" strokeWidth="0.9" />
            <circle cx="-6" cy="-18" r="2.8" strokeWidth="0.9" />
            <circle cx="6" cy="-18" r="2.8" strokeWidth="0.9" />
            <circle cx="18" cy="-16" r="2.6" strokeWidth="0.9" />
            <circle cx="30" cy="-12" r="2.4" strokeWidth="0.9" />
          </g>

          {/* Tiny round diamond */}
          <g transform="translate(36 70)">
            <circle cx="0" cy="0" r="14" strokeWidth="1" />
            <circle cx="0" cy="0" r="9" strokeWidth="0.9" />
            <path d="M-9 0 L0 -9 L9 0 L0 9 Z" strokeWidth="0.8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

/**
 * Reusable hero strip for inner pages.
 *
 * Props:
 *   title       — string, the large heading
 *   subtitle         — optional softer second line beneath the H1
 *   extendedBottom   — extra padding below breadcrumbs when a main card overlaps the hero (bespoke gallery)
 *   breadcrumb       — array of { label, href? } items (last item is treated as the current page)
 */
export default function PageHero({
  title,
  subtitle,
  breadcrumb = [],
  extendedBottom = false,
}) {
  const bottomPad = extendedBottom ? "pb-16 sm:pb-20 md:pb-28" : "pb-6";

  return (
    <section className={`relative overflow-hidden bg-[#f6f0ec] px-4 pt-10 sm:px-6 sm:pt-12 ${bottomPad}`}>
      <JewelCorner className="left-0 top-0 h-[230px] w-[230px] sm:h-[310px] sm:w-[310px]" />
      <JewelCorner className="right-0 top-0 h-[230px] w-[230px] scale-x-[-1] sm:h-[310px] sm:w-[310px]" />

      <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center text-center">
        <h1 className="font-serif text-[32px] font-light leading-none tracking-[-0.02em] text-[#4e4039] sm:text-[40px] md:text-[66px]">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-4 max-w-[640px] font-serif text-[16px] font-light leading-snug tracking-[0.01em] text-[#78675f] sm:mt-5 sm:text-[18px] md:text-[22px]">
            {subtitle}
          </p>
        ) : null}

        {breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] leading-none text-[#8e7a72] sm:mt-7 sm:gap-x-3 sm:text-[15px] md:text-[17px]"
          >
            {breadcrumb.map((item, i) => {
              const isLast = i === breadcrumb.length - 1;
              return (
                <span
                  key={`${item.label}-${i}`}
                  className="flex items-center gap-3 leading-none"
                >
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="transition hover:text-[#4e4039]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-[#4e4039]" : undefined}>
                      {item.label}
                    </span>
                  )}
                  {!isLast && (
                    <span className="text-[#d49a92] leading-none">•</span>
                  )}
                </span>
              );
            })}
          </nav>
        )}
      </div>
    </section>
  );
}
