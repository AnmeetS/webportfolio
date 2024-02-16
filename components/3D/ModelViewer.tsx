import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const PolygonalShape = () => {
  return (
    <>
      {/* Wireframe */}
      <mesh>
        <icosahedronGeometry args={[5, 1]} />{" "}
        <meshBasicMaterial color="#9e87c5" wireframe />
      </mesh>
      {/* Solid Shape */}

      <mesh>
        <icosahedronGeometry args={[5, 1]} />
        <meshStandardMaterial color="#7c7980" />
      </mesh>

      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars />
    </>
  );
};

const ModelViewer = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 20, 20], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={<CanvasLoader />}>
          <PolygonalShape />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
