import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Search, Activity, Scan, Ruler } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const end = value;
        const duration = 2000;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function QualityPage() {
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
            <span className="text-[#3F3D99]">Quality</span>
          </div>
          
          <motion.div {...sectionEntry}>
            <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
              Quality Assurance
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight max-w-4xl">
              Precision Verified <span className="text-gradient">At Every Stage</span>
            </h1>
            <p className="text-lg md:text-xl gt-text-secondary font-light max-w-2xl">
              Our uncompromising quality standards ensure that every cylinder leaving our facility performs flawlessly under the most demanding print conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inspection Process Timeline */}
      <section className="py-24 gt-bg-primary">
        <div className="container mx-auto px-6">
          <motion.div {...sectionEntry} className="mb-16 text-center">
             <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight">
                From Raw Material <span className="text-gradient">To Perfection</span>
              </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px]" style={{ backgroundColor: "var(--gt-border)" }} />
            <div className="absolute left-[27px] md:left-1/2 top-0 h-1/2 w-[2px] bg-[#ED3237] shadow-[0_0_14px_rgba(237,50,55,0.35)]" />

            {[
              { num: "01", title: "Raw Material Inspection", desc: "Incoming steel and copper verified against metallurgical specs for purity and strength." },
              { num: "02", title: "Surface Preparation", desc: "Multi-stage cleaning, turning, and conditioning to achieve perfect concentricity." },
              { num: "03", title: "Copper Plating", desc: "Electrolytic deposition with automated thickness control for ideal engraving hardness." },
              { num: "04", title: "Precision Engraving", desc: "Laser engraving at sub-micron accuracy, constantly monitored by optical sensors." },
              { num: "05", title: "Chrome Plating", desc: "Hard chrome application for maximum surface durability and blade wear resistance." },
              { num: "06", title: "Final Testing", desc: "100% optical cell inspection, profilometer testing, and dynamic balance certification." }
            ].map((step, idx) => (
              <motion.div key={idx} {...sectionEntry} className={`relative flex items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 <div className={`ml-16 md:ml-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="glass-card p-6 rounded-lg hover:border-[#ED3237]/30 transition-colors">
                      <h3 className="text-xl font-heading font-bold gt-text-primary mb-2">{step.title}</h3>
                      <p className="gt-text-secondary font-light text-sm">{step.desc}</p>
                    </div>
                 </div>
                 <div className="absolute left-0 md:left-1/2 w-14 h-14 gt-bg-secondary border-2 border-[#3F3D99] rounded-full flex items-center justify-center transform md:-translate-x-1/2 shadow-[0_10px_30px_rgba(63,61,153,0.18)] z-10">
                   <span className="gt-text-primary font-bold">{step.num}</span>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statistics */}
      <section className="py-20 bg-[#3F3D99] relative overflow-hidden">
         <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
               <div>
                 <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 drop-shadow-md"><Counter value={99} />%</h3>
                 <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Precision Rate</p>
               </div>
               <div>
                 <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 drop-shadow-md">0.001<span className="text-2xl">mm</span></h3>
                 <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Tolerance</p>
               </div>
               <div>
                 <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 drop-shadow-md"><Counter value={100} />%</h3>
                 <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Inspection</p>
               </div>
               <div>
                 <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 drop-shadow-md">24/7</h3>
                 <p className="text-white/80 font-medium uppercase tracking-wider text-sm">Monitoring</p>
               </div>
            </div>
         </div>
      </section>

      {/* Laboratory & Equipment */}
      <section className="py-24 gt-bg-secondary">
        <div className="container mx-auto px-6">
           <motion.div {...sectionEntry} className="mb-16">
             <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
                Advanced Facilities
              </span>
              <h2 className="text-4xl font-heading font-extrabold gt-text-primary mb-6">Metrology Laboratory</h2>
           </motion.div>

           <div className="grid md:grid-cols-2 gap-6">
             {[
               { icon: Activity, name: "Profilometer", desc: "Measures surface roughness down to Ra 0.01μm ensuring optimal ink release capabilities." },
               { icon: Scan, name: "CMM Machine", desc: "Coordinate Measuring Machine verifies dimensional geometry and perfect concentricity." },
               { icon: Search, name: "Optical Comparator", desc: "High-resolution visual inspection system for microscopic cell structure verification." },
               { icon: Ruler, name: "Thickness Tester", desc: "Eddy-current based precise measurement of copper and chrome plating layers." }
             ].map((equip, i) => (
               <motion.div key={i} {...sectionEntry} className="glass-card p-8 rounded-lg flex gap-6 group hover:border-[#ED3237]/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-[#E8E8F5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#3F3D99] transition-colors">
                     <equip.icon className="w-8 h-8 text-[#3F3D99] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold gt-text-primary mb-2">{equip.name}</h3>
                    <p className="gt-text-secondary font-light text-sm">{equip.desc}</p>
                  </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 gt-bg-primary">
         <div className="container mx-auto px-6">
            <motion.div {...sectionEntry} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold gt-text-primary mb-4">Why Our Quality Is Different</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
               {[
                 { prob: "Inconsistent ink transfer causing print defects", sol: "Laser-perfected cell geometry for 100% uniform volume laydown" },
                 { prob: "Premature cylinder wear reducing run life", sol: "High-hardness industrial chrome plating extending life by 40%" },
                 { prob: "Concentricity issues causing press vibration", sol: "Dynamic balancing at operating speeds for flawlessly smooth running" }
               ].map((comp, i) => (
                 <motion.div key={i} {...sectionEntry} className="glass-card rounded-lg flex flex-col md:flex-row overflow-hidden">
                    <div className="p-6 md:w-1/2 bg-black/5 dark:bg-white/5">
                      <p className="gt-text-secondary text-sm font-medium uppercase mb-2">Standard Industry</p>
                      <p className="gt-text-secondary">{comp.prob}</p>
                    </div>
                    <div className="w-full md:w-1 bg-[#ED3237]/25 h-1 md:h-auto" />
                    <div className="p-6 md:w-1/2 bg-[#E8E8F5]">
                      <p className="text-[#3F3D99] text-sm font-medium uppercase mb-2">Gravure Tech Standard</p>
                      <p className="gt-text-primary font-medium">{comp.sol}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

    </PageLayout>
  );
}
