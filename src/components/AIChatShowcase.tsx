import { Bot, User, Send } from "lucide-react";
import { motion } from "framer-motion";

const messages = [
  {
    role: "user" as const,
    text: "My tomato leaves are turning yellow with brown spots. What's happening?",
  },
  {
    role: "bot" as const,
    text: "Based on your description, this appears to be Early Blight (Alternaria solani). I recommend:\n\n• Remove affected leaves immediately\n• Apply neem oil spray (2ml/L)\n• Ensure proper spacing for air circulation\n• Soil pH should be maintained at 6.0–6.8\n\nWould you like me to create a treatment schedule?",
  },
  {
    role: "user" as const,
    text: "Yes, and also suggest organic fertilizer for the next cycle.",
  },
  {
    role: "bot" as const,
    text: "Here's your personalized plan:\n\n🌱 Treatment: Neem spray every 7 days for 3 weeks\n🧪 Fertilizer: Vermicompost + bone meal mix (NPK 3-15-0)\n📅 Next planting window: Mid-March\n\nI've saved this to your dashboard for tracking.",
  },
];

const AIChatShowcase = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-forest opacity-[0.03]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">
              AI Intelligence
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Your Personal{" "}
              <span className="text-gradient-forest">Farm Advisor</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              AgriBot's AI understands agriculture at the molecular level. Ask any question
              about soil health, pest management, or crop planning — and receive expert,
              actionable answers instantly.
            </p>
            <ul className="space-y-3">
              {[
                "Natural language conversations",
                "Photo-based crop diagnosis",
                "Personalized treatment plans",
                "Multi-language support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-forest" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl overflow-hidden shadow-organic"
          >
            {/* Chat Header */}
            <div className="gradient-forest px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-primary-foreground">AgriBot AI</p>
                <p className="text-xs text-primary-foreground/70">Online — Ready to help</p>
              </div>
              <span className="ml-auto w-2 h-2 rounded-full bg-forest-light animate-pulse" />
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 max-h-96 overflow-y-auto bg-background/50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-8 h-8 rounded-full gradient-forest flex-shrink-0 flex items-center justify-center mt-1">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-3 max-w-[80%] text-sm font-body whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-card text-card-foreground border border-border rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center mt-1">
                      <User className="w-4 h-4 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-6 py-4 border-t border-border flex items-center gap-3 bg-background/30">
              <input
                type="text"
                placeholder="Ask AgriBot anything..."
                className="flex-1 bg-transparent font-body text-sm text-foreground placeholder:text-muted-foreground outline-none"
                readOnly
              />
              <button className="w-10 h-10 rounded-full gradient-forest flex items-center justify-center hover:shadow-orange-glow transition-shadow">
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIChatShowcase;
