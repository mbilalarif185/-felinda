"use client";

import { Html, useProgress } from "@react-three/drei";

/** In-canvas Suspense fallback — a quiet gold shimmer while assets warm up. */
export default function SceneLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <span className="h-9 w-9 animate-spin rounded-full border border-luxeGold/30 border-t-luxeGold" />
        <span className="font-sans text-[0.62rem] uppercase tracking-[0.3em] text-luxeGoldSoft">
          {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}
