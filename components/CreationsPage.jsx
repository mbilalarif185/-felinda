import {
  CalendarDays,
  Truck,
  ShieldCheck,
  Gem,
  ArrowRight,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

/**
 * Shared layout for every Creations / Bespoke gallery page.
 *
 * Props:
 *   title          — large hero title
 *   breadcrumb     — array of { label, href? } items for the hero breadcrumb
 *   activeHref     — current route, used to highlight the nav
 *   description    — intro paragraph shown beneath the "Designed for Felinda" heading
 *   galleryItems   — array of { title, image } items for the photo grid
 */
export default function CreationsPage({
  title,
  breadcrumb,
  activeHref,
  description,
  galleryItems = [],
}) {
  return (
    <>
      <Header activeHref={activeHref} />

      <div className="min-h-screen bg-[#f6f0ec] text-[#56463f]">
        <PageHero title={title} breadcrumb={breadcrumb} />

        <div className="relative overflow-hidden">
          {/* Main card */}
          <section className="relative z-10 px-6 pb-12">
            <div className="mx-auto max-w-[1320px] rounded-[30px] border border-[#e7dbd5] bg-[#fbf7f4] px-6 py-10 shadow-[0_10px_30px_rgba(110,90,80,0.04)] md:px-10 md:py-12">
              {/* Intro */}
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
                  {description}
                </p>

                <button className="mt-9 inline-flex items-center gap-3 rounded-[8px] bg-[#d29189] px-8 py-4 text-[15px] font-medium tracking-[0.02em] text-white shadow-sm transition hover:bg-[#c5827a] md:text-[17px]">
                  <CalendarDays size={18} />
                  BOOK A CONSULTATION
                </button>
              </div>

              {/* Divider */}
              <div className="mt-12 border-t border-[#ece1dc]" />

              {/* Gallery */}
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-[18px] border border-[#eee3de] bg-[#fefcfa] shadow-[0_4px_15px_rgba(90,70,60,0.04)]"
                  >
                    <div className="aspect-[1.22/1] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA strip */}
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

              {/* Bottom benefits */}
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
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
