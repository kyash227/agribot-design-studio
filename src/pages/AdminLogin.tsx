import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Leaf, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Admin login:", { email, password });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl gradient-forest flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-heading text-2xl font-bold text-foreground">
              AGRI<span className="text-forest">BOT</span>
            </span>
          </Link>
          <div className="flex items-center justify-center gap-2 mt-4">
            <ShieldCheck className="w-7 h-7 text-forest" />
            <h1 className="font-heading text-3xl font-bold text-foreground">
              Admin Portal
            </h1>
          </div>
          <p className="text-muted-foreground mt-2">Authorized personnel only</p>
        </div>

        {/* Form Card */}
        <div className="glass-card rounded-2xl p-8 border-2 border-forest/20">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@agribot.com"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full gradient-forest text-primary-foreground font-heading font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-forest/30 hover:scale-[1.02]">
              Access Admin Dashboard
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            <Link to="/user-login" className="text-forest font-semibold hover:underline">
              ← Back to User Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
