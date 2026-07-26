"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useState, type ReactNode } from "react";

/** Static stand-in shown while the 3D chunk loads or if WebGL is unavailable. */
function GlowFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-72 w-72 rounded-full bg-luxeGold/20 blur-[80px]" />
    </div>
  );
}

// Lazy-load the whole 3D scene so three.js never blocks first paint.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <GlowFallback />,
});

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return <GlowFallback />;
    return this.props.children;
  }
}

/**
 * Probe once for a usable WebGL context. This also detects the case where the
 * browser has *blocked* context creation after repeated context loss — in
 * which case we show the fallback instead of letting three.js throw on mount.
 */
function useWebGLReady(): boolean | null {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    let cleared = false;
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      const available = !!gl;
      // Release the probe context immediately so it doesn't count against
      // the browser's live-context budget.
      if (gl && "getExtension" in gl) {
        (gl as WebGLRenderingContext).getExtension("WEBGL_lose_context")?.loseContext();
      }
      if (!cleared) setOk(available);
    } catch {
      if (!cleared) setOk(false);
    }
    return () => {
      cleared = true;
    };
  }, []);
  return ok;
}

export default function HeroCanvas() {
  const ready = useWebGLReady();

  return (
    <div className="absolute inset-0">
      {ready === false ? (
        <GlowFallback />
      ) : ready === true ? (
        <SceneBoundary>
          <HeroScene />
        </SceneBoundary>
      ) : (
        // Probing — show the glow so there's no empty box or layout shift.
        <GlowFallback />
      )}
    </div>
  );
}
