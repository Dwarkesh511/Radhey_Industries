import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { contactDetails } from "@/lib/contactDetails";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#3F3D99] mb-6">
              Start Your Next Project
            </h2>
            <p className="text-[#6B7280] mb-12 font-light text-lg leading-relaxed">
              Contact our engineering team to discuss your specific cylinder requirements.
              We provide global shipping and dedicated technical support.
            </p>

            <div className="space-y-7">
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: "Global Headquarters",
                  text: (
                    <>
                      {contactDetails.addressLines.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </>
                  ),
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  title: "Phone",
                  text: (
                    <>
                      {contactDetails.phones.map((phone) => (
                        <span key={phone} className="block">{phone}</span>
                      ))}
                    </>
                  ),
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  title: "Email",
                  text: (
                    <>
                      {contactDetails.emails.map((email) => (
                        <span key={email} className="block">{email}</span>
                      ))}
                    </>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="icon-box-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[#1F2937] font-bold mb-1 text-sm">{item.title}</h4>
                    <p className="text-[#6B7280] font-light text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl border border-[#E8E8F5] shadow-[0_4px_24px_rgba(63,61,153,0.08)]"
          >
            <h3 className="text-xl font-heading font-bold text-[#3F3D99] mb-6">Send Us a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#4B5563] uppercase tracking-wider mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg px-4 py-3 border border-[#D1D5DB] bg-white text-[#1F2937] text-sm
                               focus:outline-none focus:border-[#3F3D99] focus:ring-2 focus:ring-[#3F3D99]/10 transition-all placeholder:text-[#9CA3AF]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4B5563] uppercase tracking-wider mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg px-4 py-3 border border-[#D1D5DB] bg-white text-[#1F2937] text-sm
                               focus:outline-none focus:border-[#3F3D99] focus:ring-2 focus:ring-[#3F3D99]/10 transition-all placeholder:text-[#9CA3AF]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4B5563] uppercase tracking-wider mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg px-4 py-3 border border-[#D1D5DB] bg-white text-[#1F2937] text-sm
                             focus:outline-none focus:border-[#3F3D99] focus:ring-2 focus:ring-[#3F3D99]/10 transition-all placeholder:text-[#9CA3AF]"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4B5563] uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg px-4 py-3 border border-[#D1D5DB] bg-white text-[#1F2937] text-sm
                             focus:outline-none focus:border-[#3F3D99] focus:ring-2 focus:ring-[#3F3D99]/10 transition-all placeholder:text-[#9CA3AF]"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4B5563] uppercase tracking-wider mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg px-4 py-3 border border-[#D1D5DB] bg-white text-[#1F2937] text-sm resize-none
                             focus:outline-none focus:border-[#3F3D99] focus:ring-2 focus:ring-[#3F3D99]/10 transition-all placeholder:text-[#9CA3AF]"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button className="w-full bg-[#ED3237] text-white py-3.5 rounded-lg font-bold uppercase tracking-widest text-sm
                                 hover:bg-[#C62828] transition-all duration-300 flex items-center justify-center gap-2
                                 shadow-[0_4px_15px_rgba(237,50,55,0.25)] hover:shadow-[0_6px_25px_rgba(237,50,55,0.35)]
                                 hover:-translate-y-0.5">
                <Send className="w-4 h-4" /> Send Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
