import { OrbitControls, CameraShake } from "@react-three/drei";
import { Planet } from "./Planet";
import { Sparks } from "./Sparks";

const colors = {
  malevolentIllusion: [
    "#c06995",
    "#de77c7",
    "#df86df",
    "#d998ee",
    "#ceadf4",
    "#c6bff9",
  ],
  sunnyRainbow: [
    "#fbe555",
    "#fb9224",
    "#f45905",
    "#be8abf",
    "#ffeed0",
    "#feff89",
  ],
};

export default function Scene({ mouse }) {
  return (
    <>
      <OrbitControls
        makeDefault
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />
      <CameraShake
        yawFrequency={0.05 * 1}
        rollFrequency={0.2 * 1}
        pitchFrequency={0.1 * 1}
      />
      <pointLight distance={100} intensity={1} color="red" />

      <group scale={[1, 1, 1]}>
        {/* <SpaceShip /> */}

        <Planet distortionScale={5} />
        {/* <SpaceDust count={10000} mouse={mouse} /> */}
        {/* <Sparks count={20} mouse={mouse} colors={colors.malevolentIllusion} /> */}
        {/* {sparkStorm && ( */}
        {/* <SparkStorm count={500} mouse={mouse} colors={colors.sunnyRainbow} /> */}
        {/* )} */}
      </group>
    </>
  );
}
