import React from "react";
import { Link } from "react-router-dom";
import Furniture3DCanvas from "../components/Furniture3DCanvas";

export default function HomeShowroom() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#A68B74] uppercase">3D Interactive Experience</span>
          <h1 className="text-4xl font-serif font-bold text-[#382A21] mt-2 mb-4">Sculptural Furniture for Modern Spaces</h1>
          <p className="text-[#6B5644] mb-6 leading-relaxed">Customize textures, colors, and materials in real-time with our 3D interactive studio.</p>
          <div className="flex gap-4">
            <Link to="/configurator" className="bg-[#382A21] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#523E32] transition">Open 3D Studio</Link>
            <Link to="/catalog" className="border border-[#382A21] text-[#382A21] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#382A21] hover:text-white transition">View Collection</Link>
          </div>
        </div>
        <Furniture3DCanvas currentColor="#BFA894" />
      </div>
    </div>
  );
}
