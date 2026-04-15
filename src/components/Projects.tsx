import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    title: "Slotide Bohol",
    tagline: "// sip, breath, repeat. best spot for a coffee break and a sunset in the island!",
    image: "https://picsum.photos/seed/bohol-aesthetic/1200/1600",
    category: "Coffee & Brunch / PH"
  },
  {
    title: "Mr. and Mrs. Thai",
    tagline: "Ready for a Thai night? Come join us! Pleased to host you!",
    image: "https://picsum.photos/seed/thai-aesthetic/1200/1600",
    category: "Culinary / Tropical"
  },
  {
    title: "Velvet Nights",
    tagline: "Chasing the moon in high fashion. A nocturnal editorial.",
    image: "https://picsum.photos/seed/fashion-editorial/1200/1600",
    category: "Fashion / Editorial"
  },
  {
    title: "The Saffron Table",
    tagline: "A journey through spice and soul. Cinematic culinary storytelling.",
    image: "https://picsum.photos/seed/food-aesthetic/1200/1600",
    category: "Food / Production"
  },
  {
    title: "Concrete Solitude",
    tagline: "Urban silence in a loud world. Finding peace in the metropolis.",
    image: "https://picsum.photos/seed/urban-escape/1200/1600",
    category: "Urban / Photo"
  },
  {
    title: "Maison Minimal",
    tagline: "Mindful spaces for modern living. Curating stories that breathe.",
    image: "https://picsum.photos/seed/interior-aesthetic/1200/1600",
    category: "Interiors / Lifestyle"
  },
  {
    title: "Glow Theory",
    tagline: "Minimalist skincare production. Focus on raw texture and light.",
    image: "https://picsum.photos/seed/skincare-aesthetic/1200/1600",
    category: "Skincare / Commercial"
  },
  {
    title: "Solstice",
    tagline: "Capturing the essence of golden hour living and effortless style.",
    image: "https://picsum.photos/seed/lifestyle-aesthetic/1200/1600",
    category: "Lifestyle / Motion"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24">
          <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter uppercase">
            Selected<br />
            <span className="text-stroke">Works</span>
          </h2>
          <div className="hidden md:block text-right max-w-xs">
            <p className="text-sm opacity-50 leading-relaxed">
              A collection of projects where strategy meets aesthetic. Each piece is a result of meticulous production and creative direction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 bg-[#121212]">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                <div className="absolute top-8 right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-orange">
                    {project.category}
                  </span>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>
                <h3 className="text-4xl font-display font-bold uppercase tracking-tighter group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-dim max-w-sm leading-relaxed italic font-serif">
                  {project.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <Link to="/portfolio">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.5em] font-black border-b border-white/20 pb-4 hover:border-brand-orange transition-all"
            >
              View Full Portfolio
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
