import { Sprout, FlaskConical, BrainCircuit, Leaf, ScanSearch, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sprout,
    title: "Crop Prediction",
    description: "AI models analyze soil, weather, and historical data to predict optimal crops for your region.",
  },
  {
    icon: FlaskConical,
    title: "Fertilizer Analysis",
    description: "Smart recommendations for natural and organic fertilizers tailored to your soil composition.",
  },
  {
    icon: BrainCircuit,
    title: "AI Problem Solving",
    description: "Real-time diagnosis of plant diseases, pest infestations, and nutrient deficiencies.",
  },
  {
    icon: Leaf,
    title: "Organic Guidance",
    description: "Step-by-step plans for transitioning to sustainable, chemical-free farming practices.",
  },
  {
    icon: ScanSearch,
    title: "Visual Crop Scanner",
    description: "Upload photos of your crops for instant AI-powered health assessments and recommendations.",
  },
  {
    icon: Cloud,
    title: "Weather Intelligence",
    description: "Hyperlocal weather forecasting integrated with your planting and harvesting schedules.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">
            Feature Matrix
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Intelligent Tools for{" "}
            <span className="text-gradient-forest">Smart Farming</span>
          </h2>
          <p className="mt-4 font-body text-muted-foreground text-lg">
            Everything you need to make data-driven agricultural decisions, all in one platform.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group glass-card rounded-2xl p-8 hover-lift cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl gradient-forest flex items-center justify-center mb-6 group-hover:shadow-orange-glow transition-shadow duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
