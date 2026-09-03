import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: "p1",
    name: "Nordic Taupe Lounge Armchair",
    price: 480,
    category: "Chairs",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p2",
    name: "Curved Off-White Bouclé Sofa",
    price: 1450,
    category: "Sofas",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p3",
    name: "Modern Minimalist Cream Sofa",
    price: 1280,
    category: "Sofas",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p4",
    name: "Minimalist Linen Accent Chair",
    price: 520,
    category: "Chairs",
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p5",
    name: "Velvet Modular Low-Profile Sofa",
    price: 1680,
    category: "Sofas",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p6",
    name: "Organic Oval Travertine Dining Table",
    price: 920,
    category: "Tables",
    img: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Catalog() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#382A21] mb-2">Furniture Collection</h2>
      <p className="text-xs sm:text-sm text-[#8C705B] mb-8">Handcrafted luxury pieces designed for modern living spaces.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <img src={p.img} alt={p.name} className="w-full h-52 sm:h-56 object-cover" />
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-bold text-[#A68B74] uppercase tracking-wider">{p.category}</span>
                <h3 className="font-serif font-bold text-[#382A21] text-base leading-snug">{p.name}</h3>
                <p className="text-lg font-semibold text-[#382A21]">${p.price}</p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => addToCart({ id: p.id, name: p.name, price: p.price })}
                className="w-full bg-[#382A21] text-white py-2.5 rounded-lg text-xs font-medium hover:bg-[#523E32] transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
