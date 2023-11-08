import React from "react";
import { Canvas } from "@react-three/fiber";

function Second() {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <sphereGeometry args={[5]}  />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Second;
