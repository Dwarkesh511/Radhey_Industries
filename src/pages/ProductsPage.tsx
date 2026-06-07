import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const productsData = [
  {
    id: 1,
    name: "Packaging Cylinders",
    category: "Packaging",
    description: "High-definition packaging cylinders with micron-level precision for flexible packaging applications.",
    specs: [
      { key: "Material", value: "Steel + Cu + Cr" },
      { key: "Tolerance", value: "±0.001mm" },
      { key: "Application", value: "Flexible Packaging" }
    ],
    fullDesc: "Our packaging cylinders are engineered to deliver stunning, high-definition prints on a variety of flexible substrates. Using advanced laser engraving, we ensure perfect ink transfer, vibrant color reproduction, and exceptional durability for long print runs in the FMCG, food, and beverage sectors."
  },
  {
    id: 2,
    name: "Decorative Cylinders",
    category: "Decorative",
    description: "Premium cylinders for decorative laminate and wallpaper printing with rich color reproduction.",
    specs: [
      { key: "Engraving", value: "Laser / EM" },
      { key: "Finish", value: "Mirror Polish" },
      { key: "Application", value: "Laminates & Decor" }
    ],
    fullDesc: "Designed specifically for the decor industry, these cylinders reproduce intricate wood grains, stone textures, and abstract patterns with breathtaking realism. We achieve exceptional tonal depth and seamless continuity essential for furniture laminates, flooring, and premium wallpapers."
  },
  {
    id: 3,
    name: "Coating Cylinders",
    category: "Coating",
    description: "Precision coating cylinders for uniform adhesive and lacquer application.",
    specs: [
      { key: "Volume", value: "Precise BCM" },
      { key: "Surface", value: "Hard Chrome" },
      { key: "Application", value: "Adhesives/Lacquers" }
    ],
    fullDesc: "Achieve perfectly uniform coating weights with our custom-engineered coating cylinders. Whether applying cold seal adhesives, lacquers, silicones, or barrier coatings, our precisely calibrated cell structures guarantee consistent laydown across the entire web width."
  },
  {
    id: 4,
    name: "Embossing Rollers",
    category: "Embossing",
    description: "Heavy-duty embossing rollers creating deep 3D textures on various substrates.",
    specs: [
      { key: "Core", value: "Forged Steel" },
      { key: "Depth", value: "Up to 3mm" },
      { key: "Application", value: "Textured Surfaces" }
    ],
    fullDesc: "Our heavy-duty embossing rollers add tactile dimension to your products. Manufactured from premium forged steel and deeply engraved to exact specifications, these rollers withstand immense pressure to create permanent, crisp 3D textures on foil, paper, plastics, and non-wovens."
  },
  {
    id: 5,
    name: "Specialty Cylinders",
    category: "Specialty",
    description: "Custom-engineered cylinders for pharmaceutical, tobacco and security printing.",
    specs: [
      { key: "Security", value: "Micro-text" },
      { key: "Precision", value: "Ultra-high" },
      { key: "Application", value: "Pharma/Tobacco" }
    ],
    fullDesc: "For applications demanding the highest level of security and precision. We manufacture cylinders capable of reproducing micro-text, guilloche patterns, and specialized inks required for pharmaceutical blister packs, tobacco packaging, and anti-counterfeit security documents."
  },
  {
    id: 6,
    name: "Industrial Rollers",
    category: "Industrial",
    description: "Heavy-gauge industrial rollers for demanding continuous production environments.",
    specs: [
      { key: "Strength", value: "Heavy Duty" },
      { key: "Balancing", value: "Dynamic" },
      { key: "Application", value: "Continuous Mill" }
    ],
    fullDesc: "Built to endure the harshest continuous production environments. Our industrial rollers are dynamically balanced for high-speed operation, featuring enhanced core strength and specialized surface treatments to resist wear, chemicals, and extreme temperatures."
  }
];

