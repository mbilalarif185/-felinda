"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import MagneticButton from "@/components/luxe/ui/MagneticButton";
import Reveal from "@/components/luxe/ui/Reveal";
import { aboutImage } from "@/lib/luxe/content";

export default function AboutBrand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Parallax: the image drifts slower than the page as it passes through.
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="relative bg-luxeBlack px-6 py-28 lg:px-10">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20"
      >
        {/* Image with parallax + a gold frame offset */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-4 rounded-[1.6rem] border border-luxeGold/25" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
            <motion.div style={{ y }} className="absolute inset-[-8%]">
              <Image
                src={aboutImage}
                alt="An Auréa necklace, handcrafted in the atelier"
                fill
                sizes="(min-width:1024px) 44vw, 90vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-luxeBlack/40 to-transparent" />
          </div>
        </div>

        {/* Copy */}
        <div>
          <Reveal direction="right">
            <div className="luxe-rule max-w-[8rem]">
              <span className="font-sans text-[0.62rem] uppercase tracking-[0.34em] text-luxeGold">
                Our Story
              </span>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.05}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] text-white sm:text-5xl">
              A house built on a single idea — that jewellery should be personal.
            </h2>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <p className="mt-6 font-sans text-[15px] leading-8 text-luxeSmoke">
              Auréa began at a workbench in Kuala Lumpur, with one goldsmith and a
              refusal to make the same thing twice. Two decades later we are still
              small on purpose — because the work that matters cannot be rushed or
              repeated.
            </p>
          </Reveal>
          <Reveal direction="right" delay={0.15}>
            <p className="mt-4 font-sans text-[15px] leading-8 text-luxeSmoke">
              Every necklace is drawn, set, and finished by hand. We choose stones
              for character over carat, and we make each piece to be worn for a
              lifetime, then handed on.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-8">
              <MagneticButton href="/about" variant="ghost">
                Read Our Story
              </MagneticButton>
              <div className="flex gap-8">
                <div>
                  <div className="font-serif text-3xl text-luxeGoldSoft">20+</div>
                  <div className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-luxeSmoke">
                    Years
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-luxeGoldSoft">1 of 1</div>
                  <div className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-luxeSmoke">
                    Every piece
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
