import React, { useState } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  ZapparCamera,
  InstantTracker,
  ZapparCanvas,
} from "@zappar/zappar-react-three-fiber";
import { Physics } from "@react-three/cannon";
import { Suspense } from "react";
import { Car } from "./Car";
import { Ground } from "./Ground";
import { Track } from "./Track";

export function Scene() {
  let [placementMode, setPlacementMode] = useState(true);
  return (
    <Suspense fallback={null}>
      {/* <ZapparCanvas> */}
      <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
        <ZapparCamera />
        {/* <InstantTracker placementMode={true} placementCameraOffset={[0, 0, -5]}> */}
        {/* Your 3D content */}
        {/* <Environment
          files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
          background={"both"}
        /> */}
        <Track />
        <Ground />
        <Car />
        {/* </InstantTracker> */}
        <OrbitControls target={[-2.64, -0.71, 0.03]} />
        <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      </Physics>
      {/* </ZapparCanvas> */}
      {/* <div
        id="zappar-placement-ui"
        onClick={() => {
          setPlacementMode((currentPlacementMode) => !currentPlacementMode);
        }}
        onKeyDown={() => {
          setPlacementMode((currentPlacementMode) => !currentPlacementMode);
        }}
        role="button"
        tabIndex={0}
      >
        Tap here to
        {placementMode ? " place " : " pick up "}
        the object
      </div> */}
    </Suspense>
  );
}
