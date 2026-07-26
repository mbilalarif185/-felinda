"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import HeroCanvas from "@/components/luxe/three/HeroCanvas";
import MagneticButton from "@/components/luxe/ui/MagneticButton";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="luxe-hero-bg relative min-h-[100svh] w-full overflow-hidden">
      {/* 3D necklace centrepiece — sits behind the content and takes pointer
          events so the stone tilts toward the cursor. */}
      <HeroCanvas />

      {/* Vignette to seat the type against the scene */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_35%,rgba(10,10,10,0.72)_100%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="pointer-events-none relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-between px-6 pb-16 pt-32 text-center lg:pt-36"
      >
        {/* Top: eyebrow + headline */}
        <div>
          <motion.p
            variants={rise}
            className="font-sans text-[0.7rem] uppercase tracking-[0.42em] text-luxeGoldSoft/80"
          >
            Fine Jewellery · Kuala Lumpur
          </motion.p>
          <motion.h1
            variants={rise}
            className="mt-6 font-serif text-[3.4rem] font-light leading-[0.92] tracking-[-0.01em] text-white sm:text-7xl lg:text-[7.5rem]"
          >
            Timeless
            <br />
            <span className="luxe-gold-text italic">Elegance</span>
          </motion.h1>
        </div>

        {/* Bottom: subtitle + CTAs + scroll cue */}
        <div className="flex flex-col items-center">
          <motion.p
            variants={rise}
            className="max-w-xl font-sans text-base leading-8 text-luxeSmoke sm:text-lg"
          >
            Handcrafted luxury necklaces designed to celebrate every moment.
          </motion.p>

          <motion.div
            variants={rise}
            className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton href="#collections" variant="solid">
              Shop Collection
            </MagneticButton>
            <MagneticButton href="#best-sellers" variant="ghost">
              Explore Designs
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={rise}
            className="mt-12 flex flex-col items-center gap-2 text-luxeGoldSoft/70"
          >
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <motion.span
              animate={reduce ? undefined : { y: [0, 7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiArrowDown size={16} />
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
