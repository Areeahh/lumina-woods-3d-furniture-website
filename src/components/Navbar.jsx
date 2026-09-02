import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Box, Compass } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="border-b border-[#E8DFD5] bg-[#FAF8F5]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-serif font-bold tracking-wider text-[#382A21]">
        LUMINA WOODS
      </Link>
      <div className="flex items-center space-x-8 text-sm font-medium text-[#6B5644]">
        <Link to="/" className="hover:text-[#382A21] flex items-center gap-2"><Compass size={16} /> Showroom</Link>
        <Link to="/catalog" className="hover:text-[#382A21]">Catalog</Link>
        <Link to="/configurator" className="hover:text-[#382A21] flex items-center gap-2"><Box size={16} /> 3D Studio</Link>
        <Link to="/checkout" className="relative hover:text-[#382A21]">
          <ShoppingBag size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#A68B74] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
