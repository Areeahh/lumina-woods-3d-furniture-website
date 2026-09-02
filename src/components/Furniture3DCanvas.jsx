import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

function ArmchairModel({ color }) {
  const fabricHex = color || "#BFA894";
  const woodHex = "#523E32";

  return (
    <group position={[0, -0.5, 0]}>
      {/* Main Seat Base Cushion */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.3, 1.4]} />
        <meshStandardMaterial color={fabricHex} roughness={0.6} />
      </mesh>

      {/* Backrest Cushion */}
      <mesh position={[0, 1.0, -0.55]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 1.0, 0.3]} />
        <meshStandardMaterial color={fabricHex} roughness={0.6} />
      </mesh>

      {/* Left Armrest */}
      <mesh position={[-0.85, 0.7, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 0.6, 1.4]} />
        <meshStandardMaterial color={fabricHex} roughness={0.6} />
      </mesh>

      {/* Right Armrest */}
      <mesh position={[0.85, 0.7, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 0.6, 1.4]} />
        <meshStandardMaterial color={fabricHex} roughness={0.6} />
      </mesh>

      {/* Wooden Legs */}
      <mesh position={[-0.7, 0.15, -0.5]} castShadow>
        <cylinderGeometry args={[0.05, 0.03, 0.5]} />
        <meshStandardMaterial color={woodHex} roughness={0.4} />
      </mesh>
      <mesh position={[0.7, 0.15, -0.5]} castShadow>
        <cylinderGeometry args={[0.05, 0.03, 0.5]} />
        <meshStandardMaterial color={woodHex} roughness={0.4} />
      </mesh>
      <mesh position={[-0.7, 0.15, 0.5]} castShadow>
        <cylinderGeometry args={[0.05, 0.03, 0.5]} />
        <meshStandardMaterial color={woodHex} roughness={0.4} />
      </mesh>
      <mesh position={[0.7, 0.15, 0.5]} castShadow>
        <cylinderGeometry args={[0.05, 0.03, 0.5]} />
        <meshStandardMaterial color={woodHex} roughness={0.4} />
      </mesh>
    </group>
  );
}

export default function Furniture3DCanvas({ currentColor }) {
  return (
    <div className="w-full h-96 bg-[#E8DFD5]/40 rounded-2xl overflow-hidden shadow-inner border border-[#E8DFD5]">
      <Canvas shadows camera={{ position: [2.5, 2, 3], fov: 45 }}>
        <Stage environment="city" intensity={0.6} adjustCamera={false}>
          <ArmchairModel color={currentColor} />
        </Stage>
        <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={true} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}
