"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
  Float,
  Sparkles,
} from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import { MathUtils } from "three";

/**
 * The stone. A faceted gem in transmission glass with a warm gold
 * attenuation — a champagne diamond suspended in the atelier's dark.
 * When `still` is true (reduced motion) it holds a fixed, table-up pose
 * and never spins, floats, or reacts to the pointer.
 */
function Gem({ still, mobile }) {
  const group = useRef(null);
  const mesh = useRef(null);

  useFrame((state, delta) => {
    if (!group.current || !mesh.current) return;
    if (still) return;

    // Slow, continuous turn — the jeweler rotating a stone under the loupe.
    mesh.current.rotation.y += delta * 0.28;
    mesh.current.rotation.z += delta * 0.05;

    // Gentle parallax toward the pointer, eased so it never feels twitchy.
    const px = state.pointer.x;
    const py = state.pointer.y;
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      px * 0.35,
      3,
      delta
    );
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      -py * 0.25,
      3,
      delta
    );
  });

  const gem = (
    <mesh ref={mesh} rotation={[0.4, 0, 0.15]} scale={[1, 1.18, 1]}>
      {/* Octahedron reads unmistakably as a cut gem; flat facets catch light. */}
      <octahedronGeometry args={[1.35, 0]} />
      <MeshTransmissionMaterial
        transmission={1}
        thickness={1.5}
        ior={2.42}
        chromaticAberration={0.55}
        anisotropy={0.3}
        roughness={0}
        distortion={0.15}
        distortionScale={0.3}
        temporalDistortion={still ? 0 : 0.08}
        attenuationColor="#e9d2a6"
        attenuationDistance={2.4}
        color="#fff6e8"
        samples={mobile ? 4 : 8}
        resolution={mobile ? 256 : 512}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </mesh>
  );

  return (
    <group ref={group}>
      {still ? (
        gem
      ) : (
        <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.5}>
          {gem}
        </Float>
      )}
    </group>
  );
}

export default function HeroGem() {
  const [still, setStill] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sm = window.matchMedia("(max-width: 640px)");
    const sync = () => {
      setStill(rm.matches);
      setMobile(sm.matches);
    };
    sync();
    rm.addEventListener("change", sync);
    sm.addEventListener("change", sync);
    return () => {
      rm.removeEventListener("change", sync);
      sm.removeEventListener("change", sync);
    };
  }, []);

  const dpr = useMemo(() => (mobile ? [1, 1.5] : [1, 1.9]), [mobile]);

  return (
    <Canvas
      // On reduced motion we render once and stop, so the scene is a still life.
      frameloop={still ? "demand" : "always"}
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 34 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      {/* Gold key + plum fill + a crisp white rim to spark the facet edges. */}
      <pointLight position={[4, 3, 4]} intensity={45} color="#e6c489" />
      <pointLight position={[-5, -2, 2]} intensity={22} color="#7d4a5c" />
      <directionalLight position={[0, 4, 3]} intensity={1.6} color="#fff4e2" />

      <Gem still={still} mobile={mobile} />

      {!still && (
        <Sparkles
          count={26}
          scale={[7, 8, 3]}
          size={2.2}
          speed={0.3}
          opacity={0.5}
          color="#d9bd8b"
        />
      )}

      {/* Offline environment — Lightformers only, no network HDR fetch.
          frames={1} bakes it once so it costs nothing per frame. */}
      <Environment resolution={128} frames={1}>
        <color attach="background" args={["#100b09"]} />
        <Lightformer
          intensity={3}
          color="#e6c489"
          position={[3, 2, 4]}
          scale={[5, 5, 1]}
        />
        <Lightformer
          intensity={1.4}
          color="#6f4152"
          position={[-4, -1, 3]}
          scale={[6, 6, 1]}
        />
        <Lightformer
          intensity={2}
          color="#fff3df"
          position={[0, 4, -3]}
          scale={[8, 2, 1]}
        />
      </Environment>
    </Canvas>
  );
}
