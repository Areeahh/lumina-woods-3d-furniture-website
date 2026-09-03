import React, { useEffect, useRef } from "react";

export default function Furniture3DCanvas({ currentColor }) {
  const modelRef = useRef(null);

  useEffect(() => {
    const modelViewer = modelRef.current;
    if (!modelViewer) return;

    // Helper to convert hex string to normalized RGB array [0..1]
    const hexToRgbRatio = (hex) => {
      const cleanHex = hex.replace("#", "");
      const num = parseInt(cleanHex, 16);
      return [
        ((num >> 16) & 255) / 255,
        ((num >> 8) & 255) / 255,
        (num & 255) / 255,
        1.0
      ];
    };

    const updateMaterialColor = () => {
      if (modelViewer.model && modelViewer.model.materials.length > 0) {
        // Target primary fabric material on the chair model
        const material = modelViewer.model.materials[0];
        if (material && material.pbrMetallicRoughness) {
          const colorRgb = hexToRgbRatio(currentColor || "#BFA894");
          material.pbrMetallicRoughness.setBaseColorFactor(colorRgb);
        }
      }
    };

    if (modelViewer.loaded) {
      updateMaterialColor();
    } else {
      modelViewer.addEventListener("load", updateMaterialColor, { once: true });
    }
  }, [currentColor]);

  return (
    <div className="w-full h-72 sm:h-96 bg-[#E8DFD5]/30 rounded-2xl overflow-hidden shadow-inner border border-[#E8DFD5] relative flex items-center justify-center">
      <model-viewer
        ref={modelRef}
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
          Loading 3D Studio...
        </div>
      </model-viewer>
    </div>
  );
}
