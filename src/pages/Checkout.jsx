import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

export default function Checkout() {
  const { cart, totalAmount, removeFromCart, clearCart } = useCart();

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Order successfully submitted!");
    clearCart();
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-serif font-bold text-[#382A21]">Your Order Cart</h2>
        {cart.length > 0 && (
          <button onClick={clearCart} className="text-xs text-red-600 hover:underline">
            Clear All Items
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="bg-white p-8 rounded-2xl border border-[#E8DFD5] text-center">
          <p className="text-[#8C705B] text-sm">Your cart is currently empty.</p>
        </div>
      ) : (
        <form onSubmit={handleCheckout} className="space-y-6 bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-sm">
          <div className="space-y-3">
            {cart.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm py-3 border-b border-[#E8DFD5]">
                <div>
                  <p className="font-semibold text-[#382A21]">{item.name}</p>
                  <p className="text-xs text-[#8C705B]">Fabric: {item.color || "Standard"} | Qty: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-[#382A21]">${item.price * item.quantity}</span>
                  {/* Remove Item Button */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id, item.color)}
                    className="text-red-500 hover:text-red-700 p-1"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg pt-3 text-[#382A21]">
              <span>Total:</span>
              <span>${totalAmount}</span>
            </div>
          </div>
          <button type="submit" className="w-full bg-[#382A21] text-white py-3 rounded-lg font-medium hover:bg-[#523E32] transition">
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}
