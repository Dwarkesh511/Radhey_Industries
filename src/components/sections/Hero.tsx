import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
import Marquee from "@/components/sections/Marquee";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark Blue Overlay Gradient */}
      <div className="absolute inset-0 z-0 hero-overlay" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-0 gt-grid-bg opacity-30 animate-grid" />

      {/* Blue orb decorations */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3F3D99] rounded-full filter blur-[180px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#5856C2] rounded-full filter blur-[140px] opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Accent line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 72 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="h-1 bg-[#ED3237] mb-8 rounded-full"
          />

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
          >
            <span className="text-[0.82em] md:text-[0.78em] lg:text-[0.74em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-100">
              IMAGINE Your Dream
              <br />
              We Convert in HD IMAGE
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed"
          >
            High-performance rotogravure cylinder manufacturing solutions engineered for packaging,
            décor, coating, and printing industries worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="btn-primary group"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="#technology"
              className="px-6 py-3 bg-[#ED3237] text-white rounded-md font-semibold text-sm hover:bg-[#C62828] transition-all duration-300 shadow-[0_4px_14px_rgba(237,50,55,0.30)] hover:shadow-[0_6px_20px_rgba(237,50,55,0.40)] hover:-translate-y-[3px] uppercase tracking-wide inline-block"
            >
              Explore Technology
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Spec Cards */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 space-y-3 z-20">
        {[
          { label: "Surface Roughness", value: "Ra 0.1 μm" },
          { label: "Diameter Tolerance", value: "±0.001 mm" },
          { label: "Chrome Thickness", value: "10–12 µm" },
          { label: "Max Speed", value: "400 m/min" },
        ].map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.15 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl text-right border-r-[3px] border-r-[#ED3237]"
          >
            <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{spec.label}</p>
            <p className="text-white font-heading font-bold text-sm">{spec.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-white/40 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </div>

      {/* Marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Marquee />
      </div>
    </section>
  );
}
