import React from "react";
import { Canvas } from "@react-three/fiber";
// import {  } from "@react-three/drei";
import { Particle } from "./Particle";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const colors = {
  malevolentIllusion: [
    "#c06995",
    "#de77c7",
    "#df86df",
    "#d998ee",
    "#ceadf4",
    "#c6bff9",
  ],
  sunnyRainbow: [
    "#fbe555",
    "#fb9224",
    "#f45905",
    "#be8abf",
    "#ffeed0",
    "#feff89",
  ],
};

export function ParticleScene() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        {Array.from({ length: 50 }).map((_, index) => (
          <Particle key={index} index={index} colorSet="malevolentIllusion">
        
          </Particle>
        ))}
      </Canvas>
    </div>
  );
}
