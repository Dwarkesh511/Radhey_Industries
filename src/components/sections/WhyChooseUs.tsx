import { motion } from "framer-motion";
import { Crosshair, Cpu, Zap, Factory, Award, Users } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";

const features = [
  {
    icon: <Crosshair className="w-6 h-6" />,
    title: "Precision Engineering",
    desc: "Sub-micron tolerances achieved through advanced CNC and laser technology.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Advanced Technology",
    desc: "State-of-the-art TRUMPF lasers and fully automated plating lines.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Delivery",
    desc: "Optimized workflows ensuring rapid turnaround times globally.",
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "In-house Manufacturing",
    desc: "End-to-end production under one roof for complete quality control.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "ISO Quality Standards",
    desc: "Certified processes guaranteeing consistent premium results.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Experienced Team",
    desc: "Decades of combined expertise in rotogravure cylinder production.",
  },
];

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const { ref, transform, handleMouseMove, handleMouseLeave } = useTilt(5);

  return (
    <motion.div
      ref={ref}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white border border-[#E8E8F5] p-8 rounded-2xl overflow-hidden
                 shadow-[0_2px_16px_rgba(63,61,153,0.07)]
                 hover:shadow-[0_8px_32px_rgba(63,61,153,0.14)]
                 hover:-translate-y-2 transition-all duration-300 cursor-default"
    >
      {/* Red bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ED3237] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-2xl" />

      {/* Subtle sweep animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3F3D99]/0 to-[#3F3D99]/0 group-hover:from-[#E8E8F5]/60 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="icon-box-primary mb-6 group-hover:bg-[#3F3D99] group-hover:text-white transition-colors duration-300">
          {feature.icon}
        </div>

        <h3 className="text-xl font-heading font-bold text-[#3F3D99] mb-3">
          {feature.title}
        </h3>
        <p className="text-[#6B7280] font-light leading-relaxed text-sm">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#F8FAFC] relative">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3F3D99] via-[#5856C2] to-[#3F3D99]" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-label">Advantages</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#3F3D99] mb-6">
            Why Choose Us
          </h2>
          <p className="text-[#6B7280] font-light text-lg leading-relaxed">
            We deliver uncompromising quality, speed, and precision for every single cylinder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
