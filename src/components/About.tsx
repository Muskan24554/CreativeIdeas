import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white text-black min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img 
              src="https://picsum.photos/seed/producer/1200/1500" 
              alt="Producer" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[1px] w-[60px] bg-brand-orange mb-6" />
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Turning concept-led <br />
              <span className="serif-accent normal-case italic font-normal text-6xl">ideas into cinematic experiences.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Campaigns", desc: "Concept-led digital campaigns." },
              { title: "Motion", desc: "Short-form content // Motion graphics." },
              { title: "Production", desc: "End-to-end projects, brief to launch." },
              { title: "Social", desc: "Social Media Design & Strategy." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 border border-black/10 rounded-sm hover:bg-black hover:text-white transition-all duration-500 group flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-4 opacity-50 group-hover:text-brand-orange transition-colors font-bold">Work / 0{i + 1}</p>
                  <h3 className="text-3xl font-display font-bold mb-3 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed mb-6">{item.desc}</p>
                </div>
                
                <Link 
                  to="/portfolio"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-brand-orange transition-colors"
                >
                  View Work
                  <div className="w-6 h-[1px] bg-current" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 pt-8"
          >
            <div className="w-12 h-[1px] bg-black" />
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to explore works</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
