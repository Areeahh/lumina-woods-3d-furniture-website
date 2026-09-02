import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Sparkles, Truck } from 'lucide-react';
import Furniture3DCanvas from '../components/Furniture3DCanvas';

export default function HomeShowroom() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Typography */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD5] border border-[#D5C5B5] text-[#6E5544] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#8C705B]" />
            2026 Warm Earth Living Collection
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#382A21] leading-[1.15]">
            Serene Spaces, Crafted in Warm Harmony.
          </h1>

          <p className="text-[#6E5544] text-base leading-relaxed max-w-lg">
            Discover bespoke armchairs, organic linen sofas, and minimal wooden tables designed with neutral taupe tones to bring calm luxury to your home.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/catalog"
              className="px-7 py-3.5 rounded-full bg-[#6E5544] hover:bg-[#523E31] text-white font-medium text-sm flex items-center gap-2 shadow-lg transition-all hover:gap-3"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/configurator"
              className="px-7 py-3.5 rounded-full bg-[#E8DFD5] hover:bg-[#D5C5B5] text-[#382A21] font-medium text-sm border border-[#D5C5B5] transition-all"
            >
              Launch 3D Studio
            </Link>
          </div>

          {/* Social Proof Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8DFD5]">
            <div>
              <p className="font-serif text-2xl font-bold text-[#382A21]">100%</p>
              <p className="text-xs text-[#8C705B]">Organic Upholstery</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-[#382A21]">3D</p>
              <p className="text-xs text-[#8C705B]">Real-Time Shader</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-[#382A21]">Free</p>
              <p className="text-xs text-[#8C705B]">Global Shipping</p>
            </div>
          </div>
        </div>

        {/* Right Interactive 3D Canvas */}
        <div className="lg:col-span-6 h-[460px] w-full">
          <Furniture3DCanvas color="#BFA894" />
        </div>

      </section>

      {/* Aesthetic Showcase Grid Inspired by User Image */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl font-serif text-[#382A21]">Curated Warm Interiors</h2>
          <p className="text-sm text-[#6E5544]">
            Designed to fit cohesive neutral aesthetics with natural taupe wall art, woven ottomans, and ceramic decor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD5] shadow-sm space-y-4">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
              alt="Nordic Armchair"
              className="w-full h-64 object-cover rounded-xl"
            />
            <h3 className="font-serif text-lg text-[#382A21]">Warm Taupe Armchair</h3>
            <p className="text-xs text-[#8C705B]">Contoured backrest with solid walnut legs.</p>
          </div>

          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD5] shadow-sm space-y-4">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
              alt="Linen Modular Sofa"
              className="w-full h-64 object-cover rounded-xl"
            />
            <h3 className="font-serif text-lg text-[#382A21]">Sand Linen Modular Sofa</h3>
            <p className="text-xs text-[#8C705B]">Ultra-soft feather blend cushions in natural oat shade.</p>
          </div>

          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD5] shadow-sm space-y-4">
            <img
              src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
              alt="Sculptural Coffee Table"
              className="w-full h-64 object-cover rounded-xl"
            />
            <h3 className="font-serif text-lg text-[#382A21]">Ceramic Oval Table</h3>
            <p className="text-xs text-[#8C705B]">Matte ceramic finish with soft organic rounded edges.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
