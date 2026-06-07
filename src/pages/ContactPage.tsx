import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Phone, Mail, MapPin, Globe, ArrowRight, ChevronDown } from "lucide-react";
import { contactAddress, contactDetails, contactPhones } from "@/lib/contactDetails";

export default function ContactPage() {
  const sectionEntry = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "What is the minimum order quantity?", a: "We accept orders starting from a single cylinder. Our flexible manufacturing setup allows us to cater to both prototyping needs and large-scale bulk orders efficiently." },
    { q: "What materials are used?", a: "We use high-grade forged steel cores overlaid with electrolytic copper and finished with hard industrial chrome plating for maximum durability and print longevity." },
    { q: "What is the delivery timeline?", a: "Standard cylinder orders are typically fulfilled within 7-10 working days. Custom engineering or highly specialized orders may take 14-21 days. Express dispatch is available upon request." },
    { q: "Do you offer international shipping?", a: "Yes, we export to 50+ countries worldwide. We handle robust export packaging, international logistics, and provide comprehensive documentation support." },
    { q: "What quality certifications do you hold?", a: "We hold ISO 9001:2015 for quality management, ISO 14001 for environmental management, CE certification, and have been recognized with national export excellence awards." },
    { q: "Can you manufacture to custom specifications?", a: "Absolutely. We provide complete custom engineering. You can provide us with technical drawings, or our engineering team can design the cylinder specifications based on your press requirements." }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-24 overflow-hidden gt-bg-primary">
        <div className="absolute inset-0 gt-grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3F3D99] rounded-full mix-blend-screen filter blur-[150px] animate-pulse" style={{ opacity: "var(--gt-orb-opacity)" }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-8 text-sm font-medium">
            <span className="gt-text-muted">Home</span>
            <span className="mx-2 gt-text-muted">&gt;</span>
            <span className="text-[#3F3D99]">Contact</span>
          </div>
          
          <motion.div {...sectionEntry} className="max-w-3xl">
            <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight">
              Let's Build Precision <span className="text-gradient">Together</span>
            </h1>
            <p className="text-lg md:text-xl gt-text-secondary font-light">
              Connect with our engineering team for custom rotogravure cylinder solutions, quotes, and technical support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 gt-bg-secondary -mt-12 relative z-20">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Phone, label: "Phone", value: contactPhones },
                { icon: Mail, label: "Email", value: contactDetails.emails[0] },
                { icon: MapPin, label: "Address", value: contactAddress },
                { icon: Globe, label: "Design Studio", value: contactDetails.emails[1] }
              ].map((info, i) => (
                <motion.div key={i} {...sectionEntry} className="glass-card p-6 rounded-lg flex items-center gap-4 group hover:border-[#ED3237]/35 transition-colors">
                   <div className="w-12 h-12 rounded-full border border-[rgba(63,61,153,0.22)] flex items-center justify-center bg-[#E8E8F5] group-hover:bg-[#3F3D99] transition-colors shadow-[0_8px_24px_rgba(63,61,153,0.12)] shrink-0">
                      <info.icon className="w-5 h-5 text-[#3F3D99] group-hover:text-white transition-colors" />
                   </div>
                   <div className="min-w-0 flex-1">
                      <p className="gt-text-secondary text-xs uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="gt-text-primary font-medium text-xs sm:text-sm break-words leading-snug">{info.value}</p>
                   </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 gt-bg-primary">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-12">
              <motion.div {...sectionEntry} className="glass-card p-8 md:p-10 rounded-xl">
                 <h2 className="text-3xl font-heading font-bold gt-text-primary mb-2">Request a Quote</h2>
                 <p className="gt-text-secondary font-light mb-8">Fill out the form below and our technical sales team will get back to you within 24 hours.</p>
                 
                 <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                       <div>
                         <label className="block text-sm font-medium gt-text-secondary mb-2">Full Name</label>
                         <input type="text" placeholder="John Doe" className="gt-input w-full rounded-lg px-4 py-3 border focus:outline-none transition-colors" />
                       </div>
                       <div>
                         <label className="block text-sm font-medium gt-text-secondary mb-2">Company</label>
                         <input type="text" placeholder="Acme Print Ltd." className="gt-input w-full rounded-lg px-4 py-3 border focus:outline-none transition-colors" />
                       </div>
                       <div>
                         <label className="block text-sm font-medium gt-text-secondary mb-2">Email Address</label>
                         <input type="email" placeholder="john@example.com" className="gt-input w-full rounded-lg px-4 py-3 border focus:outline-none transition-colors" />
                       </div>
                       <div>
                         <label className="block text-sm font-medium gt-text-secondary mb-2">Phone Number</label>
                         <input type="tel" placeholder="+1 (555) 000-0000" className="gt-input w-full rounded-lg px-4 py-3 border focus:outline-none transition-colors" />
                       </div>
                    </div>
                    
                    <div>
                       <label className="block text-sm font-medium gt-text-secondary mb-2">Requirement Type</label>
                       <select className="gt-input w-full rounded-lg px-4 py-3 border focus:outline-none transition-colors appearance-none cursor-pointer">
                         <option>Packaging Cylinders</option>
                         <option>Decorative Cylinders</option>
                         <option>Coating Rollers</option>
                         <option>General Inquiry</option>
                       </select>
                    </div>

                    <div>
                       <label className="block text-sm font-medium gt-text-secondary mb-2">Message Details</label>
                       <textarea rows={4} placeholder="Please provide dimensions, quantity, or specific application requirements..." className="gt-input w-full rounded-lg px-4 py-3 border focus:outline-none transition-colors resize-none"></textarea>
                    </div>

                    <button className="w-full py-4 bg-[#ED3237] text-white rounded-lg font-semibold hover:bg-[#C62828] transition-all duration-300 shadow-[0_10px_30px_rgba(237,50,55,0.25)] hover:shadow-[0_14px_40px_rgba(237,50,55,0.32)] hover:-translate-y-[3px] uppercase tracking-wide text-sm flex items-center justify-center gap-2 group">
                      Submit Request
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </form>
              </motion.div>

              <motion.div {...sectionEntry} className="h-full min-h-[400px] glass-card rounded-xl relative overflow-hidden gt-bg-secondary flex items-center justify-center">
                 <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] dark:opacity-10 light:opacity-[0.03]" />
                 <div className="relative z-10 flex flex-col items-center text-center p-6">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#3F3D99] rounded-full animate-ping opacity-15" />
                      <div className="w-16 h-16 gt-bg-secondary border border-[rgba(63,61,153,0.35)] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(63,61,153,0.20)]">
                        <MapPin className="w-8 h-8 text-[#3F3D99]" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-heading font-bold gt-text-primary mb-2">RADHEY Industries</h3>
                    <p className="gt-text-secondary max-w-sm text-sm leading-relaxed">
                      {contactDetails.addressLines.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </p>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Factory Visit CTA */}
      <section className="py-24 gt-bg-secondary relative overflow-hidden text-center">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3F3D99] rounded-full mix-blend-screen filter blur-[150px] animate-pulse" style={{ opacity: "var(--gt-orb-opacity)" }} />
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-heading font-bold gt-text-primary mb-6">Visit Our Manufacturing Facility</h2>
            <p className="gt-text-secondary font-light max-w-2xl mx-auto mb-10 text-lg">
              Seeing is believing. We welcome our clients to tour our 100,000 sq ft facility to witness our precision engineering processes firsthand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <button className="px-8 py-4 bg-[#ED3237] text-white rounded-lg font-semibold hover:bg-[#C62828] transition-all duration-300 shadow-[0_10px_30px_rgba(237,50,55,0.20)] hover:shadow-[0_14px_40px_rgba(237,50,55,0.28)] hover:-translate-y-[3px] uppercase tracking-wide text-sm">
                 Schedule a Visit
               </button>
               <button 
                 className="px-8 py-4 border gt-text-primary rounded-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors backdrop-blur-sm uppercase tracking-wide text-sm"
                 style={{ borderColor: "var(--gt-border)" }}
               >
                 Download Brochure
               </button>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-24 gt-bg-primary">
        <div className="container mx-auto px-6">
           <motion.div {...sectionEntry} className="text-center mb-16">
              <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
                Common Questions
              </span>
              <h2 className="text-4xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight">Frequently Asked Questions</h2>
           </motion.div>

           <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} {...sectionEntry} className="glass-card rounded-lg overflow-hidden border" style={{ borderColor: "var(--gt-border)" }}>
                   <button 
                     className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                     onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                   >
                     <span className="font-heading font-bold gt-text-primary pr-4">{faq.q}</span>
                     <ChevronDown className={`w-5 h-5 text-[#3F3D99] transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                   </button>
                   <AnimatePresence>
                     {openFaq === idx && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.3 }}
                       >
                         <div className="px-6 pb-5 gt-text-secondary font-light leading-relaxed border-t pt-4" style={{ borderColor: "var(--gt-border)" }}>
                           {faq.a}
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

    </PageLayout>
  );
}
