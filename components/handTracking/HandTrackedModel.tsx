import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../3D/CanvasLoader";
import { PolygonalShape } from "../3D/Shapes";

interface HandTrackedModelMethods {
  updateModel: (
    minAzimuthAngle: number,
    maxAzimuthAngle: number,
    maxPolarAngle: number,
    minPolarAngle: number
  ) => void;
  updatePosition: (x: number, y: number) => void;
}

const HandTrackedModel = forwardRef<HandTrackedModelMethods, {}>(
  (props, ref) => {
    const orbitControlsRef = useRef<any>(null);
    const modelDivRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      updateModel: (
        minAzimuthAngle,
        maxAzimuthAngle,
        maxPolarAngle,
        minPolarAngle
      ) => {
        if (orbitControlsRef.current) {
          orbitControlsRef.current.minAzimuthAngle = minAzimuthAngle;
          orbitControlsRef.current.maxAzimuthAngle = maxAzimuthAngle;
          orbitControlsRef.current.maxPolarAngle = maxPolarAngle;
          orbitControlsRef.current.minPolarAngle = minPolarAngle;
          orbitControlsRef.current.update();
        }
      },
      updatePosition: (x, y) => {
        if (modelDivRef.current) {
          modelDivRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      },
    }));

    return (
      <div
        className="w-full h-full"
        ref={modelDivRef}
      >
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
  }
);

HandTrackedModel.displayName = "HandTrackedModel";

export default HandTrackedModel;
