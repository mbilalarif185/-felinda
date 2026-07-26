import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Shared eyebrow + gold rule + serif title block used across sections. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"
      }
    >
      <div className={`luxe-rule ${isCenter ? "mx-auto max-w-md" : "max-w-md"}`}>
        <span className="font-sans text-[0.62rem] uppercase tracking-[0.34em] text-luxeGold">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 font-sans text-[15px] leading-8 text-luxeSmoke">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
