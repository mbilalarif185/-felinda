"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Soft gold motes drifting around the necklace. Additive blending +
 * a round sprite texture keeps them glowing rather than dotty.
 * When `still` is true they hold their positions.
 */
export default function Particles({
  count = 320,
  still = false,
}: {
  count?: number;
  still?: boolean;
}) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute in a soft ellipsoid around the centre.
      const r = 2.2 + Math.random() * 3.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta) * 0.9;
      arr[i * 3 + 1] = r * Math.cos(phi) * 0.7;
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta) * 0.6 - 1;
    }
    return arr;
  }, [count]);

  // A soft radial sprite so each mote is a glow, not a square.
  const sprite = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(255,236,180,1)");
    g.addColorStop(0.4, "rgba(212,175,55,0.5)");
    g.addColorStop(1, "rgba(212,175,55,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    return tex;
  }, []);

  useFrame((state, delta) => {
    if (still || !points.current) return;
    points.current.rotation.y += delta * 0.035;
    const t = state.clock.elapsedTime;
    points.current.position.y = Math.sin(t * 0.35) * 0.12;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        map={sprite}
        size={0.09}
        sizeAttenuation
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </points>
  );
}
