import React, { useState } from "react";
import { MessageCircle, Send, X, PhoneCall } from "lucide-react";

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your Lumina AI Stylist. Looking for custom wood or fabric recommendations?" }
  ]);
  const [input, setInput] = useState("");

  const whatsappNumber = "923000000000"; // Replace with your phone number

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const userMsg = input;
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `Thanks for asking about "${userMsg}". Warm taupe upholstery paired with walnut finishes works beautifully!` }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi!%20I%20want%20to%20inquire%20about%20Lumina%20Woods%20furniture.`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3.5 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition"
        title="Chat on WhatsApp"
      >
        <PhoneCall size={22} />
      </a>

      {/* AI Stylist Chat Widget */}
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-[#E8DFD5] w-80 h-96 flex flex-col overflow-hidden">
          <div className="bg-[#382A21] text-white p-4 flex items-center justify-between font-serif">
            <span>AI Interior Stylist</span>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg ${
                  m.sender === "user"
                    ? "bg-[#A68B74] text-white self-end ml-auto max-w-[80%]"
                    : "bg-[#F4EFEA] text-[#382A21] max-w-[80%]"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-[#E8DFD5] flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask AI Stylist..."
              className="flex-1 text-xs p-2 outline-none"
            />
            <button onClick={handleSend} className="p-2 bg-[#382A21] text-white rounded-lg">
              <Send size={14} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#382A21] text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition"
          title="Open AI Stylist"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
