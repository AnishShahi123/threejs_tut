import { useAnimations, useGLTF } from "@react-three/drei";

import isBirdScene from "../assets/3d/bird.glb";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Bird() {
  const ref = useRef();
  const { scene, animations } = useGLTF(isBirdScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (ref.current.position.x > camera.position.x + 10) {
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x < camera.position.x - 10) {
      ref.current.rotation.y = 0;
    }

    if (ref.current.rotation.y === 0) {
      ref.current.position.x += 0.01;
      ref.current.position.z -= 0.01;
    } else {
      ref.current.position.x -= 0.01;
      ref.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
