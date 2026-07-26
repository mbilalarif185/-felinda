"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  Float,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

import Necklace from "./Necklace";
import Particles from "./Particles";
import SceneLoader from "./SceneLoader";

const CAM_TARGET = new THREE.Vector3(0, -0.2, 0);

/** Smooth camera dolly on load, then hand control to OrbitControls. */
function IntroRig({ still }: { still: boolean }) {
  const { camera } = useThree();
  useEffect(() => {
    // Start position for the dolly-in.
    camera.position.set(0, 0.9, still ? 5.4 : 7.6);
    camera.lookAt(CAM_TARGET);
  }, [camera, still]);

  useFrame((state) => {
    if (still) return;
    const t = state.clock.elapsedTime;
    if (t < 1.5) {
      const p = t / 1.5;
      const eased = 1 - Math.pow(1 - p, 3);
      camera.position.z = THREE.MathUtils.lerp(7.6, 5.4, eased);
      camera.position.y = THREE.MathUtils.lerp(0.9, 0.15, eased);
      camera.lookAt(CAM_TARGET);
    }
  });
  return null;
}

/** Entrance scale (0 → 1) + pointer parallax tilt on the necklace group. */
function NecklaceGroup({ mobile, still }: { mobile: boolean; still: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    if (still) {
      g.scale.setScalar(1);
      return;
    }

    // Scale from nothing to full size on load.
    const p = Math.min(state.clock.elapsedTime / 1.2, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    g.scale.setScalar(eased);

    // Subtle tilt toward the pointer.
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, state.pointer.x * 0.3, 3, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -state.pointer.y * 0.2, 3, delta);
  });

  const necklace = <Necklace mobile={mobile} still={still} />;

  return (
    <group ref={group} position={[0, 0.15, 0]}>
      {still ? (
        necklace
      ) : (
        <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
          {necklace}
        </Float>
      )}
    </group>
  );
}

export default function HeroScene() {
  const [still, setStill] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sm = window.matchMedia("(max-width: 768px)");
    const sync = () => {
      setStill(rm.matches);
      setMobile(sm.matches);
    };
    sync();
    rm.addEventListener("change", sync);
    sm.addEventListener("change", sync);
    // Let the intro dolly finish before OrbitControls takes the camera.
    const id = window.setTimeout(() => setReady(true), 1600);
    return () => {
      rm.removeEventListener("change", sync);
      sm.removeEventListener("change", sync);
      window.clearTimeout(id);
    };
  }, []);

  return (
    <Canvas
      frameloop={still ? "demand" : "always"}
      dpr={mobile ? [1, 1.5] : [1, 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.08,
      }}
      camera={{ fov: 38, position: [0, 0.9, 7.6], near: 0.1, far: 100 }}
      style={{ background: "transparent" }}
      onCreated={({ gl }) => {
        // Recover gracefully from context loss instead of letting the
        // browser escalate to a hard "context blocked" state.
        const canvas = gl.domElement;
        canvas.addEventListener(
          "webglcontextlost",
          (e) => e.preventDefault(),
          false
        );
      }}
    >
      <Suspense fallback={<SceneLoader />}>
        <ambientLight intensity={0.4} />
        <spotLight
          position={[5, 6, 4]}
          angle={0.5}
          penumbra={1}
          intensity={120}
          color="#fff2d4"
        />
        <pointLight position={[-5, -1, 3]} intensity={30} color="#d4af37" />

        <IntroRig still={still} />
        <NecklaceGroup mobile={mobile} still={still} />

        {!mobile && <Particles count={still ? 180 : 320} still={still} />}

        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.35}
          scale={9}
          blur={2.6}
          far={4}
          color="#000000"
        />

        {/* HDR-style studio environment built from Lightformers — offline,
            no network HDR fetch. Baked once for performance. */}
        <Environment resolution={128} frames={1}>
          <color attach="background" args={["#0a0a0a"]} />
          <Lightformer
            form="rect"
            intensity={4}
            color="#ffffff"
            position={[0, 4, 3]}
            scale={[8, 3, 1]}
          />
          <Lightformer
            form="rect"
            intensity={2.4}
            color="#ffe6ad"
            position={[5, 1, 2]}
            scale={[4, 6, 1]}
          />
          <Lightformer
            form="ring"
            intensity={2}
            color="#d4af37"
            position={[-5, 2, -2]}
            scale={[3, 3, 1]}
          />
        </Environment>

        {!mobile && (
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={0.7}
              luminanceThreshold={0.82}
              luminanceSmoothing={0.9}
              radius={0.7}
            />
          </EffectComposer>
        )}
      </Suspense>

      {/* OrbitControls: no zoom, no pan, gentle auto-rotation. Mounted only
          after the intro dolly so the two don't fight for the camera. */}
      {ready && !still && (
        <OrbitControls
          makeDefault
          target={CAM_TARGET}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.55}
          enableDamping
        />
      )}
    </Canvas>
  );
}
