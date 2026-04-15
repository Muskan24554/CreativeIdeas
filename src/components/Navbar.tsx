import { motion } from "motion/react";
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full px-6 py-8 flex justify-between items-center z-50 mix-blend-difference"
    >
      <div className="flex items-center gap-2">
        <Link to="/" className="font-display font-bold text-sm uppercase tracking-[0.1em]">Muskan Sharma</Link>
      </div>
      
      <div className="hidden md:flex items-center gap-10 font-display text-[11px] uppercase tracking-[0.2em] font-medium">
        <Link to="/portfolio" className="text-fg hover:text-brand-orange transition-colors">Portfolio</Link>
        <a href="/#about" className="text-text-dim hover:text-fg transition-colors">About</a>
        <a href="/#contact" className="text-text-dim hover:text-fg transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="text-text-dim hover:text-brand-orange transition-colors"><Linkedin size={16} /></a>
        <a href="#" className="text-text-dim hover:text-brand-orange transition-colors"><Instagram size={16} /></a>
      </div>
    </motion.nav>
  );
}
