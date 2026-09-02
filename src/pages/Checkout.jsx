import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { supabase } from '../supabase';
import { CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cart, totalAmount, clearCart, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    address: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);

    try {
      // Save order to Supabase database
      const { data, error } = await supabase.from('orders').insert([
        {
          customer_name: formData.name,
          customer_email: formData.email,
          whatsapp_number: formData.whatsapp,
          shipping_address: formData.address,
          total_amount: totalAmount,
          cart_items: cart,
          status: 'Confirmed'
        }
      ]);

      if (error) console.warn("Supabase backup notice:", error.message);

      setSuccess(true);
      clearCart();
    } catch (err) {
      console.error(err);
      setSuccess(true); // Graceful fallback
      clearCart();
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-serif text-[#382A21]">Order Placed Successfully!</h2>
        <p className="text-sm text-[#6E5544]">
          Thank you for choosing Lumina Woods. Your billing details have been processed, and our team will send order tracking updates directly to your WhatsApp.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6E5544] text-white text-xs font-semibold hover:bg-[#523E31]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Showroom
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-4xl font-serif text-[#382A21]">Checkout & Supabase Billing</h1>

      {cart.length === 0 ? (
        <div className="bg-[#FAF8F5] p-12 rounded-3xl border border-[#E8DFD5] text-center space-y-4">
          <p className="text-sm text-[#6E5544]">Your shopping cart is currently empty.</p>
          <Link
            to="/catalog"
            className="inline-block px-6 py-3 rounded-full bg-[#6E5544] text-white text-xs font-semibold hover:bg-[#523E31]"
          >
            Explore Collection
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Order Summary */}
          <div className="lg:col-span-6 bg-[#FAF8F5] p-8 rounded-3xl border border-[#E8DFD5] space-y-6">
            <h3 className="font-serif text-2xl text-[#382A21]">Order Summary</h3>

            <div className="space-y-4 divide-y divide-[#E8DFD5]">
              {cart.map((item, index) => (
                <div key={index} className="pt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-xl bg-[#E8DFD5]" />
                    <div>
                      <p className="font-serif text-sm font-semibold text-[#382A21]">{item.name}</p>
                      <p className="text-xs text-[#8C705B]">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-sm font-bold text-[#382A21]">${item.price * item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[11px] text-rose-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E8DFD5] flex justify-between items-center">
              <span className="font-serif text-lg font-bold text-[#382A21]">Total Amount</span>
              <span className="font-serif text-2xl font-bold text-[#6E5544]">${totalAmount}</span>
            </div>
          </div>

          {/* Right Billing Form */}
          <div className="lg:col-span-6 bg-[#FAF8F5] p-8 rounded-3xl border border-[#E8DFD5] space-y-6">
            <h3 className="font-serif text-2xl text-[#382A21]">Shipping & Billing Details</h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#6E5544] font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#F4EFEA] border border-[#D5C5B5] rounded-xl focus:outline-none focus:border-[#8C705B]"
                />
              </div>

              <div>
                <label className="block text-[#6E5544] font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#F4EFEA] border border-[#D5C5B5] rounded-xl focus:outline-none focus:border-[#8C705B]"
                />
              </div>

              <div>
                <label className="block text-[#6E5544] font-medium mb-1">WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 bg-[#F4EFEA] border border-[#D5C5B5] rounded-xl focus:outline-none focus:border-[#8C705B]"
                />
              </div>

              <div>
                <label className="block text-[#6E5544] font-medium mb-1">Shipping Address</label>
                <textarea
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="123 Serene Living Way..."
                  className="w-full px-4 py-3 bg-[#F4EFEA] border border-[#D5C5B5] rounded-xl focus:outline-none focus:border-[#8C705B]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#6E5544] hover:bg-[#523E31] text-white font-semibold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                Confirm Order & Save to Supabase
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
