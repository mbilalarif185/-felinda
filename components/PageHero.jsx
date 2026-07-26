import Link from "next/link";

/**
 * Reusable hero strip for inner pages. Dark luxe theme, with top padding
 * that clears the fixed navbar.
 *
 * Props:
 *   title            — string, the large heading
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
  const bottomPad = extendedBottom ? "pb-16 sm:pb-20 md:pb-28" : "pb-8 sm:pb-10";

  return (
    <section
      className={`luxe-hero-bg relative overflow-hidden px-4 pt-32 sm:px-6 sm:pt-36 ${bottomPad}`}
    >
      {/* soft gold halo */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-[36rem] max-w-[90%] -translate-x-1/2 rounded-full bg-luxeGold/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center text-center">
        <h1 className="font-serif text-[34px] font-light leading-[1.02] tracking-[-0.02em] text-white sm:text-[44px] md:text-[68px]">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-5 max-w-[640px] font-serif text-[17px] font-light leading-snug tracking-[0.01em] text-luxeSmoke sm:text-[19px] md:text-[22px]">
            {subtitle}
          </p>
        ) : null}

        {breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-sans text-[12px] uppercase tracking-[0.16em] leading-none text-luxeSmoke sm:mt-8 sm:gap-x-3 sm:text-[13px]"
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
                      className="transition-colors hover:text-luxeGoldSoft"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-luxeGoldSoft" : undefined}>
                      {item.label}
                    </span>
                  )}
                  {!isLast && (
                    <span className="leading-none text-luxeGold/50">•</span>
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
