import React from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
  CalendarDays,
  Truck,
  ShieldCheck,
  Gem,
  ArrowRight,
} from "lucide-react";

const galleryItems = [
  {
    title: "Rose Garden Pendant",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pink Drop Earrings",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Floral Sapphire Ring",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bloom Bracelet",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Heritage Necklace",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gem Detail",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
  },
];

const filters = [
  "All Pieces",
  "Necklaces",
  "Earrings",
  "Rings",
  "Bracelets",
  "Custom Designs",
];

function FloralCorner({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute text-[#ecd8d2] opacity-80 ${className}`}>
      <svg viewBox="0 0 300 300" className="h-full w-full" fill="none">
        <path
          d="M18 218C65 161 98 104 96 42"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M55 188C115 170 150 126 155 73"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M84 143C139 146 184 126 212 85"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M103 98C132 72 160 59 191 53"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M84 146C67 129 50 121 31 118"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M56 190C42 180 28 176 14 178"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <ellipse
          cx="108"
          cy="95"
          rx="22"
          ry="38"
          transform="rotate(30 108 95)"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <ellipse
          cx="151"
          cy="76"
          rx="20"
          ry="35"
          transform="rotate(18 151 76)"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <ellipse
          cx="70"
          cy="147"
          rx="18"
          ry="29"
          transform="rotate(-20 70 147)"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <ellipse
          cx="41"
          cy="188"
          rx="15"
          ry="24"
          transform="rotate(-18 41 188)"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <ellipse
          cx="214"
          cy="86"
          rx="24"
          ry="43"
          transform="rotate(32 214 86)"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

export default function FelindaGalleryPage() {
  return (
    <div className="min-h-screen bg-[#f6f0ec] text-[#56463f]">
      <div className="relative overflow-hidden">
        <FloralCorner className="left-0 top-[72px] h-[310px] w-[310px]" />
        <FloralCorner className="right-0 top-[72px] h-[310px] w-[310px] scale-x-[-1]" />

        {/* Header */}
        <header className="relative z-10 border-b border-[#e8ddd8] bg-[#f8f3ef]">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6">
            <div className="font-serif text-[42px] font-light italic tracking-wide text-[#cf9a91]">
              Felinda
            </div>

            <nav className="hidden items-center gap-10 text-[15px] text-[#5a4d46] lg:flex">
              <a href="#" className="flex items-center gap-1 hover:text-[#c88f87]">
                Collections <ChevronDown size={14} />
              </a>
              <a href="#" className="hover:text-[#c88f87]">Bespoke</a>
              <a href="#" className="flex items-center gap-1 hover:text-[#c88f87]">
                Gemstones <ChevronDown size={14} />
              </a>
              <a href="#" className="hover:text-[#c88f87]">About Felinda</a>
              <a href="#" className="hover:text-[#c88f87]">Journal</a>
            </nav>

            <div className="flex items-center gap-5 text-[#5b4c46]">
              <Search size={20} strokeWidth={1.8} />
              <User size={20} strokeWidth={1.8} />
              <Heart size={20} strokeWidth={1.8} />
              <ShoppingBag size={20} strokeWidth={1.8} />
            </div>
          </div>
        </header>

        {/* Title section */}
        <section className="relative z-10 px-6 pb-6 pt-12">
          <div className="mx-auto max-w-[980px] text-center">
            <h1 className="font-serif text-[66px] font-light leading-none tracking-[-0.02em] text-[#4e4039]">
              Bespoke Jewelry Gallery
            </h1>

            <div className="mx-auto mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-[#e3c8bf]" />
              <div className="text-[#d49a92]">✦</div>
              <div className="h-px w-24 bg-[#e3c8bf]" />
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 text-[17px] text-[#8e7a72]">
              <span>Home</span>
              <span>•</span>
              <span>Bespoke</span>
              <span>•</span>
              <span>Gallery</span>
            </div>
          </div>
        </section>

        {/* Main card */}
        <section className="relative z-10 px-6 pb-8">
          <div className="mx-auto max-w-[1320px] rounded-[30px] border border-[#e7dbd5] bg-[#fbf7f4] px-8 py-10 shadow-[0_10px_30px_rgba(110,90,80,0.04)] md:px-10 md:py-12">
            {/* Intro */}
            <div className="mx-auto max-w-[900px] text-center">
              <h2 className="font-serif text-[64px] font-light leading-[1.05] tracking-[-0.03em] text-[#4f413a]">
                Designed{" "}
                <span className="font-light italic text-[#d59a92]">
                  for Felinda
                </span>
              </h2>

              <div className="mx-auto mt-6 flex items-center justify-center gap-4">
                <div className="h-px w-14 bg-[#e4c9c0]" />
                <div className="text-[#d49a92]">✦</div>
                <div className="h-px w-14 bg-[#e4c9c0]" />
              </div>

              <p className="mx-auto mt-7 max-w-[760px] font-serif text-[20px] leading-[1.8] text-[#78675f]">
                Every piece tells a story of timeless romance and feminine elegance.
                Our bespoke creations feature luminous pink gemstones, set in
                radiant rose gold and inspired by the beauty of nature’s finest blooms.
              </p>

              <button className="mt-9 inline-flex items-center gap-3 rounded-[8px] bg-[#d29189] px-8 py-4 text-[17px] font-medium tracking-[0.02em] text-white shadow-sm transition hover:bg-[#c5827a]">
                <CalendarDays size={18} />
                BOOK A CONSULTATION
              </button>
            </div>

            {/* Divider */}
            <div className="mt-12 border-t border-[#ece1dc]" />

            {/* Filters */}
            <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-7">
                {filters.map((item, index) => (
                  <button
                    key={item}
                    className={
                      index === 0
                        ? "rounded-[8px] bg-[#d29189] px-7 py-3 text-[16px] text-white"
                        : "text-[17px] text-[#73645c] transition hover:text-[#c88f87]"
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button className="inline-flex items-center gap-3 self-start rounded-[8px] border border-[#e5d8d2] bg-white px-5 py-3 text-[16px] text-[#7d6e67]">
                <span>Sort by: Newest</span>
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Gallery */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[18px] border border-[#eee3de] bg-[#fefcfa] shadow-[0_4px_15px_rgba(90,70,60,0.04)]"
                >
                  <div className="aspect-[1.22/1] overflow-hidden">
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
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#dfc5bc] text-[#cf938b]">
                  <Gem size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="font-serif text-[38px] font-light text-[#54463f]">
                    Create something truly yours.
                  </h3>
                  <p className="mt-1 text-[20px] text-[#807069]">
                    Our designers are here to bring your vision to life.
                  </p>
                </div>
              </div>

              <button className="inline-flex items-center justify-center gap-3 rounded-[10px] border border-[#ddbdb3] bg-transparent px-10 py-4 text-[17px] tracking-[0.04em] text-[#c88f87] transition hover:bg-[#c88f87] hover:text-white">
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
                    <div className="font-serif text-[24px] font-light text-[#564840]">
                      Complimentary Shipping
                    </div>
                    <div className="text-[16px] italic text-[#8e7b73]">
                      On all orders
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-1 text-[#d0938a]" size={22} />
                  <div>
                    <div className="font-serif text-[24px] font-light text-[#564840]">
                      Lifetime Craftsmanship
                    </div>
                    <div className="text-[16px] italic text-[#8e7b73]">
                      Guaranteed for life
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Gem className="mt-1 text-[#d0938a]" size={22} />
                  <div>
                    <div className="font-serif text-[24px] font-light text-[#564840]">
                      Finest Materials
                    </div>
                    <div className="text-[16px] italic text-[#8e7b73]">
                      Ethically sourced gemstones
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CalendarDays className="mt-1 text-[#d0938a]" size={22} />
                  <div>
                    <div className="font-serif text-[24px] font-light text-[#564840]">
                      Book a Consultation
                    </div>
                    <div className="text-[16px] italic text-[#8e7b73]">
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
  );
}