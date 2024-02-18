import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { PolygonalShape } from './Shapes';

const ModelViewer = () => {
  return (
    <div className="w-full h-full z-10">
      <Canvas
        frameloop="always"
        shadows
        camera={{ position: [20, 20, 20], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={<CanvasLoader />}>
          <PolygonalShape /> {/* Utilize the PolygonalShape component */}
        </Suspense>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.75}
          rotateSpeed={0.5}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
