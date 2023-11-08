import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RectAreaLightUniformsLib } from "@react-three/drei";
import Random from "canvas-sketch-util/random";

const colors = {
  malevolentIllusion: [
    "#c06995",
    "#de77c7",
    "#df86df",
    "#d998ee",
    "#ceadf4",
    "#c6bff9",
  ],
  sunnyRainbow: ["#fbe555", "#fb9224", "#f45905", "#be8abf", "#ffeed0", "#feff89"],
};

export function Particle({ index, colorSet }) {
  const particle = useRef();

  useFrame((state, delta) => {
    if (particle.current) {
      const time = state.clock.elapsedTime;
      const radius = 5;
      const speed = 1.5;
      const angle = time * speed + index * 0.1;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      const wobble = 0.3 * Math.sin(time * speed * 3 + index);
      particle.current.position.set(x + wobble, y + wobble, 0);
    }
  });

  return (
    <mesh ref={particle} position={[0, 0, 0]}>
      <boxGeometry args={[0.1, 0.5, 0.1]} />
      <meshPhongMaterial color={colors[colorSet][index % colors[colorSet].length]} />
    </mesh>
  );
}
