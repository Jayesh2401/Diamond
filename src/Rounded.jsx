// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, MeshWobbleMaterial } from "@react-three/drei";
// import { useControls } from "leva";

// function RoundedCube() {
//   const meshRef = useRef();
//   const { color, size } = useControls({
//     color: "#2196F3",
//     size: { value: 1, min: 0.5, max: 2 },
//   });

//   return (
//     <mesh ref={meshRef} scale={size} position={[0, 0, 0]}>
//       <boxGeometry args={[1, 1, 1]} />
//       <MeshWobbleMaterial
//         color={color}
//         factor={0} // The wobble factor for the material
//         speed={0} // The wobble speed for the material
//       />
//     </mesh>
//   );
// }

// function Rounded() {
//   return (
//     <div style={{ height: "100vh", background: "#e0e0e0" }}>
//       <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} intensity={1} />
//         <RoundedCube />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

// export default Rounded;

import React, { useRef, useState } from "react";
import { Canvas, useFrame, boxBufferGeometry } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshBasicMaterial attachArray="material0" color="red" /> */}
      <meshBasicMaterial attachArray="material4" color="purple" />
      {/* <meshBasicMaterial attachArray="material5" color="cyan" /> */}
      {/* <meshStandardMaterial color={hovered ? "hotpink" : "orange"} /> */}
    </mesh>
  );
}

function Rounded() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        {/* <ambientLight /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Box position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Rounded;
