import Link from "next/link";

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
