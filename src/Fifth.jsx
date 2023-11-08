// import React, { useRef, useState } from "react";
// import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
// import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";

// extend({ TrackballControls });

// function Box(props) {
//   const meshRef = useRef();
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);

//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={() => setActive(!active)}
//       onPointerOver={() => setHover(true)}
//       onPointerOut={() => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// }

// function Fifth() {
//   return (
//     <div style={{ height: "100vh" }}>
//       <Canvas shadows camera={{ position: [0, 0.5, 10], fov: 45 }}>
//         <color attach="background" args={["#f0f0f0"]} />
//         <ambientLight intensity={0.5} />
//         <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
//         <pointLight position={[-10, -10, -10]} />
//         <Box position={[-1.2, 0, 0]} />
//         <TrackballControls />

//         <Box position={[1.2, 0, 0]} />
//       </Canvas>
//     </div>
//   );
// }

// export default Fifth;

import React, { useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";

extend({ TrackballControls });

function Box(props) {
  const meshRef = useRef();

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Controls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    controlsRef.current.update();
  });

  return <trackballControls args={[camera, gl.domElement]} ref={controlsRef}  panSpeed={0.8} rotateSpeed={5.0}  />;
}

function Fifth() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Controls />
      </Canvas>
    </div>
  );
}

export default Fifth;
