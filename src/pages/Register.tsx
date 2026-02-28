import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Leaf, Eye, EyeOff, User, Phone, MapPin, Upload } from "lucide-react";
import { motion } from "framer-motion";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    contact: "",
    password: "",
    city: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", form);
  };

  const inputClass =
    "w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
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
          <h1 className="font-heading text-3xl font-bold text-foreground mt-4">
            Create Your Account
          </h1>
          <p className="text-muted-foreground mt-2">Join the smart farming revolution</p>
        </div>

        {/* Form Card */}
        <div className="glass-card rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Picture */}
            <div className="flex justify-center mb-2">
              <label className="cursor-pointer group relative">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-border group-hover:border-forest transition-colors flex items-center justify-center overflow-hidden bg-muted">
                  {profilePreview ? (
                    <img src={profilePreview} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <Upload className="w-8 h-8 text-muted-foreground group-hover:text-forest transition-colors" />
                  )}
                </div>
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                <span className="block text-xs text-muted-foreground text-center mt-2">Upload Photo</span>
              </label>
            </div>

            {/* Full Name & Username */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input name="fullname" value={form.fullname} onChange={handleChange} placeholder="John Doe" required className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input name="username" value={form.username} onChange={handleChange} placeholder="johndoe" required className={inputClass} />
                </div>
              </div>
            </div>

            {/* Email & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Contact Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input name="contact" type="tel" value={form.contact} onChange={handleChange} placeholder="+91 9876543210" required className={inputClass} />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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

            {/* City & State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">City</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input name="city" value={form.city} onChange={handleChange} placeholder="Your city" required className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">State</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input name="state" value={form.state} onChange={handleChange} placeholder="Your state" required className={inputClass} />
                </div>
              </div>
            </div>

            <button type="submit" className="btn-orange w-full text-center py-3 rounded-xl mt-2">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/user-login" className="text-forest font-semibold hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
