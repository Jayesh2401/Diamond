import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, OrbitControls } from "@react-three/drei";

function Fourth() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ fov: 75, position: [1, 10, 1] }}>
        <pointLight position={[10, 25, 10]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh
          visible
          userData={{ hello: "world" }}
          position={[1, 2, 3]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#9435df" transparent />
        </mesh>
        <OrbitControls
          enableRotate
          enablePan={false}
          enableZoom={false}
          minPolarAngle={0} // Set the minimum polar angle to 0
          maxPolarAngle={Math.PI}
        />
      </Canvas>
    </div>
  );
}

export default Fourth;
