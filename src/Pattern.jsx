import { Canvas, extend } from "@react-three/fiber";
import React, { useCallback, useRef } from "react";
import * as THREE from "three";
import Scene from "./Scene";
import { Effects } from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";

extend({ UnrealBloomPass, OutputPass });

function Pattern() {
  const mouse = useRef([0, 0]);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );

  return (
    <div onMouseMove={onMouseMove} style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        pixelratio={window.devicePixelRatio}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onCreated={({ gl, size, camera }) => {
          if (size.width < 600) {
            camera.position.z = 45;
          }
          gl.setClearColor(new THREE.Color("#020207"));
        }}
      >
        {/* <color attach="background" args={["white"]} /> */}
        <Scene mouse={mouse} />
        <Effects disableGamma>
          {/* threshhold has to be 1, so nothing at all gets bloom by default */}
          <UnrealBloomPass threshold={1} strength={0.4} radius={0.0} />
          <outputPass args={[THREE.ACESFilmicToneMapping]} />
        </Effects>
      </Canvas>
    </div>
  );
}

export default Pattern;
