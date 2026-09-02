import React, { useState } from "react";
import { MessageCircle, Send, X, PhoneCall } from "lucide-react";

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your Lumina AI Stylist. Looking for custom wood, fabric, or furniture recommendations?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const whatsappNumber = "923000000000"; // Replace with your number

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("Missing API Key");
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `You are an AI Interior Stylist for Lumina Woods, a modern 3D furniture brand. Answer concisely and accurately based on furniture fabrics (linen, bouclé, velvet, cotton, leather), wood types (walnut, oak), and interior styling. Customer asked: "${userText}"`
                  }
                ]
              }
            ]
          })
        }
      );

      const data = await response.json();
      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Yes, we offer organic cotton, natural linen, and soft velvet fabric options for our custom furniture.";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Yes! We offer cotton blend, organic linen, soft bouclé, and premium velvet fabrics across our collection." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5">
      {/* WhatsApp Quick Link */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi!%20I%20want%20to%20inquire%20about%20Lumina%20Woods%20furniture.`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 sm:p-3.5 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition"
        title="Chat on WhatsApp"
      >
        <PhoneCall size={20} />
      </a>

      {/* AI Stylist Window */}
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-[#E8DFD5] w-[calc(100vw-2rem)] max-w-xs h-80 sm:h-96 flex flex-col overflow-hidden">
          <div className="bg-[#382A21] text-white p-3.5 flex items-center justify-between font-serif text-sm">
            <span>AI Interior Stylist</span>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-lg ${
                  m.sender === "user"
                    ? "bg-[#A68B74] text-white self-end ml-auto max-w-[85%]"
                    : "bg-[#F4EFEA] text-[#382A21] max-w-[85%]"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && <div className="text-[#8C705B] text-[10px] italic">Stylist thinking...</div>}
          </div>
          <div className="p-2 border-t border-[#E8DFD5] flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask AI Stylist..."
              className="flex-1 text-xs p-2 outline-none"
            />
            <button onClick={handleSend} disabled={loading} className="p-2 bg-[#382A21] text-white rounded-lg disabled:opacity-50">
              <Send size={14} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#382A21] text-white p-3.5 sm:p-4 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition"
          title="Open AI Stylist"
        >
          <MessageCircle size={22} />
        </button>
      )}
    </div>
  );
}
