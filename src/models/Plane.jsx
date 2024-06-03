import { useAnimations, useGLTF } from "@react-three/drei";

import isPlaneScene from "../assets/3d/plane.glb";
import { useEffect, useRef } from "react";

export default function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(isPlaneScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [isRotating, actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
