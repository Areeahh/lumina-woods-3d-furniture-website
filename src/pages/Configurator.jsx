import React, { useState } from 'react';
import Furniture3DCanvas from '../components/Furniture3DCanvas';
import { useCart } from '../context/CartContext';
import { Sparkles, Check, ShoppingBag } from 'lucide-react';

export default function Configurator() {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('#BFA894'); // Warm Taupe / Cream
  const [selectedMaterial, setSelectedMaterial] = useState('Boho Velvet');
  const [added, setAdded] = useState(false);

  const colors = [
    { name: 'Warm Cream', hex: '#F4EFEA' },
    { name: 'Warm Taupe', hex: '#BFA894' },
    { name: 'Muted Terracotta', hex: '#8C705B' },
    { name: 'Charcoal Brown', hex: '#382A21' },
  ];

  const materials = ['Boho Velvet', 'Organic Linen', 'Textured Bouclé'];

  const customChairProduct = {
    id: 'mid-century-armchair-custom',
    name: `Mid-Century Modern Chair (${materials.find(m => m === selectedMaterial)})`,
    category: '3D Custom Studio',
    price: 580,
    color: selectedColor,
    material: selectedMaterial,
    description: 'Custom mid-century modern wooden armchair with tufted upholstery.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
  };

  const handleAddToCart = () => {
    addToCart(customChairProduct, selectedColor, selectedMaterial);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD5] text-[#6E5544] text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive 3D Studio
        </div>
        <h1 className="text-4xl font-serif text-[#382A21]">3D Chair Studio</h1>
        <p className="text-sm text-[#6E5544]">
          Inspect the mid-century modern armchair in 360° and select custom upholstery shaders before ordering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Left: 3D Interactive Mid-Century Chair Viewport */}
        <div className="lg:col-span-7 h-[500px] w-full">
          <Furniture3DCanvas color={selectedColor} />
        </div>
        {/* Right: Customization Controls */}
        <div className="lg:col-span-5 bg-[#FAF8F5] p-8 rounded-3xl border border-[#E8DFD5] space-y-6 shadow-sm">
          <div>
            <h3 className="font-serif text-2xl text-[#382A21]">Mid-Century Tufted Armchair</h3>
            <p className="text-xs text-[#8C705B] mt-1">Model #MCM-2026 • Solid Walnut Frame</p>
          </div>

          {/* Color Selection */}
          <div className="space-y-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#6E5544]">
              Upholstery Shade
            </label>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setSelectedColor(c.hex)}
                  className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor === c.hex ? 'border-[#382A21] scale-110 shadow-md' : 'border-transparent'
                    }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                >
                  {selectedColor === c.hex && <Check className="w-4 h-4 text-[#382A21] drop-shadow-sm" />}
                </button>
              ))}
            </div>
          </div>

          {/* Material Selection */}
          <div className="space-y-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#6E5544]">
              Fabric Upholstery
            </label>
            <div className="grid grid-cols-3 gap-2">
              {materials.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMaterial(m)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-all border ${selectedMaterial === m
                      ? 'bg-[#6E5544] text-white border-[#6E5544]'
                      : 'bg-[#E8DFD5]/50 text-[#382A21] border-[#D5C5B5] hover:bg-[#E8DFD5]'
                    }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Price & Action */}
          <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between">
            <div>
              <p className="text-xs text-[#8C705B]">Price</p>
              <p className="font-serif text-3xl font-bold text-[#382A21]">$580.00</p>
            </div>

            <button
              onClick={handleAddToCart}
              className={`px-6 py-3.5 rounded-2xl text-xs font-semibold flex items-center gap-2 shadow-lg transition-all ${added ? 'bg-emerald-600 text-white' : 'bg-[#6E5544] hover:bg-[#523E31] text-white'
                }`}
            >
              {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}