import React from "react";

export default function Furniture3DCanvas() {
  return (
    <div className="w-full h-72 sm:h-96 bg-[#E8DFD5]/30 rounded-2xl overflow-hidden shadow-inner border border-[#E8DFD5] relative flex items-center justify-center">
      <model-viewer
        src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb"
        alt="A photorealistic 3D Nordic Velvet Armchair"
        auto-rotate
        camera-controls
        shadow-intensity="1.2"
        shadow-softness="0.8"
        exposure="1.1"
        environment-image="neutral"
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ width: "100%", height: "100%" }}
      >
        <div slot="poster" className="flex items-center justify-center h-full text-xs text-[#8C705B]">
          Loading Photorealistic 3D Model...
        </div>
      </model-viewer>
    </div>
  );
}
