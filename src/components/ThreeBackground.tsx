
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position, geometry = 'sphere' }: { position: [number, number, number], geometry?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  const GeometryComponent = () => {
    switch (geometry) {
      case 'box':
        return <Box ref={meshRef} position={position} args={[1, 1, 1]} />;
      case 'torus':
        return <Torus ref={meshRef} position={position} args={[1, 0.4, 16, 100]} />;
      default:
        return <Sphere ref={meshRef} position={position} args={[0.8]} />;
    }
  };

  return (
    <mesh>
      <GeometryComponent />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.6}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
        
        <FloatingGeometry position={[-4, 2, -5]} geometry="sphere" />
        <FloatingGeometry position={[4, -2, -3]} geometry="box" />
        <FloatingGeometry position={[0, 3, -8]} geometry="torus" />
        <FloatingGeometry position={[-2, -3, -6]} geometry="sphere" />
        <FloatingGeometry position={[3, 1, -4]} geometry="box" />
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
