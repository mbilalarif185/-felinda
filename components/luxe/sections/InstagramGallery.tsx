"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

import SectionHeading from "@/components/luxe/ui/SectionHeading";
import { gallery } from "@/lib/luxe/content";

export default function InstagramGallery() {
  return (
    <section className="relative bg-gradient-to-b from-luxeBlack to-luxeCharcoal px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="@aureajewellery"
          title="From the atelier"
          subtitle="Follow along for new pieces, behind-the-scenes, and the stones that stop us in our tracks."
        />

        {/* Masonry via CSS columns — varied heights keep the rhythm organic. */}
        <div className="mt-16 columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
          {gallery.map((src, i) => (
            <motion.a
              key={src}
              href="https://www.instagram.com/quantelsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-xl border border-luxeGold/10"
            >
              <Image
                src={src}
                alt="Auréa piece on Instagram"
                width={500}
                height={i % 3 === 0 ? 640 : 500}
                sizes="(min-width:1024px) 22vw, (min-width:768px) 30vw, 46vw"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-luxeBlack/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-luxeBlack/50 group-hover:opacity-100">
                <FaInstagram className="text-luxeGoldSoft" size={30} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
