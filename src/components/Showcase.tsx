import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function FeaturedProject() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-charcoal">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[150px]" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.5em] text-brand-orange font-bold mb-8"
        >
          Featured Project
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.8] mb-12"
        >
          Slotide <br />
          <span className="text-stroke italic font-serif font-normal lowercase">Bohol</span>
        </motion.h2>
        <p className="text-xl font-serif italic text-text-dim mb-12 max-w-lg mx-auto">
          "// sip, breath, repeat. best spot for a coffee break and a sunset in the island!"
        </p>
        <Link to="/case-study">
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative overflow-hidden border border-white/30 px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:border-brand-orange transition-colors"
          >
            <span className="relative z-10">View Case Study</span>
            <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
}

export function SocialShowcase() {
  return (
    <section className="py-32 px-6 bg-[#E5E5E5] text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase text-center md:text-left">
            Content <br />
            <span className="font-serif italic font-normal lowercase">Showcase</span>
          </h2>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
              <span className="text-xs font-bold">IG</span>
            </div>
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
              <span className="text-xs font-bold">TT</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20, rotate: i % 2 === 0 ? 2 : -2 }}
              className="bg-white p-4 shadow-2xl rounded-sm transform transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden mb-4 rounded-sm">
                <img 
                  src={`https://picsum.photos/seed/social${i}/800/800`} 
                  alt="Social" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">@aura.creative</p>
                <div className="w-2 h-2 rounded-full bg-brand-orange" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
