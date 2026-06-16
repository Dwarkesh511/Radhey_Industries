import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import packagingCylindersImg from "@/assets/packaging-cylinders.png";
import wovenSackCylindersImg from "@/assets/woven-sack-cylinders.png";
import shrinkSleeveCylindersImg from "@/assets/shrink-sleeve-cylinders.png";
import paperPrintingCylindersImg from "@/assets/paper-printing-cylinders.png";
import leatherPrintingRollersImg from "@/assets/leather-printing-rollers.png";
import aniloxCoatingRollersImg from "@/assets/anilox-coating-rollers.png";

const products = [
  {
    title: "Flexible Packaging Cylinders",
    desc: "High-precision gravure cylinders for flexible packaging applications including food, FMCG, pharmaceutical and industrial packaging.",
    img: packagingCylindersImg,
    tag: "High Precision",
  },
  {
    title: "Woven Sack Bag Cylinders",
    desc: "Durable engraving solutions for PP woven bags, BOPP laminated sacks, fertilizer bags, cement bags and industrial packaging.",
    img: wovenSackCylindersImg,
    tag: "Heavy Duty",
  },
  {
    title: "Shrink & Sleeve Packaging Cylinders",
    desc: "Premium gravure cylinders for shrink sleeves, wrap-around labels, tamper-evident seals and decorative packaging.",
    img: shrinkSleeveCylindersImg,
    tag: "Premium",
  },
  {
    title: "Paper Printing Cylinders",
    desc: "High-definition printing cylinders designed for paper packaging, gift wraps, labels, cartons and commercial printing applications.",
    img: paperPrintingCylindersImg,
    tag: "HD Print",
  },
  {
    title: "Leather & Rexin Printing Rollers",
    desc: "Specialized engraved rollers for leather, rexin, synthetic leather, furnishing materials and decorative surface textures.",
    img: leatherPrintingRollersImg,
    tag: "Specialized",
  },
  {
    title: "Anilox Coating Rollers",
    desc: "Precision-engineered anilox rollers for coating, varnishing, adhesive application and high-performance printing processes.",
    img: aniloxCoatingRollersImg,
    tag: "Precision",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#E53935] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#1E3A8A]">
              Our Products
            </h2>
          </div>
          <a
            href="/products"
            className="border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#E53935] hover:border-[#E53935] hover:text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 group text-sm transition-all duration-300 shadow-sm hover:shadow-[0_4px_15px_rgba(229,57,53,0.3)] hover:-translate-y-0.5"
          >
            View All Specifications
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_24px_rgba(30,58,138,0.08)] hover:shadow-[0_12px_40px_rgba(30,58,138,0.18)] transition-all duration-500"
            >
              {/* Image with zoom effect */}
              <img
                src={product.img}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark premium blue/black gradient overlay for maximum readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24]/95 via-[#0A0F24]/60 to-transparent z-10 transition-all duration-500" />

              {/* Red hover border (#E53935) */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E53935]/80 rounded-2xl z-30 transition-colors duration-500 pointer-events-none" />

              {/* Badge with red background */}
              {product.tag && (
                <div className="absolute top-5 right-5 z-20 bg-[#E53935] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                  {product.tag}
                </div>
              )}

              {/* Content area */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Red accent line */}
                  <div className="w-8 h-1 bg-[#E53935] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-xl font-heading font-bold text-white mb-2 leading-snug">
                    {product.title}
                  </h3>
                  
                  {/* Short Description - shown on hover */}
                  <p className="text-gray-300 font-light text-sm mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 leading-relaxed">
                    {product.desc}
                  </p>
                  
                  {/* Action Link with red color */}
                  <span className="inline-flex items-center text-[#E53935] font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 gap-1.5">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}