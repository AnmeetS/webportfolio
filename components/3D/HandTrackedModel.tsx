import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { PolygonalShape } from './Shapes';


interface HandTrackedModelMethods {
  updateModel: (minAzimuthAngle: number, maxAzimuthAngle: number, maxPolarAngle: number, minPolarAngle: number) => void;
}

const HandTrackedModel = forwardRef<HandTrackedModelMethods, {}>((props, ref) => {
  const orbitControlsRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    updateModel: (minAzimuthAngle, maxAzimuthAngle, maxPolarAngle, minPolarAngle) => {
      if (orbitControlsRef.current) {
        orbitControlsRef.current.minAzimuthAngle = minAzimuthAngle;
        orbitControlsRef.current.maxAzimuthAngle = maxAzimuthAngle;
        orbitControlsRef.current.maxPolarAngle = maxPolarAngle;
        orbitControlsRef.current.minPolarAngle = minPolarAngle;
        orbitControlsRef.current.update();
      }
    },
  }));

  return (
    <div className="w-full h-full z-10">
      <Canvas
        frameloop="always"
        shadows
        camera={{ position: [20, 20, 20], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={<CanvasLoader />}>
          <PolygonalShape />
        </Suspense>
        <OrbitControls
          ref={orbitControlsRef}
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0}
          rotateSpeed={0.75}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2} 
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
        />
      </Canvas>
    </div>
  );
});

HandTrackedModel.displayName = 'HandTrackedModel';

export default HandTrackedModel;
