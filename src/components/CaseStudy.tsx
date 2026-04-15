import { motion } from "motion/react";
import { ArrowLeft, Share2, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function CaseStudy() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-charcoal text-fg pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold mb-12 hover:text-brand-orange transition-colors">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-brand-orange font-bold mb-6">// Featured Case Study</p>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
              The Art of <br />
              <span className="serif-accent normal-case italic font-normal text-6xl md:text-8xl">Simplicity</span>
            </h1>
            <p className="text-xl font-serif italic text-text-dim max-w-md leading-relaxed">
              A deep dive into the minimalist production of a premium lifestyle campaign, focusing on the raw beauty of natural light and organic textures.
            </p>
          </div>

          <div className="flex flex-col gap-12 pt-12">
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-text-dim mb-2">Client</p>
                <p className="text-lg font-medium">L'Aura Essentials</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-text-dim mb-2">Role</p>
                <p className="text-lg font-medium">Creative Direction</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-text-dim mb-2">Year</p>
                <p className="text-lg font-medium">2026</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-text-dim mb-2">Duration</p>
                <p className="text-lg font-medium">4 Months</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all">
                Launch Project <Share2 size={14} />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Heart size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          <div className="md:col-span-8 aspect-video overflow-hidden rounded-sm">
            <img src="https://picsum.photos/seed/cs1/1600/900" alt="Case Study" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="md:col-span-4 aspect-square overflow-hidden rounded-sm">
            <img src="https://picsum.photos/seed/cs2/800/800" alt="Case Study" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="md:col-span-4 aspect-square overflow-hidden rounded-sm">
            <img src="https://picsum.photos/seed/cs3/800/800" alt="Case Study" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="md:col-span-8 aspect-video overflow-hidden rounded-sm">
            <img src="https://picsum.photos/seed/cs4/1600/900" alt="Case Study" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-3xl mx-auto flex flex-col gap-24">
          <section>
            <h2 className="text-4xl font-display font-bold uppercase mb-8">The Challenge</h2>
            <p className="text-lg text-text-dim leading-relaxed">
              The objective was to redefine the brand's visual identity for a younger, more design-conscious demographic. We needed to move away from traditional commercial aesthetics and embrace a more editorial, "raw" feel that resonated with the concept of mindful consumption.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-display font-bold uppercase mb-8">The Solution</h2>
            <p className="text-lg text-text-dim leading-relaxed">
              We implemented a "less is more" strategy, utilizing high-contrast black and white photography mixed with warm-toned lifestyle shots. By focusing on the tactile nature of the products and the environments they inhabit, we created a sensory experience that felt both premium and accessible.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
