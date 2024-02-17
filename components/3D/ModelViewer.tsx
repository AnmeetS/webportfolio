import React, { useMemo } from 'react';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const shapes = [
  {
    geometry: <tetrahedronGeometry args={[5, 1]} />,
    name: 'Tetrahedron',
  },
  {
    geometry: <octahedronGeometry args={[5, 0]} />,
    name: 'Octahedron',
  },
  {
    geometry: <dodecahedronGeometry args={[5, 0]} />,
    name: 'Dodecahedron',
  },
  {
    geometry: <icosahedronGeometry args={[5, 1]} />,
    name: 'Icosahedron',
  },
];

const PolygonalShape = () => {
  const shape = useMemo(() => shapes[Math.floor(Math.random() * shapes.length)], []);

  return (
    <>
      {/* Wireframe */}
      <mesh>
        {shape.geometry}
        <meshBasicMaterial color="#9e87c5" wireframe />
      </mesh>
      {/* Solid Shape */}
      <mesh>
        {shape.geometry}
        <meshStandardMaterial color="#7c7980" />
      </mesh>
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};

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
          <PolygonalShape />
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