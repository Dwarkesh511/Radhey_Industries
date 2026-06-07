import { motion } from "framer-motion";
import packagingImg from "@/assets/product-packaging.png";
import decorativeImg from "@/assets/product-decorative.png";
import coatingImg from "@/assets/product-coating.png";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Packaging Cylinders",
    desc: "High-resolution cylinders for flexible packaging, ensuring vibrant colors and sharp text.",
    img: packagingImg,
    tag: "Most Popular",
  },
  {
    title: "Decorative Cylinders",
    desc: "Seamless continuous patterns for woodgrain, marble, and abstract décor printing.",
    img: decorativeImg,
    tag: null,
  },
  {
    title: "Coating & Lamination",
    desc: "Precision engraved rollers for adhesive application, cold seal, and specialized coatings.",
    img: coatingImg,
    tag: null,
  },
  {
    title: "Embossing Rollers",
    desc: "Textured cylinders for adding premium tactile finishes to various substrates.",
    img: packagingImg,
    tag: null,
  },
  {
    title: "Specialty Printing",
    desc: "Custom engineered cylinders for security printing, electronics, and technical applications.",
    img: decorativeImg,
    tag: "Custom",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#3F3D99]">
              Our Products
            </h2>
          </div>
          <a
            href="/products"
            className="btn-secondary flex items-center gap-2 group text-sm"
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
              className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_24px_rgba(63,61,153,0.10)] hover:shadow-[0_12px_40px_rgba(63,61,153,0.20)] transition-all duration-500"
            >
              {/* Image */}
              <img
                src={product.img}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Dark blue gradient overlay — always present */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E4F]/90 via-[#1E1E4F]/40 to-transparent z-10 group-hover:via-[#1E1E4F]/30 transition-all duration-500" />

              {/* Red hover border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED3237]/60 rounded-2xl z-30 transition-colors duration-500 pointer-events-none" />

              {/* Badge */}
              {product.tag && (
                <div className="absolute top-5 right-5 z-20 bg-[#ED3237] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  {product.tag}
                </div>
              )}

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Red accent line */}
                  <div className="w-8 h-1 bg-[#ED3237] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 font-light text-sm mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 leading-relaxed">
                    {product.desc}
                  </p>
                  <span className="inline-flex items-center text-[#ED3237] font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 gap-1.5">
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