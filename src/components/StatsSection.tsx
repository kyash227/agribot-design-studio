import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, BarChart3 } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 98, suffix: "%", label: "Prediction Accuracy" },
  { icon: Users, value: 500, suffix: "+", label: "Farmers Assisted" },
  { icon: Clock, value: 24, suffix: "/7", label: "AI Availability" },
  { icon: BarChart3, value: 50, suffix: "K+", label: "Crops Analyzed" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading text-5xl md:text-6xl font-extrabold text-primary-foreground">
      {count}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 gradient-forest relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--forest-light)/0.3),_transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
            Impact in Numbers
          </h2>
          <p className="mt-4 font-body text-primary-foreground/70 text-lg">
            Real results from real farms across the world
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="font-body text-sm text-primary-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
