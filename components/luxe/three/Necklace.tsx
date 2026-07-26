"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { MeshTransmissionMaterial, Sparkles } from "@react-three/drei";

/**
 * A procedurally built necklace — no GLB required.
 *   • Chain  : instanced gold beads sampled along a hanging U-curve
 *              (one draw call for the whole strand).
 *   • Bail   : a small gold ring linking the strand to the pendant.
 *   • Pendant: a faceted gemstone in transmission glass that catches the
 *              environment and blooms at its bright specular edges.
 *
 * Motion (rotation / float / entrance) is applied by the parent group in
 * HeroScene, so this component is purely the object itself.
 */

const HALF_WIDTH = 2.15;
const Y_CENTER = -1.15; // lowest point of the strand
const Y_ENDS = 0.95; // where the strand meets the neck
const BEAD_COUNT = 88;
const BEAD_RADIUS = 0.058;

/** Point on the necklace curve for a normalized t in [0,1]. */
function curvePoint(t: number, out: THREE.Vector3) {
  const x = -HALF_WIDTH + 2 * HALF_WIDTH * t;
  const k = x / HALF_WIDTH;
  const y = Y_CENTER + (Y_ENDS - Y_CENTER) * k * k; // parabola → U shape
  const z = Math.sin(t * Math.PI) * 0.12; // gentle forward bow
  return out.set(x, y, z);
}

function ChainBeads({ mobile }: { mobile: boolean }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const count = mobile ? 60 : BEAD_COUNT;

  useLayoutEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const dummy = new THREE.Object3D();
    const p = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      curvePoint(i / (count - 1), p);
      dummy.position.copy(p);
      // Slight scale variation so the strand reads hand-strung, not printed.
      const s = 1 + Math.sin(i * 1.7) * 0.12;
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }, [count]);

  return (
    <instancedMesh
      ref={ref}
      // geometry & material are supplied as children; three's ctor types
      // don't accept undefined, so cast just the first two args.
      args={[undefined as never, undefined as never, count]}
      castShadow
    >
      <sphereGeometry args={[BEAD_RADIUS, 20, 20]} />
      <meshStandardMaterial
        color="#e7c15a"
        metalness={1}
        roughness={0.22}
        envMapIntensity={1.6}
      />
    </instancedMesh>
  );
}

function Pendant({ mobile, still }: { mobile: boolean; still: boolean }) {
  // Sit just below the lowest bead, centred.
  const y = Y_CENTER - 0.34;

  const gold = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#e7c15a",
        metalness: 1,
        roughness: 0.24,
        envMapIntensity: 1.6,
      }),
    []
  );

  return (
    <group position={[0, y, 0.05]}>
      {/* Bail — the little ring the pendant hangs from */}
      <mesh position={[0, 0.34, 0]} rotation={[Math.PI / 2, 0, 0]} material={gold}>
        <torusGeometry args={[0.08, 0.024, 16, 32]} />
      </mesh>

      {/* Setting collar behind the stone */}
      <mesh position={[0, 0, -0.02]} material={gold}>
        <torusGeometry args={[0.2, 0.05, 20, 36]} />
      </mesh>

      {/* The stone — faceted, refractive */}
      <mesh rotation={[0.3, 0.4, 0]} scale={[0.34, 0.44, 0.34]}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.9}
          ior={2.42}
          chromaticAberration={0.5}
          anisotropy={0.25}
          roughness={0}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={still ? 0 : 0.06}
          attenuationColor="#f4e6b0"
          attenuationDistance={2}
          color="#fff7e6"
          clearcoat={1}
          clearcoatRoughness={0}
          samples={mobile ? 3 : 6}
          resolution={mobile ? 128 : 256}
        />
      </mesh>

      {/* Sparkle only when motion is allowed */}
      {!still && (
        <Sparkles
          count={mobile ? 8 : 16}
          scale={[1.1, 1.1, 1.1]}
          size={2.4}
          speed={0.4}
          opacity={0.8}
          color="#ffe9a8"
        />
      )}
    </group>
  );
}

export default function Necklace({
  mobile = false,
  still = false,
}: {
  mobile?: boolean;
  still?: boolean;
}) {
  return (
    <group>
      <ChainBeads mobile={mobile} />
      <Pendant mobile={mobile} still={still} />
    </group>
  );
}
