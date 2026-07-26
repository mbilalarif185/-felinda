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

      <main className="min-h-screen bg-[#0a0a0a] text-[#d7d1c6]">
        <PageHero title={title} breadcrumb={breadcrumb} />

        <section className="relative z-10 px-6 pb-12 pt-32">
          <div className="mx-auto max-w-[1100px] rounded-[30px] border border-[#26221e] bg-[#121212] px-6 py-10 shadow-[0_10px_30px_rgba(110,90,80,0.04)] md:px-12 md:py-14">
            <div className="mx-auto max-w-[820px]">
              {/* Lead */}
              <header className="text-center">
                {updatedAt && (
                  <div className="text-[12px] uppercase tracking-[0.22em] text-[#a89a92]">
                    {updatedAt}
                  </div>
                )}

                {intro && (
                  <p className="mx-auto mt-6 max-w-[700px] font-serif text-[17px] leading-[1.85] text-[#b8b2a6] md:text-[19px]">
                    {intro}
                  </p>
                )}
              </header>

              {/* Table of contents */}
              {sections.length > 1 && (
                <nav
                  aria-label="On this page"
                  className="mt-10 rounded-[14px] border border-[#211c17] bg-[#141414] px-6 py-5"
                >
                  <div className="text-[12px] uppercase tracking-[0.18em] text-[#a89a92]">
                    On this page
                  </div>
                  <ol className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-[14px] text-[#cfc9be] md:grid-cols-2 md:text-[15px]">
                    {sections.map((s, i) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="inline-flex items-baseline gap-2 transition hover:text-[#d4af37]"
                        >
                          <span className="text-[#d4af37]">
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
                    className="scroll-mt-32 border-t border-[#26221e] pt-8 first:border-t-0 first:pt-0"
                  >
                    <div className="text-[14px] tracking-[0.18em] text-[#d4af37]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="mt-3 font-serif text-[26px] font-light leading-tight text-[#f3efe6] md:text-[32px]">
                      {s.title}
                    </h2>
                    <div className="legal-prose mt-4 text-[16px] leading-[1.85] text-[#cfc9be] md:text-[17px]">
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
