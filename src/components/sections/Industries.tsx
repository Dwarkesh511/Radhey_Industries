import { motion } from "framer-motion";
import { Link } from "wouter";
import { Package, ShoppingBag, Layers, FileText, Palette, Shirt, Droplet } from "lucide-react";

const industries = [
  { icon: <Package />, name: "FLEXIBLE PACKAGING CYLINDER", desc: "For BOPP, PET, PE & PVC packaging films", path: "/products?id=1" },
  { icon: <ShoppingBag />, name: "WOVEN SACK BAG CYLINDER", desc: "HDPE & PP woven sack bag printing", path: "/products?id=2" },
  { icon: <Layers />, name: "SHRINK & SLEEVE PACKAGING", desc: "PVC, PETG & OPS shrink sleeves", path: "/products?id=3" },
  { icon: <FileText />, name: "PAPER PRINTING CYLINDER", desc: "Gift wraps, wallpaper & kraft paper", path: "/products?id=4" },
  { icon: <Palette />, name: "DECORATIVE LAMINATES", desc: "Woodgrains, marble & abstract decors", path: "/products?id=5" },
  { icon: <Shirt />, name: "LEATHER & REXIN PRINTING ROLLERS", desc: "PVC/PU leather & rexin flooring", path: "/products?id=5" },
  { icon: <Droplet />, name: "ANILOX COATING ROLLERS", desc: "Precision lacquer & adhesive coatings", path: "/products?id=6" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Applications</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#3F3D99]">
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={ind.path}
                className="group bg-[#F8FAFC] border border-[#E8E8F5] p-7 flex flex-col items-center text-center rounded-2xl h-full cursor-pointer
                           hover:-translate-y-2 hover:shadow-[0_8px_28px_rgba(63,61,153,0.12)] hover:border-[#3F3D99]/25 transition-all duration-300 block"
              >
                {/* Icon circle */}
                <div className="text-[#3F3D99] mb-4 w-14 h-14 flex items-center justify-center bg-[#E8E8F5] rounded-full
                                group-hover:bg-[#3F3D99] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(63,61,153,0.30)] transition-all duration-300">
                  {ind.icon}
                </div>
                <h4 className="text-[#1F2937] font-bold text-xs uppercase mb-2 leading-snug">{ind.name}</h4>
                <p className="text-[#6B7280] text-[11px] leading-relaxed">{ind.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}