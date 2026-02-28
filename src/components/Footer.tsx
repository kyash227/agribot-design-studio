import { Leaf, Mail, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-forest-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl gradient-forest flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading text-lg font-bold text-primary-foreground">AGRIBOT</span>
            </div>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Empowering farmers worldwide with AI-driven insights for sustainable,
              profitable agriculture.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-agri-orange transition-colors duration-300"
                >
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Features", "AI Assistant", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="font-body text-sm text-primary-foreground/60 hover:text-agri-orange transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="font-body text-sm text-primary-foreground/60 mb-4">
              Get the latest AgriBot features and farming insights.
            </p>
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
                <Mail className="w-4 h-4 text-primary-foreground/40" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none"
                />
              </div>
              <button className="btn-orange text-sm px-6 py-2">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 AGRIBOT. All rights reserved. Built with 🌱 for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
