import React, { useState } from "react";
import Furniture3DCanvas from "../components/Furniture3DCanvas";
import { useCart } from "../context/CartContext";

const swatches = [
  { name: "Warm Taupe", hex: "#BFA894" },
  { name: "Warm Cream", hex: "#E8DFD5" },
  { name: "Terracotta", hex: "#9E5A47" },
  { name: "Charcoal", hex: "#3A3835" },
  { name: "Sage Green", hex: "#7A8B7B" },
  { name: "Velvet Navy", hex: "#2B3A4A" },
];

export default function Configurator() {
  const [selectedColor, setSelectedColor] = useState(swatches[0]);
  const { addToCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif font-bold text-[#382A21] mb-8">3D Customization Studio</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Furniture3DCanvas currentColor={selectedColor.hex} />
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] space-y-6">
          <h3 className="font-serif text-lg font-bold">Nordic Lounge Armchair</h3>
          <p className="text-2xl font-semibold text-[#382A21]">$480</p>
          <div>
            <label className="text-xs font-semibold text-[#8C705B] tracking-wider uppercase">FABRIC COLOR</label>
            <div className="flex flex-wrap gap-3 mt-3">
              {swatches.map((s) => (
                <button
                  key={s.hex}
                  onClick={() => setSelectedColor(s)}
                  title={s.name}
                  className={`w-9 h-9 rounded-full border-2 transition shadow-sm ${
                    selectedColor.hex === s.hex ? "border-[#382A21] scale-110 ring-2 ring-[#A68B74]/50" : "border-transparent hover:scale-105"
                  }`}
                  style={{ backgroundColor: s.hex }}
                />
              ))}
            </div>
            <p className="text-xs text-[#8C705B] mt-3 font-medium">Selected: <span className="text-[#382A21] font-bold">{selectedColor.name}</span></p>
          </div>
          <button
            onClick={() => addToCart({ id: "armchair-3d", name: "Nordic Lounge Armchair", price: 480, color: selectedColor.name })}
            className="w-full bg-[#382A21] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#523E32] transition"
          >
            Add Custom Piece to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
