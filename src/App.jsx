import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import SupportWidget from './components/SupportWidget';
import HomeShowroom from './pages/HomeShowroom';
import Catalog from './pages/Catalog';
import Configurator from './pages/Configurator';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col justify-between bg-[#F4EFEA]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomeShowroom />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/configurator" element={<Configurator />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          {/* Floating AI Stylist + WhatsApp Support Widget */}
          <SupportWidget />

          <footer className="border-t border-[#E8DFD5] py-8 text-center text-xs text-[#8C705B] bg-[#FAF8F5]">
            © 2026 LUMINA WOODS — 3D Living & Furniture
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}