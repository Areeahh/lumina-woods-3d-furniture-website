import React from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, totalAmount, clearCart } = useCart();

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Order successfully submitted!");
    clearCart();
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif font-bold text-[#382A21] mb-6">Checkout</h2>
      {cart.length === 0 ? (
        <p className="text-[#8C705B]">Your cart is currently empty.</p>
      ) : (
        <form onSubmit={handleCheckout} className="space-y-6 bg-white p-6 rounded-2xl border border-[#E8DFD5]">
          <div className="space-y-2">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between text-sm py-1 border-b border-[#E8DFD5]">
                <span>{item.name} ({item.color || "Standard"}) x{item.quantity}</span>
                <span className="font-semibold">${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg pt-2">
              <span>Total:</span>
              <span>${totalAmount}</span>
            </div>
          </div>
          <button type="submit" className="w-full bg-[#382A21] text-white py-3 rounded-lg font-medium">Place Order</button>
        </form>
      )}
    </div>
  );
}
