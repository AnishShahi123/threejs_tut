import { useGLTF } from "@react-three/drei";

import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Sky({ isRotating }) {
  const ref = useRef();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (isRotating) {
      ref.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh ref={ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
