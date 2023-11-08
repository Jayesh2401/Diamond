import React, { useState } from "react";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Curvecube() {
  const colorMap = useLoader(TextureLoader, "metal.jpg");
  const [d, setd] = useState("1");



  return (
    <div style={{ height: "100vh" }}>
      <Canvas shadows camera={{ position: [-5, 0.5, 5], fov: 45 }}>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.5} />
        <RoundedBox args={[3, 3, 3.25]} radius={0.5}>
          <meshStandardMaterial
            attach="material"
            color={"lightblue"}
            metalness={0.5}
            roughness={0.1}
          />
        </RoundedBox>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Curvecube;
