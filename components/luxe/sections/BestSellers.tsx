"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import SectionHeading from "@/components/luxe/ui/SectionHeading";
import TiltCard from "@/components/luxe/ui/TiltCard";
import { bestSellers, type Product } from "@/lib/luxe/content";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          size={11}
          className={i < rating ? "text-luxeGold" : "text-luxeSmoke/25"}
        />
      ))}
    </span>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard className="h-full rounded-2xl">
        <Link
          href={product.href}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-luxeGold/12 bg-luxeCharcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxeGold focus-visible:ring-offset-2 focus-visible:ring-offset-luxeBlack"
        >
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width:1024px) 24vw, (min-width:640px) 46vw, 90vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 rounded-full bg-luxeBlack/60 px-3 py-1 font-sans text-[0.55rem] uppercase tracking-[0.2em] text-luxeGoldSoft backdrop-blur-sm">
              Best Seller
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-center justify-between">
              <Stars rating={product.rating} />
              <span className="font-sans text-[0.62rem] text-luxeSmoke/70">
                ({product.reviews})
              </span>
            </div>
            <h3 className="mt-3 font-serif text-lg leading-snug text-white">
              {product.name}
            </h3>
            <div className="mt-auto flex items-center justify-between pt-5">
              <span className="font-sans text-sm tracking-wide text-luxeGoldSoft">
                {product.price}
              </span>
              <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-luxeSmoke transition-colors group-hover:text-luxeGold">
                View →
              </span>
            </div>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

export default function BestSellers() {
  return (
    <section
      id="best-sellers"
      className="relative bg-gradient-to-b from-luxeCharcoal to-luxeBlack px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Best Sellers"
          title="Most loved this season"
          subtitle="The pieces our clients keep coming back for — and passing on."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
