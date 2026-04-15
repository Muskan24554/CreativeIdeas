import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12">
              Let's build <br />
              <span className="serif-accent normal-case italic font-normal text-6xl">something</span> <br />
              together.
            </h2>
            <a 
              href="mailto:muskansh2524@gmail.com" 
              className="group flex items-center gap-4 text-2xl md:text-4xl font-serif italic hover:text-brand-orange transition-colors"
            >
              muskansh2524@gmail.com
              <ArrowUpRight size={32} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-dim">Socials</p>
              <ul className="flex flex-col gap-4 text-sm font-medium">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">YouTube</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-dim">Office</p>
              <ul className="flex flex-col gap-4 text-sm font-medium text-text-dim">
                <li className="flex items-center gap-2"><MapPin size={14} /> India</li>
                <li className="flex items-center gap-2"><Phone size={14} /> +91 7889437655</li>
                <li className="flex items-center gap-2"><Mail size={14} /> muskansh2524@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-text-dim">© 2026 Aura Vecchio. All rights reserved.</p>
          <div className="flex gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border border-text-dim flex items-center justify-center hover:border-brand-orange transition-colors cursor-pointer">
                <div className="w-1 h-1 bg-text-dim rounded-full" />
              </div>
            ))}
          </div>
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <span className="text-[10px] font-bold">TOP</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
