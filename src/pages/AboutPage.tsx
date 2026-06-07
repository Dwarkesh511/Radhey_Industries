import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Eye, Target, Shield, Award } from "lucide-react";
import aboutFacility from "@/assets/about-facility.jpg";

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

export default function AboutPage() {
  const sectionEntry = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
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
            <span className="text-[#3F3D99]">About Us</span>
          </div>
          
          <motion.div {...sectionEntry}>
            <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight max-w-4xl">
              Engineering Precision For Modern <span className="text-gradient">Printing Industries</span>
            </h1>
            <p className="text-lg md:text-xl gt-text-secondary font-light max-w-2xl">
              A world-class rotogravure cylinder manufacturer committed to delivering uncompromising quality and innovation since decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 gt-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...sectionEntry}>
              <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
                Who We Are
              </span>
              <p className="text-xl gt-text-secondary mb-6 font-light leading-relaxed">
                Gravure Tech is a premier manufacturer of high-precision rotogravure cylinders. Founded with a vision to redefine printing standards, we combine German engineering principles with advanced manufacturing capabilities to produce cylinders that set industry benchmarks.
              </p>
              <p className="text-lg gt-text-secondary mb-10 font-light leading-relaxed">
                Our global operations span across 50+ countries, serving diverse sectors including packaging, decorative laminates, coating, and specialty printing. With a relentless focus on innovation, we continuously invest in state-of-the-art technologies and human capital to stay ahead of the curve.
              </p>
              <a href="/products" className="inline-block px-8 py-4 bg-[#ED3237] text-white rounded-lg font-semibold hover:bg-[#C62828] transition-all duration-300 shadow-[0_10px_30px_rgba(237,50,55,0.22)] hover:shadow-[0_14px_40px_rgba(237,50,55,0.30)] hover:-translate-y-[3px] uppercase tracking-wide text-sm">
                Explore Products
              </a>
            </motion.div>
            
            <motion.div variants={containerVariants} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-4">
              <motion.div variants={containerVariants} className="glass-card p-6 rounded-lg relative overflow-hidden group">
                 <h3 className="text-2xl font-heading font-bold gt-text-primary mb-1">Founded 2002</h3>
                 <p className="gt-text-secondary text-sm">Two decades of excellence.</p>
              </motion.div>
              <motion.div variants={containerVariants} className="glass-card p-6 rounded-lg relative overflow-hidden group">
                 <h3 className="text-2xl font-heading font-bold gt-text-primary mb-1">ISO 9001:2015 Certified</h3>
                 <p className="gt-text-secondary text-sm">Rigorous quality standards.</p>
              </motion.div>
              <motion.div variants={containerVariants} className="glass-card p-6 rounded-lg relative overflow-hidden group">
                 <h3 className="text-2xl font-heading font-bold gt-text-primary mb-1">50+ Export Countries</h3>
                 <p className="gt-text-secondary text-sm">Global reach and trust.</p>
              </motion.div>
              <motion.div variants={containerVariants} className="p-8 rounded-lg bg-gradient-to-br from-[#2D2B7A] to-[#3F3D99] flex items-center justify-center min-h-[160px]">
                 <span className="text-3xl font-heading font-bold text-white tracking-wider">Precision Engineering</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 gt-bg-primary">
        <div className="container mx-auto px-6">
          <motion.div {...sectionEntry} className="mb-16">
             <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
                Company Milestones
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight">
                A Legacy <span className="text-gradient">of Precision</span>
              </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { year: "2002", title: "Company Founded", desc: "Established with a vision to redefine rotogravure cylinder manufacturing" },
              { year: "2006", title: "First Export Order", desc: "Successfully delivered first international order to Southeast Asia" },
              { year: "2010", title: "ISO Certification", desc: "Achieved ISO 9001:2015 quality management certification" },
              { year: "2014", title: "Laser Engraving", desc: "Installed state-of-the-art laser engraving machinery" },
              { year: "2018", title: "Capacity Expansion", desc: "Doubled production capacity to 30,000 cylinders per year" },
              { year: "2023", title: "Global Leader", desc: "Recognized as a leading exporter across 50+ countries" }
            ].map((milestone, idx) => (
              <motion.div key={idx} {...sectionEntry} className="flex flex-col md:flex-row gap-6 mb-8 group">
                <div className="md:w-32 flex-shrink-0 md:text-right pt-4">
                  <span className="text-[#3F3D99] text-2xl font-heading font-bold">{milestone.year}</span>
                </div>
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#3F3D99] mt-5 shadow-[0_10px_30px_rgba(63,61,153,0.22)]"></div>
                  {idx !== 5 && <div className="w-[2px] h-full transition-colors mt-2" style={{ backgroundColor: "var(--gt-border)" }}></div>}
                </div>
                <div className="flex-1 glass-card p-6 rounded-lg transition-all group-hover:border-[#ED3237]/35">
                  <h3 className="text-xl font-heading font-bold gt-text-primary mb-2">{milestone.title}</h3>
                  <p className="gt-text-secondary font-light">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 gt-bg-secondary">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-8">
             <motion.div {...sectionEntry} className="glass-card p-10 rounded-lg">
               <Eye className="w-12 h-12 text-[#3F3D99] mb-6" />
               <h3 className="text-3xl font-heading font-bold gt-text-primary mb-4">Our Vision</h3>
               <p className="gt-text-secondary text-lg font-light leading-relaxed">
                 To be the world's most trusted and innovative manufacturer of rotogravure cylinders, setting the standard for precision, durability, and printing excellence across all industries globally.
               </p>
             </motion.div>
             <motion.div {...sectionEntry} className="glass-card p-10 rounded-lg">
               <Target className="w-12 h-12 text-[#3F3D99] mb-6" />
               <h3 className="text-3xl font-heading font-bold gt-text-primary mb-4">Our Mission</h3>
               <p className="gt-text-secondary text-lg font-light leading-relaxed">
                 To deliver uncompromising precision and quality by continuously investing in advanced technologies, optimizing our manufacturing processes, and providing tailored solutions that empower our clients to achieve flawless printing results.
               </p>
             </motion.div>
           </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-24 gt-bg-primary border-y" style={{ borderColor: "var(--gt-border)" }}>
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
             <div className="glass-card p-6 rounded-lg relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-[#3F3D99] opacity-60 group-hover:bg-[#ED3237] transition-colors" />
                <h3 className="text-4xl font-heading font-bold gt-text-primary mb-2 flex items-baseline">
                  <Counter value={20} suffix="+" />
                </h3>
                <p className="gt-text-secondary text-sm uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="glass-card p-6 rounded-lg relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-[#3F3D99] opacity-60 group-hover:bg-[#ED3237] transition-colors" />
                <h3 className="text-4xl font-heading font-bold gt-text-primary mb-2 flex items-baseline">
                  <Counter value={30000} suffix="+" />
                </h3>
                <p className="gt-text-secondary text-sm uppercase tracking-wider">Cylinders/Year</p>
              </div>
              <div className="glass-card p-6 rounded-lg relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-[#3F3D99] opacity-60 group-hover:bg-[#ED3237] transition-colors" />
                <h3 className="text-4xl font-heading font-bold gt-text-primary mb-2 flex items-baseline">
                  <Counter value={99} suffix="%" />
                </h3>
                <p className="gt-text-secondary text-sm uppercase tracking-wider">Precision Rate</p>
              </div>
              <div className="glass-card p-6 rounded-lg relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-[#3F3D99] opacity-60 group-hover:bg-[#ED3237] transition-colors" />
                <h3 className="text-4xl font-heading font-bold gt-text-primary mb-2 flex items-baseline">
                  <Counter value={50} suffix="+" />
                </h3>
                <p className="gt-text-secondary text-sm uppercase tracking-wider">Countries</p>
              </div>
           </div>
           
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...sectionEntry}>
                <h3 className="text-3xl font-heading font-bold gt-text-primary mb-4">Unmatched Capacity</h3>
                <p className="gt-text-secondary font-light leading-relaxed">
                  Our fully integrated manufacturing facility spans over 100,000 sq ft, equipped with automated plating lines and multiple high-speed engraving machines. This robust infrastructure allows us to handle high-volume orders without compromising on turnaround time or quality.
                </p>
              </motion.div>
              <motion.div {...sectionEntry} className="h-64 md:h-80 rounded-lg border relative overflow-hidden flex items-center justify-center shadow-lg" style={{ borderColor: "var(--gt-border)" }}>
                 <img
                   src={aboutFacility}
                   alt="Manufacturing Facility"
                   className="w-full h-full object-cover block object-center scale-[1.03] hover:scale-[1.08] transition-transform duration-700"
                 />
              </motion.div>
           </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 gt-bg-secondary">
         <div className="container mx-auto px-6">
           <motion.div {...sectionEntry} className="text-center mb-16">
              <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
                Worldwide Reach
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight">
                Serving Industries <span className="text-gradient">Across The Globe</span>
              </h2>
           </motion.div>

           <motion.div {...sectionEntry} className="w-full h-80 mb-12 rounded-2xl gt-bg-primary border relative overflow-hidden flex items-center justify-center shadow-inner" style={{ borderColor: "var(--gt-border)" }}>
             {/* Abstract Map Visualization */}
             <div className="absolute w-full h-full opacity-30 flex flex-wrap gap-2 justify-center items-center p-8">
               {Array.from({length: 200}).map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${Math.random() > 0.7 ? 'bg-[#3F3D99] shadow-[0_10px_24px_rgba(63,61,153,0.18)]' : 'bg-[var(--gt-text-primary)] opacity-20'}`} />
               ))}
             </div>
             <div className="z-10 text-center">
               <p className="text-2xl font-heading font-bold gt-text-primary tracking-widest">GLOBAL EXPORT NETWORK</p>
             </div>
           </motion.div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {['Asia Pacific', 'Europe', 'Middle East', 'Americas', 'Africa', 'Oceania'].map((region, i) => (
               <motion.div key={i} {...sectionEntry} className="glass-card p-4 rounded-lg text-center group">
                <p className="gt-text-primary font-medium mb-2 group-hover:text-[#2D2B7A] transition-colors">{region}</p>
                <div className="w-8 h-[2px] bg-[#3F3D99]/35 mx-auto group-hover:w-12 transition-all"></div>
               </motion.div>
             ))}
           </div>
         </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 gt-bg-primary">
        <div className="container mx-auto px-6">
          <motion.div {...sectionEntry} className="mb-16">
            <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
              Our Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight">
              Guided by <span className="text-gradient">Experts</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajan Mehta", title: "Founder & CEO", desc: "25+ years in cylinder manufacturing and strategic business expansion." },
              { name: "Priya Sharma", title: "Head of Technology", desc: "Expert in laser engraving systems and digital imaging processes." },
              { name: "Arjun Patel", title: "Export Director", desc: "Managing global client relationships and international logistics." }
            ].map((leader, i) => (
              <motion.div key={i} {...sectionEntry} className="glass-card p-8 rounded-lg text-center group">
                <div className="w-32 h-32 mx-auto rounded-full mb-6 bg-gradient-to-tr from-gray-500 to-gray-300 group-hover:from-[#3F3D99] group-hover:to-[#5856C2] transition-all duration-500 shadow-lg" />
                <h3 className="text-2xl font-heading font-bold gt-text-primary mb-1">{leader.name}</h3>
                <p className="text-[#3F3D99] text-sm font-medium uppercase tracking-wider mb-4">{leader.title}</p>
                <p className="gt-text-secondary font-light text-sm">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 gt-bg-secondary">
        <div className="container mx-auto px-6">
           <motion.div {...sectionEntry} className="mb-16 text-center">
             <h2 className="text-4xl font-heading font-extrabold gt-text-primary mb-4 tracking-tight">Certified Excellence</h2>
             <p className="gt-text-secondary max-w-2xl mx-auto font-light">Recognized globally for our commitment to quality, environmental responsibility, and manufacturing standards.</p>
           </motion.div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "ISO 9001:2015", desc: "Quality Management", icon: Shield },
               { title: "ISO 14001", desc: "Environmental Management", icon: Shield },
               { title: "CE Certified", desc: "European Compliance", icon: Shield },
               { title: "Export Excellence", desc: "Ministry of Commerce", icon: Award }
            ].map((cert, i) => (
              <motion.div key={i} {...sectionEntry} className="glass-card p-6 rounded-lg flex flex-col items-center text-center group transition-all hover:border-[#ED3237]/35 hover:shadow-[0_14px_40px_rgba(63,61,153,0.12)]">
                <cert.icon className="w-10 h-10 gt-text-muted group-hover:text-[#ED3237] mb-4 transition-colors" />
                 <h4 className="text-lg font-heading font-bold gt-text-primary mb-1">{cert.title}</h4>
                 <p className="gt-text-secondary text-sm">{cert.desc}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

    </PageLayout>
  );
}
