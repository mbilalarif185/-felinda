"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Component } from "react";

import { heroFeatured } from "@/lib/content";

/**
 * Shown while the 3D scene loads, and again if WebGL is unavailable or the
 * canvas throws. It is the real commissioned piece — so a visitor without
 * WebGL still meets the stone, just as a photograph rather than in the round.
 */
function StoneFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] border border-atelierGold/25">
      <Image
        src={heroFeatured.src}
        alt={heroFeatured.alt}
        fill
        priority
        sizes="(min-width: 1024px) 42vw, 90vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-atelierInk/55 via-transparent to-transparent" />
    </div>
  );
}

const HeroGem = dynamic(() => import("./HeroGem"), {
  ssr: false,
  loading: () => <StoneFallback />,
});

/** Falls back to the photograph if the 3D scene errors at runtime. */
class GemBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return <StoneFallback />;
    return this.props.children;
  }
}

export default function HeroGemMount() {
  return (
    <div className="absolute inset-0">
      <GemBoundary>
        <HeroGem />
      </GemBoundary>
    </div>
  );
}
