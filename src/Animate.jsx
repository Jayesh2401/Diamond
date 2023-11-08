import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React from "react";

function Box() {
  const [{ args1, args2 }, set] = useControls(() => ({
    args1: [3, 3, 40],
    args2: [42, 12, 2],
  }));

  useFrame(({ clock }) => {
    set({ args2: [args2[0], args2[1], clock.getElapsedTime()] });
  });

  return (
    <mesh position={[0, 0, 0]}>
      <torusKnotGeometry args={[...args1, ...args2]} />
      <meshStandardMaterial color="aqua" wireframe />
    </mesh>
  );
}

export default function Animate() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        camera={{
          position: [0, 0, 20],
        }}
      >
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="yellow" />
        <Box />
      </Canvas>
    </div>
  );
}
