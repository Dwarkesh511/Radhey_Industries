import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Design & Consult", desc: "Digital prepress, colour separation & technical proofing" },
  { num: "02", title: "Base Preparation", desc: "Forged steel core CNC turning & dynamic balancing" },
  { num: "03", title: "Copper Plating", desc: "Automated electrolytic copper deposition, 200μm" },
  { num: "04", title: "Laser Engraving", desc: "Sub-micron cell geometry using fibre laser systems" },
  { num: "05", title: "Chrome Finishing", desc: "Hard chrome 8–12μm for maximum print durability" },
  { num: "06", title: "Quality Release", desc: "100% optical cell measurement & press proofing" },
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="section-label">Workflow</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#3F3D99]">
            Our Manufacturing Process
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-7 left-0 w-full h-[2px] hidden md:block bg-[#E8E8F5]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#3F3D99] to-[#5856C2]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Vertical connecting line (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-[-2rem] w-[2px] bg-[#E8E8F5] md:hidden" />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-row md:flex-col items-start gap-5 md:gap-0 z-10"
                >
                  {/* Step circle */}
                  <div className="relative md:mx-auto md:mb-5 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#E8E8F5] border-2 border-[#3F3D99] flex items-center justify-center font-heading font-bold text-[#3F3D99] text-sm relative z-10
                                    group-hover:bg-[#3F3D99] group-hover:text-white group-hover:shadow-[0_4px_20px_rgba(63,61,153,0.35)] transition-all duration-300">
                      {step.num}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="md:text-center mt-1 md:mt-0">
                    <h4 className="text-base font-bold text-[#1F2937] mb-1.5 group-hover:text-[#3F3D99] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}