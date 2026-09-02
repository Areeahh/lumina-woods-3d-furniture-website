import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: "p1",
    name: "Nordic Taupe Lounge Armchair",
    price: 480,
    category: "Chairs",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    fabrics: ["Warm Taupe", "Warm Cream", "Terracotta", "Charcoal"]
  },
  {
    id: "p2",
    name: "Curved Off-White Bouclé Sofa",
    price: 1450,
    category: "Sofas",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
    fabrics: ["Warm Cream", "Sage Green", "Velvet Navy"]
  },
  {
    id: "p3",
    name: "Sculptural Walnut Coffee Table",
    price: 380,
    category: "Tables",
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    fabrics: ["Natural Walnut", "Dark Ebony"]
  },
  {
    id: "p4",
    name: "Minimalist Linen Accent Chair",
    price: 520,
    category: "Chairs",
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
    fabrics: ["Sage Green", "Warm Cream", "Warm Taupe"]
  },
  {
    id: "p5",
    name: "Velvet Modular Low-Profile Sofa",
    price: 1680,
    category: "Sofas",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    fabrics: ["Velvet Navy", "Charcoal", "Terracotta"]
  },
  {
    id: "p6",
    name: "Organic Oval Travertine Dining Table",
    price: 920,
    category: "Tables",
    img: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80",
    fabrics: ["Beige Travertine", "Matte Ceramic"]
  }
];

export default function Catalog() {
  const { addToCart } = useCart();
  const [selectedFabrics, setSelectedFabrics] = useState({});

  const handleFabricChange = (productId, fabric) => {
    setSelectedFabrics((prev) => ({ ...prev, [productId]: fabric }));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif font-bold text-[#382A21] mb-2">Furniture Collection</h2>
      <p className="text-sm text-[#8C705B] mb-8">Select custom fabric variants before adding to your order.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => {
          const currentFabric = selectedFabrics[p.id] || p.fabrics[0];
          return (
            <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-sm hover:shadow-md transition">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-5 space-y-3">
                <span className="text-xs font-semibold text-[#A68B74] uppercase tracking-wider">{p.category}</span>
                <h3 className="font-serif font-bold text-[#382A21] text-base leading-snug">{p.name}</h3>
                <p className="text-lg font-semibold text-[#382A21]">${p.price}</p>

                {/* Fabric Selector Options */}
                <div>
                  <label className="text-xs text-[#8C705B] font-medium block mb-1">Fabric Option:</label>
                  <select
                    value={currentFabric}
                    onChange={(e) => handleFabricChange(p.id, e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-[#E8DFD5] bg-[#FAF8F5] text-[#382A21] outline-none"
                  >
                    {p.fabrics.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => addToCart({ id: `${p.id}-${currentFabric}`, name: p.name, price: p.price, color: currentFabric })}
                  className="w-full bg-[#382A21] text-white py-2.5 rounded-lg text-xs font-medium hover:bg-[#523E32] transition"
                >
                  Add to Cart ({currentFabric})
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
