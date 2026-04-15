import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-[120px] left-10 w-full pointer-events-none select-none z-20">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[16vw] leading-[0.85] font-black uppercase tracking-[-0.04em]"
        >
          Creative<br />
          <span className="serif-accent block -mt-5 ml-[20%] text-[6vw]">Portfolio</span>
        </motion.h1>
      </div>

      {/* Floating Images */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -20, rotate: -2 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[20%] left-[10%] w-[20vw] aspect-[3/4] z-10 hidden lg:block"
      >
        <img 
          src="https://picsum.photos/seed/editorial1/800/1200" 
          alt="Editorial" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: 20, rotate: 2 }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[15%] right-[10%] w-[25vw] aspect-square z-10 hidden lg:block"
      >
        <img 
          src="https://picsum.photos/seed/editorial2/1000/1000" 
          alt="Editorial" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Info Overlay */}
      <div className="relative z-20 mt-auto mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-xs">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-orange mb-4 font-bold">// Digital Producer</p>
          <h2 className="text-2xl font-serif italic leading-tight">
            Turning ideas into concept-led digital campaigns.
          </h2>
        </div>
        
        <div className="flex flex-col items-end gap-2 text-right">
          <p className="text-[10px] uppercase tracking-widest opacity-50">India / Worldwide</p>
          <p className="text-xl font-display font-light">2026 Edition</p>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/10 py-4 bg-black">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 text-[10px] uppercase tracking-[0.4em] font-medium opacity-50"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>Art Direction • Social Media Strategy • On-Set Direction • Campaigns • Visual Storytelling • Brand Identity</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
