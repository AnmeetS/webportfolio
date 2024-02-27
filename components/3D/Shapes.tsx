import React, { useMemo } from 'react';

export const shapes = [
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

export const PolygonalShape = () => {
  const shape = useMemo(() => shapes[Math.floor(Math.random() * shapes.length)], []);

  return (
    <>
      <mesh>
        {shape.geometry}
        <meshBasicMaterial color="#9e87c5" wireframe />
      </mesh>
      <mesh>
        {shape.geometry}
        <meshStandardMaterial color="#7c7980" />
      </mesh>
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};
