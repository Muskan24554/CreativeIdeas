import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ALL_PROJECTS = [
  { title: "Slotide Bohol", category: "Coffee & Brunch", image: "https://picsum.photos/seed/p1/800/1000" },
  { title: "Mr. and Mrs. Thai", category: "Culinary", image: "https://picsum.photos/seed/p2/800/1000" },
  { title: "Velvet Nights", category: "Fashion", image: "https://picsum.photos/seed/p3/800/1000" },
  { title: "The Saffron Table", category: "Food", image: "https://picsum.photos/seed/p4/800/1000" },
  { title: "Concrete Solitude", category: "Urban", image: "https://picsum.photos/seed/p5/800/1000" },
  { title: "Maison Minimal", category: "Interiors", image: "https://picsum.photos/seed/p6/800/1000" },
  { title: "Glow Theory", category: "Skincare", image: "https://picsum.photos/seed/p7/800/1000" },
  { title: "Solstice", category: "Lifestyle", image: "https://picsum.photos/seed/p8/800/1000" },
  { title: "Azure Coast", category: "Travel", image: "https://picsum.photos/seed/p9/800/1000" },
  { title: "Mono Aesthetics", category: "Branding", image: "https://picsum.photos/seed/p10/800/1000" },
  { title: "Silk & Stone", category: "Fashion", image: "https://picsum.photos/seed/p11/800/1000" },
  { title: "The Daily Grind", category: "Lifestyle", image: "https://picsum.photos/seed/p12/800/1000" },
];

export function PortfolioPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-brand-charcoal text-fg pt-40 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <h1 className="text-8xl md:text-[12vw] font-black uppercase tracking-tighter leading-[0.8]">
            Full <br />
            <span className="text-stroke">Gallery</span>
          </h1>
          <div className="max-w-xs text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange mb-4">// Selected Works</p>
            <p className="text-sm text-text-dim leading-relaxed">
              A comprehensive archive of creative direction and production work spanning fashion, lifestyle, and digital campaigns.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {ALL_PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-[#121212]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-orange mb-1">{project.category}</p>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight group-hover:text-brand-orange transition-colors">{project.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Link to="/" className="text-[10px] uppercase tracking-[0.5em] font-bold hover:text-brand-orange transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
