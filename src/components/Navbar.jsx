import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Box, Compass, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="border-b border-[#E8DFD5] bg-[#FAF8F5]/90 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg sm:text-xl font-serif font-bold tracking-wider text-[#382A21]">
          LUMINA WOODS
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#6B5644]">
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

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-4">
          <Link to="/checkout" className="relative text-[#382A21]">
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#A68B74] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#382A21]">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-2 flex flex-col space-y-3 text-sm font-medium border-t border-[#E8DFD5] mt-3 text-[#382A21]">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-2 px-2 hover:bg-[#E8DFD5]/40 rounded">Showroom</Link>
          <Link to="/catalog" onClick={() => setMobileMenuOpen(false)} className="py-2 px-2 hover:bg-[#E8DFD5]/40 rounded">Catalog</Link>
          <Link to="/configurator" onClick={() => setMobileMenuOpen(false)} className="py-2 px-2 hover:bg-[#E8DFD5]/40 rounded">3D Studio</Link>
        </div>
      )}
    </nav>
  );
}
