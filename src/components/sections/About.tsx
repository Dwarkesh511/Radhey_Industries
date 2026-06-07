import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutFacility from "@/assets/about-facility.jpg";
import { CheckCircle2 } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const highlights = [
    "ISO 9001:2015 Certified Manufacturing",
    "State-of-the-art TRUMPF Laser Technology",
    "Sub-micron tolerance precision",
    "24/7 production facility",
  ];

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">About RADHEY Industries</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#3F3D99] mb-6 leading-tight">
              Precision Engineering.<br />
              <span className="text-[#1F2937]">Global Trust.</span>
            </h2>
            <p className="text-[#4B5563] text-lg mb-6 leading-relaxed font-light">
              For over two decades, we have been at the forefront of rotogravure cylinder manufacturing.
              Combining state-of-the-art TRUMPF laser technology with unparalleled engineering expertise,
              we deliver cylinders that redefine print quality and durability.
            </p>
            <p className="text-[#4B5563] mb-10 leading-relaxed font-light">
              Our facilities operate 24/7, turning raw steel and copper into instruments of microscopic
              precision. Every cylinder undergoes rigorous optical inspection, ensuring sub-micron
              tolerances for the most demanding packaging and decorative applications.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1F2937] text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#3F3D99] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-[#E8E8F5] pt-8">
              {[
                { value: 20, suffix: "+", label: "Years Experience" },
                { value: 500, suffix: "+", label: "Global Clients" },
                { value: 99, suffix: "%", label: "Precision Rate" },
              ].map((stat, i) => (
                <div key={i}>
                  <h4 className="text-3xl font-heading font-extrabold text-[#3F3D99] mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </h4>
                  <p className="text-[#6B7280] text-xs uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[580px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={aboutFacility}
              alt="RADHEY Industries Manufacturing Facility"
              className="w-full h-full object-cover block object-center scale-[1.03] hover:scale-[1.08] transition-transform duration-700"
              id="about-facility-image"
            />

            {/* Top-right tag */}
            <div className="absolute top-6 right-6 bg-[#ED3237] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider z-20 shadow-lg">
              Since 2002
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}