import { motion } from "framer-motion";

const features = [
  {
    title: "Material Quality",
    desc: "Premium forged steel cores overlaid with high-purity electrolytic copper and hard industrial chrome.",
    spec: "Steel + Cu + Cr"
  },
  {
    title: "Dimensional Tolerance",
    desc: "Machined and balanced to exact specifications, ensuring perfect register and smooth running.",
    spec: "±0.001mm"
  },
  {
    title: "Surface Finish",
    desc: "Polished to a flawless mirror finish, providing optimal ink release and blade wear resistance.",
    spec: "Ra 0.1μm"
  }
];

const sectionEntry = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

interface BuiltToOutperformProps {
  className?: string;
}

export default function BuiltToOutperform({ className = "" }: BuiltToOutperformProps) {
  return (
    <section className={`py-24 gt-bg-primary ${className}`}>
      <div className="container mx-auto px-6">
        <motion.div {...sectionEntry} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold gt-text-primary mb-4 tracking-tight">
            Built to Outperform
          </h2>
          <p className="gt-text-secondary font-light max-w-2xl mx-auto">
            Every cylinder is a masterpiece of metallurgical and mechanical engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              {...sectionEntry}
              className="glass-card p-8 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8E8F5] rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150" />
              <h3 className="text-2xl font-heading font-bold gt-text-primary mb-2">{feature.title}</h3>
              <span className="text-[#3F3D99] font-mono text-sm block mb-4">{feature.spec}</span>
              <p className="gt-text-secondary font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
