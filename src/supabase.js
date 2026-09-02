import { createClient } from '@supabase/supabase-js';

// Environment variables or fallback demo state
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo-project.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Fallback Mock Furniture Data matching the warm neutral image aesthetic
export const INITIAL_PRODUCTS = [
  {
    id: '1',
    name: 'Nordic Taupe Lounge Armchair',
    category: 'Chairs',
    price: 480,
    color: '#BFA894',
    material: 'Boho Velvet',
    description: 'Ergonomically contoured lounge chair in warm taupe upholstery with solid walnut legs.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Minimalist Sand Linen Sofa',
    category: 'Sofas',
    price: 1250,
    color: '#E8DFD5',
    material: 'Organic Linen',
    description: 'Three-seater plush modular sofa designed for serene, earth-toned living spaces.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Sculptural Cream Coffee Table',
    category: 'Tables',
    price: 340,
    color: '#FAF8F5',
    material: 'Matte Ceramic',
    description: 'Organic curved oval coffee table with a soft matte ceramic finish.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Woven Jute Pouf Ottoman',
    category: 'Decor',
    price: 160,
    color: '#D5C5B5',
    material: 'Natural Fiber',
    description: 'Hand-braided bohemian floor cushion woven from natural braided jute fibers.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
  }
];
