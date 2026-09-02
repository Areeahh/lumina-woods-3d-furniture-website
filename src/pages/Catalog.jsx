import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from '../supabase';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Check } from 'lucide-react';

export default function Catalog() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('All');
  const [addedId, setAddedId] = useState(null);

  const categories = ['All', 'Chairs', 'Sofas', 'Tables', 'Decor'];

  const filteredProducts = filter === 'All'
    ? INITIAL_PRODUCTS
    : INITIAL_PRODUCTS.filter((p) => p.category === filter);

  const handleAdd = (product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8DFD5]">
        <div>
          <h1 className="text-4xl font-serif text-[#382A21]">Furniture Collection</h1>
          <p className="text-sm text-[#6E5544] mt-1">
            Handcrafted pieces curated in natural taupe, oat, and beige earth tones.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === cat
                  ? 'bg-[#6E5544] text-white shadow-md'
                  : 'bg-[#E8DFD5] text-[#523E31] hover:bg-[#D5C5B5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-[#FAF8F5] rounded-2xl border border-[#E8DFD5] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden h-64 bg-[#E8DFD5]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#6E5544] uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-lg text-[#382A21] font-semibold leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-[#8C705B] mt-1 line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#E8DFD5]">
                <span className="font-serif text-xl font-bold text-[#382A21]">
                  ${product.price}
                </span>

                <button
                  onClick={() => handleAdd(product)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    addedId === product.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#6E5544] hover:bg-[#523E31] text-white'
                  }`}
                >
                  {addedId === product.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
