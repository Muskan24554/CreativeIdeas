import { motion } from "motion/react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";

const FEED_POSTS = [
  {
    id: 1,
    image: "https://picsum.photos/seed/feed1/1000/1000",
    likes: "1.2k",
    comments: "48",
    caption: "Chasing golden hour in the heart of Bohol. // Slotide Series",
    category: "Travel"
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/feed2/1000/1000",
    likes: "856",
    comments: "24",
    caption: "Minimalist textures and raw light. Skincare production for Glow Theory.",
    category: "Production"
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/feed3/1000/1000",
    likes: "2.4k",
    comments: "112",
    caption: "Urban solitude. Finding the quiet moments in a loud city.",
    category: "Photography"
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/feed4/1000/1000",
    likes: "943",
    comments: "31",
    caption: "The Art of Simplicity. Behind the scenes of our latest campaign.",
    category: "Editorial"
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/feed5/1000/1000",
    likes: "1.1k",
    comments: "56",
    caption: "Culinary storytelling. The Saffron Table production.",
    category: "Food"
  },
  {
    id: 6,
    image: "https://picsum.photos/seed/feed6/1000/1000",
    likes: "3.2k",
    comments: "145",
    caption: "High fashion, low light. Velvet Nights editorial wrap.",
    category: "Fashion"
  },
  {
    id: 7,
    image: "https://picsum.photos/seed/feed7/1000/1000",
    likes: "1.5k",
    comments: "62",
    caption: "Azure Coast. Capturing the endless blue of the Mediterranean.",
    category: "Travel"
  },
  {
    id: 8,
    image: "https://picsum.photos/seed/feed8/1000/1000",
    likes: "720",
    comments: "18",
    caption: "Mono Aesthetics. A study in black, white, and everything in between.",
    category: "Branding"
  },
  {
    id: 9,
    image: "https://picsum.photos/seed/feed9/1000/1000",
    likes: "2.1k",
    comments: "84",
    caption: "Silk & Stone. Tactile fashion production for the modern woman.",
    category: "Fashion"
  },
  {
    id: 10,
    image: "https://picsum.photos/seed/feed10/1000/1000",
    likes: "1.8k",
    comments: "42",
    caption: "The Daily Grind. Finding beauty in the routine.",
    category: "Lifestyle"
  },
  {
    id: 11,
    image: "https://picsum.photos/seed/feed11/1000/1000",
    likes: "1.3k",
    comments: "51",
    caption: "Maison Minimal. Curating spaces that inspire peace.",
    category: "Interiors"
  },
  {
    id: 12,
    image: "https://picsum.photos/seed/feed12/1000/1000",
    likes: "2.7k",
    comments: "93",
    caption: "Wilderness Whispers. A deep dive into the heart of the forest.",
    category: "Nature"
  }
];

export function CreativeFeed() {
  return (
    <section className="py-32 px-6 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <p className="text-[10px] uppercase tracking-[0.5em] text-brand-orange font-bold mb-8">// Visual Journal</p>
            <h2 className="text-7xl md:text-[12vw] font-black uppercase tracking-tighter leading-[0.75] mix-blend-difference">
              Creative <br />
              <span className="serif-accent normal-case italic font-normal text-6xl md:text-8xl ml-[10%]">Feed</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xs text-right pb-4"
          >
            <div className="h-[1px] w-12 bg-brand-orange ml-auto mb-6" />
            <p className="text-sm text-text-dim leading-relaxed italic font-serif">
              "A curated stream of moments, productions, and visual experiments from the studio."
            </p>
          </motion.div>

          {/* Decorative background text */}
          <div className="absolute -top-20 -right-20 text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none select-none">
            Journal
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEED_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square overflow-hidden bg-[#0a0a0a] border border-white/5"
            >
              <img 
                src={post.image} 
                alt={post.caption} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Instagram Style Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-brand-orange text-white px-3 py-1 rounded-full w-fit">
                      {post.category}
                    </span>
                    {post.id === 1 && (
                      <span className="text-[8px] uppercase tracking-[0.2em] font-black text-brand-orange animate-pulse">
                        • Live Now
                      </span>
                    )}
                  </div>
                  <Bookmark size={20} className="text-white" />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm font-medium leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Heart size={18} className="fill-brand-orange text-brand-orange" />
                      <span className="text-xs font-bold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle size={18} className="text-white" />
                      <span className="text-xs font-bold">{post.comments}</span>
                    </div>
                    <Send size={18} className="text-white ml-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black border border-white/20 px-12 py-6 rounded-full hover:border-brand-orange hover:text-brand-orange transition-all"
          >
            Follow the Journey
          </motion.a>
        </div>
      </div>
    </section>
  );
}
