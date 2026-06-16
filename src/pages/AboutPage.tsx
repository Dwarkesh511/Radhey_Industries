import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Eye, Target } from "lucide-react";
import aboutFacility from "@/assets/about-facility.jpg";

export default function AboutPage() {
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...sectionEntry}>
              <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
                Who We Are
              </span>
              <p className="text-lg gt-text-secondary mb-6 font-light leading-[1.8]">
                Radhey Industries is a trusted manufacturer of high-precision rotogravure cylinders, serving the printing and packaging industry with reliable engraving solutions. Backed by expertise in electronic, chemical, and mechanical engraving technologies, we combine advanced manufacturing practices with a skilled technical team to deliver products that meet international quality standards.
              </p>
              <a href="/products" className="inline-block px-8 py-4 bg-[#ED3237] text-white rounded-lg font-semibold hover:bg-[#C62828] transition-all duration-300 shadow-[0_10px_30px_rgba(237,50,55,0.22)] hover:shadow-[0_14px_40px_rgba(237,50,55,0.30)] hover:-translate-y-[3px] uppercase tracking-wide text-sm">
                Explore Products
              </a>
            </motion.div>
            <motion.div {...sectionEntry} className="w-full aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={aboutFacility}
                alt="Radhey Industries facility"
                className="w-full h-full object-cover object-center block"
              />
            </motion.div>
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
                 To be a leading and trusted manufacturer of rotogravure cylinders, recognized for innovation, precision engineering, and excellence in printing solutions while setting industry benchmarks in quality, reliability, and customer satisfaction.
               </p>
             </motion.div>
             <motion.div {...sectionEntry} className="glass-card p-10 rounded-lg">
               <Target className="w-12 h-12 text-[#3F3D99] mb-6" />
               <h3 className="text-3xl font-heading font-bold gt-text-primary mb-4">Our Mission</h3>
               <p className="gt-text-secondary text-lg font-light leading-relaxed">
                 To provide high-quality and cost-effective printing solutions that meet international standards through advanced engraving technologies, continuous innovation, and expert technical support. We are committed to delivering customized products, superior service, and timely solutions that help our customers achieve outstanding printing performance.
               </p>
             </motion.div>
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

    </PageLayout>
  );
}
