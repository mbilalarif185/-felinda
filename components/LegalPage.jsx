import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

/**
 * Shared layout for legal / policy pages (Privacy, Terms, etc.)
 *
 * Props:
 *   title         — hero title
 *   breadcrumb    — array of { label, href? }
 *   activeHref    — current route, used to highlight nav
 *   updatedAt     — string shown above the body, e.g. "Updated April 2026"
 *   intro         — optional lead paragraph shown beneath the heading
 *   sections      — array of { id, title, body: ReactNode }
 */
export default function LegalPage({
  title,
  breadcrumb,
  activeHref,
  updatedAt,
  intro,
  sections = [],
}) {
  return (
    <>
      <Header activeHref={activeHref} />

      <main className="min-h-screen bg-[#f6f0ec] text-[#56463f]">
        <PageHero title={title} breadcrumb={breadcrumb} />

        <section className="relative z-10 px-6 pb-12">
          <div className="mx-auto max-w-[1100px] rounded-[30px] border border-[#e7dbd5] bg-[#fbf7f4] px-6 py-10 shadow-[0_10px_30px_rgba(110,90,80,0.04)] md:px-12 md:py-14">
            <div className="mx-auto max-w-[820px]">
              {/* Lead */}
              <header className="text-center">
                {updatedAt && (
                  <div className="text-[12px] uppercase tracking-[0.22em] text-[#a89a92]">
                    {updatedAt}
                  </div>
                )}

                {intro && (
                  <p className="mx-auto mt-6 max-w-[700px] font-serif text-[17px] leading-[1.85] text-[#78675f] md:text-[19px]">
                    {intro}
                  </p>
                )}
              </header>

              {/* Table of contents */}
              {sections.length > 1 && (
                <nav
                  aria-label="On this page"
                  className="mt-10 rounded-[14px] border border-[#eee3de] bg-[#fefcfa] px-6 py-5"
                >
                  <div className="text-[12px] uppercase tracking-[0.18em] text-[#a89a92]">
                    On this page
                  </div>
                  <ol className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-[14px] text-[#5a4d46] md:grid-cols-2 md:text-[15px]">
                    {sections.map((s, i) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="inline-flex items-baseline gap-2 transition hover:text-[#c88f87]"
                        >
                          <span className="text-[#c88f87]">
                            {String(i + 1).padStart(2, "0")}.
                          </span>
                          <span>{s.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* Sections */}
              <div className="mt-10 space-y-10">
                {sections.map((s, i) => (
                  <section
                    key={s.id}
                    id={s.id}
                    className="scroll-mt-32 border-t border-[#ece1dc] pt-8 first:border-t-0 first:pt-0"
                  >
                    <div className="text-[14px] tracking-[0.18em] text-[#c88f87]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="mt-3 font-serif text-[26px] font-light leading-tight text-[#4f413a] md:text-[32px]">
                      {s.title}
                    </h2>
                    <div className="legal-prose mt-4 text-[16px] leading-[1.85] text-[#5a4d46] md:text-[17px]">
                      {s.body}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
