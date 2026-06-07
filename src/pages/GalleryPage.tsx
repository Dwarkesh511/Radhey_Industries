import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Play, X, ChevronLeft, ChevronRight, Search } from "lucide-react";

const categories = ["All", "Factory", "Machinery", "Engraving", "Chrome Plating", "Finished Cylinders", "Quality Testing"];

const galleryItems = [
  { id: 1, cat: "Factory", title: "Production Floor View", height: "h-64", type: "blue-grey" },
  { id: 2, cat: "Machinery", title: "CNC Turning Center", height: "h-80", type: "metallic" },
  { id: 3, cat: "Engraving", title: "Laser Engraving Process", height: "h-56", type: "orange-dark" },
  { id: 4, cat: "Finished Cylinders", title: "Packaging Cylinders Stack", height: "h-72", type: "chrome" },
  { id: 5, cat: "Quality Testing", title: "Optical Inspection", height: "h-64", type: "blue-grey" },
  { id: 6, cat: "Chrome Plating", title: "Plating Bath", height: "h-80", type: "chrome" },
  { id: 7, cat: "Machinery", title: "Dynamic Balancing Unit", height: "h-56", type: "metallic" },
  { id: 8, cat: "Engraving", title: "Cell Structure Micro-view", height: "h-72", type: "orange-dark" },
  { id: 9, cat: "Finished Cylinders", title: "Mirror Finish Rollers", height: "h-64", type: "chrome" },
  { id: 10, cat: "Factory", title: "Automated Workflow", height: "h-80", type: "blue-grey" },
  { id: 11, cat: "Quality Testing", title: "CMM Measurement", height: "h-56", type: "metallic" },
  { id: 12, cat: "Chrome Plating", title: "Surface Treatment", height: "h-72", type: "chrome" }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === activeFilter);

  const sectionEntry = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const getGradient = (type: string) => {
    switch(type) {
      case "metallic": return "bg-gradient-to-br from-gray-700 via-gray-900 to-black";
      case "orange-dark": return "bg-gradient-to-br from-[#2D2B7A] via-[#1E1E4F] to-[#0B1026]";
      case "chrome": return "bg-gradient-to-tr from-gray-400 via-gray-200 to-gray-500";
      case "blue-grey": return "bg-gradient-to-b from-[#1a202c] to-[#0f172a]";
      default: return "bg-gray-800";
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 overflow-hidden gt-bg-primary">
        <div className="absolute inset-0 gt-grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3F3D99] rounded-full mix-blend-screen filter blur-[150px] animate-pulse" style={{ opacity: "var(--gt-orb-opacity)" }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-8 text-sm font-medium">
            <span className="gt-text-muted">Home</span>
            <span className="mx-2 gt-text-muted">&gt;</span>
            <span className="text-[#3F3D99]">Portfolio</span>
          </div>
          
          <motion.div {...sectionEntry}>
            <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight max-w-4xl">
              Inside Our Manufacturing <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl gt-text-secondary font-light max-w-2xl">
              A visual journey through our world-class facilities, precision machinery, and flawlessly finished rotogravure cylinders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 gt-bg-secondary min-h-screen">
         <div className="container mx-auto px-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-16 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveFilter(cat); setSelectedIndex(null); }}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === cat 
                      ? "bg-[#ED3237] text-white shadow-[0_10px_30px_rgba(237,50,55,0.25)]" 
                      : "glass-card border gt-text-secondary hover:gt-text-primary"
                  }`}
                  style={{ borderColor: activeFilter === cat ? "transparent" : "var(--gt-border)" }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry Grid Simulation */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
               <AnimatePresence>
                  {filteredItems.map((item, idx) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      key={item.id}
                      className={`relative overflow-hidden rounded-lg cursor-pointer group break-inside-avoid ${item.height}`}
                      onClick={() => setSelectedIndex(idx)}
                    >
                       <div className={`absolute inset-0 ${getGradient(item.type)} filter grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700`} />
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <span className="text-[#ED3237] text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.cat}</span>
                         <h3 className="text-white font-heading font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                         <div className="mt-4 flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity delay-150">
                           <Search className="w-4 h-4 mr-2" /> View
                         </div>
                       </div>
                    </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* Video Showcase Area */}
      <section className="py-24 gt-bg-primary">
        <div className="container mx-auto px-6">
           <motion.div {...sectionEntry} className="mb-16">
             <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
                Process Videos
              </span>
              <h2 className="text-4xl font-heading font-extrabold gt-text-primary mb-6">Watch Precision In Motion</h2>
           </motion.div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Laser Engraving Process", duration: "02:45" },
                { title: "Automated Chrome Plating", duration: "01:30" },
                { title: "Quality Testing Protocols", duration: "03:15" }
              ].map((video, i) => (
                <motion.div key={i} {...sectionEntry} className="glass-card rounded-lg overflow-hidden group cursor-pointer">
                  <div className="h-48 bg-black/20 dark:bg-[#1a1a1a] relative flex items-center justify-center border-b" style={{ borderColor: "var(--gt-border)" }}>
                     <div className="w-16 h-16 rounded-full bg-[#3F3D99]/80 flex items-center justify-center text-white backdrop-blur-md group-hover:scale-110 group-hover:bg-[#ED3237] transition-all shadow-[0_10px_30px_rgba(63,61,153,0.22)] group-hover:shadow-[0_14px_40px_rgba(237,50,55,0.28)]">
                        <Play className="w-6 h-6 ml-1" />
                     </div>
                     <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-xs font-mono text-white">
                       {video.duration}
                     </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-heading font-bold gt-text-primary group-hover:text-[#2D2B7A] transition-colors">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors" onClick={() => setSelectedIndex(null)}>
               <X className="w-8 h-8" />
            </button>
            
            <button className="absolute left-6 text-white/50 hover:text-white transition-colors p-4" onClick={handlePrev}>
               <ChevronLeft className="w-10 h-10" />
            </button>
            
            <div className="w-full max-w-5xl px-16" onClick={e => e.stopPropagation()}>
               <div className={`w-full aspect-video rounded-lg ${getGradient(filteredItems[selectedIndex].type)} shadow-2xl relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[bg-pan_5s_infinite_linear]" />
               </div>
               <div className="mt-6 text-center">
                 <span className="text-[#ED3237] text-sm font-bold uppercase tracking-wider">{filteredItems[selectedIndex].cat}</span>
                 <h2 className="text-2xl font-heading font-bold text-white mt-2">{filteredItems[selectedIndex].title}</h2>
               </div>
            </div>

            <button className="absolute right-6 text-white/50 hover:text-white transition-colors p-4" onClick={handleNext}>
               <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </PageLayout>
  );
}
