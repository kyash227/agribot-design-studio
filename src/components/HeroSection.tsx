import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-agribot.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth via-background to-earth-warm opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
              <span className="text-sm font-body font-medium text-primary">AI-Powered Agriculture</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground">
              Cultivating the Future with{" "}
              <span className="text-gradient-forest">Artificial Intelligence</span>
            </h1>

            <p className="text-lg font-body text-muted-foreground max-w-xl leading-relaxed">
              AGRIBOT empowers farmers with AI-driven crop prediction, smart fertilizer analysis,
              and 24/7 real-time assistance — transforming how the world grows food.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-orange flex items-center gap-2 text-base shadow-orange-glow">
                Launch AgriBot <ArrowRight size={18} />
              </button>
              <button className="btn-outline-forest text-base">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              {[
                { value: "10K+", label: "Active Users" },
                { value: "98%", label: "Accuracy" },
                { value: "24/7", label: "AI Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs font-body text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-organic">
              <img
                src={heroImage}
                alt="AgriBot AI-powered smart farming robot analyzing crops in a field"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 shadow-organic"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-forest flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">AI</span>
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">Soil Analysis</p>
                  <p className="text-xs font-body text-muted-foreground">pH 6.5 — Optimal</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
