import React, { useRef, useState } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useThree,
  useLoader,
} from "@react-three/fiber";
import {
  useGLTF,
  Caustics,
  CubeCamera,
  // OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
  MeshRefractionMaterial,
} from "@react-three/drei";
import { useControls } from "leva";
import { RGBELoader } from "three-stdlib";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";

extend({ TrackballControls });

function Box(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (meshRef.current.rotation.x += delta * 0.5));

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
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Controls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    controlsRef.current.update();
  });

  return (
    <trackballControls
      args={[camera, gl.domElement]}
      ref={controlsRef}
      panSpeed={0.8}
      rotateSpeed={5.0}
    />
  );
}

function Diamond(props) {
  const ref = useRef();
  const { nodes } = useGLTF("/dflat.glb");
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );
  // Optional config
  const config = useControls({
    bounces: { value: 3, min: 0, max: 8, step: 1 },
    aberrationStrength: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
    ior: { value: 2.75, min: 0, max: 10 },
    fresnel: { value: 1, min: 0, max: 1 },
    color: "#a55fc1",
    fastChroma: true,
  });
  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        <Caustics
          backfaces
          color={config.color}
          position={[0, -0.5, 0]}
          lightSource={[5, 5, -10]}
          worldRadius={0.1}
          ior={1.8}
          backfaceIor={1.1}
          intensity={0.1}
        >
          <mesh
            castShadow
            ref={ref}
            geometry={nodes.Diamond_1_0.geometry}
            {...props}
          >
            <MeshRefractionMaterial
              envMap={texture}
              {...config}
              toneMapped={false}
            />
          </mesh>
        </Caustics>
      )}
    </CubeCamera>
  );
}

function First() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas shadows camera={{ position: [-5, 0.5, 5], fov: 45 }}>
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={0.1}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        /> */}
        {/* <Box position={[-1.2, 0, 0]} /> */}
        <Diamond rotation={[3.1, 0, 0]} position={[0, 0.175 + 0.5, 0]} />
        {/* <Box position={[1.2, 0, 0]} /> */}

        <AccumulativeShadows
          temporal
          frames={100}
          color="orange"
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.8}
          opacity={1}
          scale={12}
          position={[0, -0.5, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={10}
            ambient={0.5}
            intensity={1}
            position={[5, 5, -10]}
            bias={0.001}
          />
        </AccumulativeShadows>
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
        </EffectComposer>
        <Controls />
      </Canvas>
    </div>
  );
}

export default First;
