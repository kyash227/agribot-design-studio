import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-forest flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">
            AGRI<span className="text-forest">BOT</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Features", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/user-login" className="btn-outline-forest text-sm px-6 py-2">User Login</Link>
          <Link to="/register" className="btn-outline-forest text-sm px-6 py-2">Register</Link>
          <Link to="/admin-login" className="btn-orange text-sm px-6 py-2">Admin Login</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-border px-6 py-6 space-y-4">
          {["Home", "Features", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Link to="/user-login" className="btn-outline-forest text-sm py-2 text-center" onClick={() => setIsOpen(false)}>User Login</Link>
            <Link to="/register" className="btn-outline-forest text-sm py-2 text-center" onClick={() => setIsOpen(false)}>Register</Link>
            <Link to="/admin-login" className="btn-orange text-sm py-2 text-center" onClick={() => setIsOpen(false)}>Admin Login</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
