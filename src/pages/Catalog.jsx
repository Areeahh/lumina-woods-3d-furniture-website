import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Nordic Taupe Lounge Armchair", price: 480, category: "Chairs", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Minimalist Sand Linen Sofa", price: 1250, category: "Sofas", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Sculptural Cream Coffee Table", price: 340, category: "Tables", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80" },
];

export default function Catalog() {
  const { addToCart } = useCart();
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif font-bold text-[#382A21] mb-8">Furniture Collection</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-xl overflow-hidden border border-[#E8DFD5]">
            <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="font-serif font-bold">{p.name}</h3>
              <p className="text-sm font-semibold">${p.price}</p>
              <button onClick={() => addToCart(p)} className="w-full bg-[#382A21] text-white py-2 rounded text-xs font-medium">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
