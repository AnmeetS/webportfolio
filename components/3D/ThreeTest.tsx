import {Suspense, useEffect, useState} from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from "@/components/3D/CanvasLoader";

const ThreeTest = () => {
const shape = useGLTF("/assets/models/oldkeyboard/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={shape.scene} />
    </mesh>
  );
};

const keyboardCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ThreeTest />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ThreeTest;
