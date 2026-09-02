import React, { useState } from "react";
import { MessageCircle, Send, X, PhoneCall } from "lucide-react";

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your Lumina AI Stylist. How can I assist you with furniture fabrics, wood finishes, or custom designs today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Updated phone number in international format
  const whatsappNumber = "923269659536";

  const getSmartReply = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    if (q.includes("hey") || q.includes("hi") || q.includes("hello") || q.includes("aoa") || q.includes("assalam")) {
      return "Hello! Welcome to Lumina Woods. How can I help you customize your dream furniture piece today?";
    }
    if (q.includes("anything else") || q.includes("else") || q.includes("more")) {
      return "In addition to custom upholstery, we offer solid wood craftsmanship (Walnut, Oak, Ebony), bespoke sizing, and direct WhatsApp support with our lead designers!";
    }
    if (q.includes("wood") || q.includes("timber") || q.includes("leg") || q.includes("frame")) {
      return "We construct our frames using premium Solid American Walnut, Natural White Oak, and Dark Charcoal Ebony wood.";
    }
    if (q.includes("cotton") || q.includes("fabric") || q.includes("material") || q.includes("velvet") || q.includes("linen")) {
      return "We offer organic linen, premium velvet, textured bouclé, and durable cotton-blend fabrics for all seating options.";
    }
    if (q.includes("lawn")) {
      return "Lawn is a light apparel fabric. For our handcrafted furniture, we use heavy-duty upholstery fabrics like linen, velvet, and bouclé.";
    }
    if (q.includes("price") || q.includes("cost") || q.includes("discount") || q.includes("rate")) {
      return "Our handcrafted armchairs start at $480 and custom modular sofas start at $1,450. Check our Catalog page for details!";
    }
    if (q.includes("delivery") || q.includes("ship") || q.includes("time")) {
      return "Custom pieces are crafted within 7-10 business days and delivered with white-glove assembly included.";
    }

    return `Regarding "${userQuery}": Our studio specializes in custom 3D furniture tailoring. Feel free to reach out via our WhatsApp button above to chat directly with our team!`;
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");
    setLoading(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (apiKey) {
      try {
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
                      text: `You are the AI Stylist for Lumina Woods furniture store. Provide a concise, accurate response (under 2 sentences) to this user message: "${userText}"`
                    }
                  ]
                }
              ]
            })
          }
        );

        const data = await response.json();
        const apiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (apiReply) {
          setMessages((prev) => [...prev, { sender: "bot", text: apiReply }]);
          setLoading(false);
          return;
        }
      } catch (e) {
        // Fallback execution on API error
      }
    }

    // Dynamic pattern fallback
    setTimeout(() => {
      const botResponse = getSmartReply(userText);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      setLoading(false);
    }, 400);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5">
      {/* WhatsApp Link with personal number */}
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