const categories = ["All", "Packaging", "Decorative", "Coating", "Embossing", "Specialty", "Industrial"];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof productsData[0] | null>(null);

  const filteredProducts = activeFilter === "All" 
    ? productsData 
    : productsData.filter(p => p.category === activeFilter);

  const sectionEntry = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
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
            <span className="text-[#3F3D99]">Products</span>
          </div>
          
          <motion.div {...sectionEntry}>
            <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
              Our Products
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight max-w-4xl">
              Advanced Rotogravure <span className="text-gradient">Cylinder Solutions</span>
            </h1>
            <p className="text-lg md:text-xl gt-text-secondary font-light max-w-2xl">
              A comprehensive range of precision-engineered cylinders designed to meet the exact specifications of diverse printing and coating applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-24 gt-bg-secondary min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
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

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProducts.map(product => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="glass-card rounded-xl overflow-hidden group hover:border-[#ED3237]/35 hover:scale-[1.02] transition-all cursor-pointer flex flex-col"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="h-[200px] w-full bg-gradient-to-br from-[#0B1026] via-[#111827] to-[#1E1E4F] relative overflow-hidden">
                     <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[bg-pan_3s_infinite_linear]" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block py-1 px-2 border border-[rgba(63,61,153,0.22)] rounded text-[#3F3D99] text-[10px] font-bold uppercase tracking-wider mb-3 bg-[#E8E8F5]">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-heading font-bold gt-text-primary mb-2">{product.name}</h3>
                      <p className="gt-text-secondary text-sm font-light leading-relaxed line-clamp-2">{product.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-auto mb-6">
                      {product.specs.map(spec => (
                        <span key={spec.key} className="text-xs gt-text-secondary bg-black/5 dark:bg-white/5 px-2 py-1 rounded border" style={{ borderColor: "var(--gt-border)" }}>
                          {spec.value}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full py-3 border gt-text-primary rounded-lg font-medium group-hover:bg-[#3F3D99] group-hover:border-[#3F3D99] group-hover:text-white transition-colors uppercase tracking-wide text-xs" style={{ borderColor: "var(--gt-border)" }}>
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-24 gt-bg-primary">
        <div className="container mx-auto px-6">
           <motion.div {...sectionEntry} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold gt-text-primary mb-4 tracking-tight">Built to Outperform</h2>
              <p className="gt-text-secondary font-light max-w-2xl mx-auto">Every cylinder is a masterpiece of metallurgical and mechanical engineering.</p>
           </motion.div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Material Quality", desc: "Premium forged steel cores overlaid with high-purity electrolytic copper and hard industrial chrome.", spec: "Steel + Cu + Cr" },
                { title: "Dimensional Tolerance", desc: "Machined and balanced to exact specifications, ensuring perfect register and smooth running.", spec: "±0.001mm" },
                { title: "Surface Finish", desc: "Polished to a flawless mirror finish, providing optimal ink release and blade wear resistance.", spec: "Ra 0.1μm" }
              ].map((feature, i) => (
                <motion.div key={i} {...sectionEntry} className="glass-card p-8 rounded-lg relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8E8F5] rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150" />
                   <h3 className="text-2xl font-heading font-bold gt-text-primary mb-2">{feature.title}</h3>
                   <span className="text-[#3F3D99] font-mono text-sm block mb-4">{feature.spec}</span>
                   <p className="gt-text-secondary font-light">{feature.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="gt-bg-secondary border rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              style={{ borderColor: "var(--gt-border)" }}
              onClick={e => e.stopPropagation()}
            >
               <div className="md:w-2/5 bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] border-r relative min-h-[250px]" style={{ borderColor: "var(--gt-border)" }}>
                 <div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-[bg-pan_3s_infinite_linear]" />
                 <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-[#3F3D99] text-white text-xs font-bold uppercase rounded-md">{selectedProduct.category}</span>
                 </div>
               </div>
               <div className="md:w-3/5 p-8 md:p-10 overflow-y-auto">
                 <h2 className="text-3xl font-heading font-bold gt-text-primary mb-4">{selectedProduct.name}</h2>
                 <p className="gt-text-secondary font-light leading-relaxed mb-8">{selectedProduct.fullDesc}</p>
                 
                 <div className="mb-8">
                   <h4 className="text-sm font-bold gt-text-primary uppercase tracking-wider mb-4 border-b pb-2" style={{ borderColor: "var(--gt-border)" }}>Technical Specifications</h4>
                   <ul className="space-y-3">
                     {selectedProduct.specs.map(spec => (
                       <li key={spec.key} className="flex justify-between items-center text-sm">
                         <span className="gt-text-secondary">{spec.key}</span>
                         <span className="gt-text-primary font-medium">{spec.value}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 <div className="flex flex-wrap gap-4 pt-6 border-t" style={{ borderColor: "var(--gt-border)" }}>
                    <a href="/contact" className="px-6 py-3 bg-[#ED3237] text-white rounded-lg font-semibold hover:bg-[#C62828] transition-all duration-300 shadow-[0_10px_30px_rgba(237,50,55,0.22)] hover:-translate-y-[3px] uppercase tracking-wide text-sm text-center flex-1">
                      Request Quote
                    </a>
                    <button 
                      onClick={() => setSelectedProduct(null)}
                      className="px-6 py-3 border gt-text-primary rounded-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors uppercase tracking-wide text-sm flex-1"
                      style={{ borderColor: "var(--gt-border)" }}
                    >
                      Close
                    </button>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </PageLayout>
  );
}
