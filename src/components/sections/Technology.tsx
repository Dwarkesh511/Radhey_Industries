import { motion } from "framer-motion";
import { Zap, ShieldCheck, Target, Settings, Activity, Search } from "lucide-react";

const technologies = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Laser Engraving",
    desc: "Direct laser interference patterning using cutting-edge fiber lasers for high-resolution cell structures.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Chrome Plating",
    desc: "Advanced hard chrome deposition ensuring maximum wear resistance and extended cylinder lifespan.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "CNC Machining",
    desc: "Multi-axis CNC turning and milling achieving sub-micron geometric tolerances.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Dynamic Balancing",
    desc: "Computerized high-speed balancing for completely vibration-free operation at maximum press speeds.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Copper Plating",
    desc: "Fully automated electrolytic deposition creating a flawless, homogeneous copper layer.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Quality Inspection",
    desc: "3D optical measurement systems verifying cell volume, depth, and geometry across the entire surface.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Technology() {
  return (
    <section id="technology" className="py-28 bg-[#3F3D99] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2D2B7A]/40 rounded-full pointer-events-none blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-4 bg-[#ED3237]/20 border border-[#ED3237]/30 rounded-full text-[#ED3237] text-xs font-bold uppercase tracking-[0.2em] mb-5">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Engineering Excellence
          </h2>
          <p className="text-white/70 text-lg font-light leading-relaxed">
            We employ the most advanced manufacturing technologies in the industry, continuously
            investing in next-generation equipment to push the boundaries of print quality.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/8 backdrop-blur-sm border border-white/12 p-8 rounded-2xl hover:bg-white/15 hover:border-white/25 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Red top accent line on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-[#ED3237] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              {/* Icon box */}
              <div className="w-14 h-14 bg-white/15 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ED3237] group-hover:shadow-[0_4px_20px_rgba(237,50,55,0.35)] transition-all duration-300">
                {tech.icon}
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-white transition-colors">
                {tech.title}
              </h3>

              <p className="text-white/65 font-light leading-relaxed text-sm">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}