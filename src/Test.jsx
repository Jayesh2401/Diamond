// // import React, { Suspense } from "react";
// // import { Canvas, useLoader } from "@react-three/fiber";
// // import { TextureLoader } from "three/src/loaders/TextureLoader";
// // import { OrbitControls } from "@react-three/drei";

// // const Cube = () => {
// //   const colorMap = useLoader(TextureLoader, "planet04.png");

// //   return (
// //     <div style={{ height: "100vh" }}>
// //       <Canvas>
// //         <Suspense fallback={null}>
// //           <ambientLight intensity={0.2} />
// //           <directionalLight />
// //           <mesh>
// //             <boxGeometry />
// //             <meshBasicMaterial attach="material" map={colorMap} />
// //           </mesh>
// //         </Suspense>
// //         <OrbitControls />
// //       </Canvas>
// //     </div>
// //   );
// // };

// // export default Cube;

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

// const Cube = () => {

//   return (
//     <div style={{ height: "100vh" }}>
//       <Canvas>
//         <Suspense fallback={null}>
//           <ambientLight intensity={0.2} />
//           <directionalLight />
//           <mesh>
//             <boxGeometry />
//             <meshBasicMaterial attach="material-0" color='red' />
//             <meshBasicMaterial attach="material-1" color='blue' />
//             <meshBasicMaterial attach="material-2" color='green' />
//             <meshBasicMaterial attach="material-3" color='purple' />
//             <meshBasicMaterial attach="material-4" color='cyan' />
//             <meshBasicMaterial attach="material-5" color='black' />
//           </mesh>
//         </Suspense>
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// };

// export default Cube;

import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const colors = [
  { name: "red", value: "#ff0000" },
  { name: "blue", value: "#0000ff" },
  { name: "yellow", value: "#ffff00" },
  { name: "purple", value: "#800080" },
  { name: "cyan", value: "#00ffff" },
  { name: "white", value: "#ffffff" },
];

const Cube = () => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(true);

  const gap = 0.05;
  const cubeSize = 0.82;

  const cubeFunction = () => {
    console.log("outisde");
    if (hovered) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        onPointerUp={(e) => setActive(true)}
        onPointerDown={(e) => cubeFunction()}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight />
          <group
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            // onPointerDown={(e) => }
          >
            {Array.from({ length: 3 }).map((_, i) =>
              Array.from({ length: 3 }).map((_, j) =>
                Array.from({ length: 3 }).map((_, k) => (
                  <mesh
                    key={`${i}-${j}-${k}`}
                    position={[
                      (i - 1) * (cubeSize + gap),
                      (j - 1) * (cubeSize + gap),
                      (k - 1) * (cubeSize + gap),
                    ]}
                  >
                    <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
                    <meshBasicMaterial
                      attach="material-0"
                      color={colors[0].value}
                    />
                    <meshBasicMaterial
                      attach="material-1"
                      color={colors[1].value}
                    />
                    <meshBasicMaterial
                      attach="material-2"
                      color={colors[2].value}
                    />
                    <meshBasicMaterial
                      attach="material-3"
                      color={colors[3].value}
                    />
                    <meshBasicMaterial
                      attach="material-4"
                      color={colors[4].value}
                    />
                    <meshBasicMaterial
                      attach="material-5"
                      color={colors[5].value}
                    />
                  </mesh>
                ))
              )
            )}
          </group>
        </Suspense>
        {active && <OrbitControls />}
      </Canvas>
    </div>
  );
};

export default Cube;
