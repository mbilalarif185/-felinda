"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import SectionHeading from "@/components/luxe/ui/SectionHeading";
import { collections } from "@/lib/luxe/content";

export default function FeaturedCollections() {
  return (
    <section id="collections" className="relative bg-luxeBlack px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Collections"
          title="Curated worlds of gold"
          subtitle="Four ways into the atelier — each a different mood, the same devotion to detail."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <Link
                href={c.href}
                className="group relative block overflow-hidden rounded-2xl border border-luxeGold/12 bg-luxeCharcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxeGold focus-visible:ring-offset-2 focus-visible:ring-offset-luxeBlack"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(min-width:1024px) 24vw, (min-width:640px) 46vw, 90vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxeBlack via-luxeBlack/25 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <p className="font-sans text-[0.6rem] uppercase tracking-[0.24em] text-luxeGoldSoft/80">
                      {c.tagline}
                    </p>
                    <h3 className="mt-1.5 font-serif text-xl text-white">
                      {c.name}
                    </h3>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-luxeGold/40 text-luxeGoldSoft transition-all duration-300 group-hover:bg-luxeGold group-hover:text-luxeBlack">
                    <FiArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
