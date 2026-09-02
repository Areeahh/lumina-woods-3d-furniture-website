import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

function Model({ color }) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1.5, 1, 1.5]} />
      <meshStandardMaterial color={color || "#BFA894"} roughness={0.3} metalness={0.1} />
    </mesh>
  );
}

export default function Furniture3DCanvas({ currentColor }) {
  return (
    <div className="w-full h-96 bg-[#E8DFD5]/40 rounded-2xl overflow-hidden shadow-inner border border-[#E8DFD5]">
      <Canvas shadows camera={{ position: [3, 2, 4], fov: 45 }}>
        <Stage environment="city" intensity={0.6}>
          <Model color={currentColor} />
        </Stage>
        <OrbitControls autoRotate enableZoom={true} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}
