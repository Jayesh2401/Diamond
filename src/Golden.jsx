import React from "react";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import {
  Torus,
  Environment,
  AccumulativeShadows,
  TrackballControls,
  RandomizedLight,
} from "@react-three/drei";
import { FlakesTexture } from "three-stdlib";

function Golden() {
  const normalMapTexture = new THREE.CanvasTexture(
    new FlakesTexture(),
    THREE.UVMapping,
    THREE.RepeatWrapping,
    THREE.RepeatWrapping
  );
  normalMapTexture.repeat.set(40, 40);

  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Torus args={[0.7, 0.15, 64, 64]} rotation-x={Math.PI}>
          <meshStandardMaterial
            color="orange"
            roughness={0}
            metalness={0.8}
            envMapIntensity={1.7}
            normalScale={[0.1, 0.1]}
            normalMap={normalMapTexture}
          />
        </Torus>
        <AccumulativeShadows
          temporal
          frames={100}
          color="orange"
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.9}
          opacity={2}
          scale={12}
        >
          <RandomizedLight
            amount={8}
            radius={4}
            ambient={0.5}
            intensity={1}
            position={[5, 5, -10]}
            bias={0.001}
          />
        </AccumulativeShadows>
        <Environment preset="city"  />
        <TrackballControls
          regress={true}
          rotateSpeed={2} // Adjust the rotate speed here
          panSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}

export default Golden;

// import React from "react";
// import * as THREE from "three";
// import { Canvas } from "@react-three/fiber";
// import { Leva, useControls } from "leva"; // Import leva modules
// import {
//   Torus,
//   Environment,
//   OrbitControls,
//   AccumulativeShadows,
//   RandomizedLight,
// } from "@react-three/drei";
// import { FlakesTexture } from "three-stdlib";

// function Golden() {
//   // Use leva to define the controls
//   const controls = useControls({
//     // MeshStandardMaterial properties
//     color: "orange",
//     roughness: { value: 0, min: 0, max: 1 },
//     metalness: { value: 0.8, min: 0, max: 1 },
//     envMapIntensity: { value: 1.7, min: 0, max: 5 },
//     normalScaleX: { value: 0.1, min: 0, max: 1 },
//     normalScaleY: { value: 0.1, min: 0, max: 1 },

//     // AccumulativeShadows properties
//     temporal: true,
//     frames: { value: 100, min: 0, max: 200 },
//     colorBlend: { value: 2, min: 0, max: 10 },
//     toneMapped: true,
//     alphaTest: { value: 0.9, min: 0, max: 1 },
//     opacity: { value: 2, min: 0, max: 5 },
//     scale: { value: 12, min: 0, max: 20 },

//     // RandomizedLight properties
//     amount: { value: 8, min: 0, max: 20 },
//     radius: { value: 4, min: 0, max: 10 },
//     ambient: { value: 0.5, min: 0, max: 1 },
//     intensity: { value: 1, min: 0, max: 5 },
//     positionX: { value: 5, min: -10, max: 10 },
//     positionY: { value: 5, min: -10, max: 10 },
//     positionZ: { value: -10, min: -20, max: 0 },
//     bias: { value: 0.001, min: 0, max: 0.01 },

//     // Camera properties
//     cameraPositionX: { value: 0, min: -10, max: 10 },
//     cameraPositionY: { value: 0.5, min: -5, max: 5 },
//     cameraPositionZ: { value: 5, min: 0, max: 20 },
//     cameraFov: { value: 45, min: 10, max: 100 },
//   });

//   const normalMapTexture = new THREE.CanvasTexture(
//     new FlakesTexture(),
//     THREE.UVMapping,
//     THREE.RepeatWrapping,
//     THREE.RepeatWrapping
//   );
//   normalMapTexture.repeat.set(40, 40);

//   return (
//     <div style={{ height: "100vh" }}>
//       <Canvas
//         camera={{
//           position: [
//             controls.cameraPositionX,
//             controls.cameraPositionY,
//             controls.cameraPositionZ,
//           ],
//           fov: controls.cameraFov,
//         }}
//       >
//         <ambientLight intensity={controls.ambientLightIntensity} />
//         <pointLight
//           position={[
//             controls.pointLightX,
//             controls.pointLightY,
//             controls.pointLightZ,
//           ]}
//         />
//         <Torus args={[0.7, 0.15, 64, 64]} rotation-x={Math.PI}>
//           <meshStandardMaterial
//             color={controls.color}
//             roughness={controls.roughness}
//             metalness={controls.metalness}
//             envMapIntensity={controls.envMapIntensity}
//             normalScale={[controls.normalScaleX, controls.normalScaleY]}
//             normalMap={normalMapTexture}
//           />
//         </Torus>
//         <AccumulativeShadows
//           temporal={controls.temporal}
//           frames={controls.frames}
//           color={controls.accumulativeShadowsColor}
//           colorBlend={controls.colorBlend}
//           toneMapped={controls.toneMapped}
//           alphaTest={controls.alphaTest}
//           opacity={controls.opacity}
//           scale={controls.scale}
//         >
//           <RandomizedLight
//             amount={controls.amount}
//             radius={controls.radius}
//             ambient={controls.ambient}
//             intensity={controls.intensity}
//             position={[
//               controls.positionX,
//               controls.positionY,
//               controls.positionZ,
//             ]}
//             bias={controls.bias}
//           />
//         </AccumulativeShadows>
//         <Environment preset="city" />
//         <OrbitControls
//           minPolarAngle={Math.PI / 2.5}
//           maxPolarAngle={Math.PI / 2.5}
//         />
//       </Canvas>
//       {/* Add LevaPanel to control the properties */}
//       <Leva />
//     </div>
//   );
// }

// export default Golden;
