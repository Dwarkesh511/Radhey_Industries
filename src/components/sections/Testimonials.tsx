import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The precision of their cylinders has significantly improved our print quality. The detail achieved on our flexible packaging is unmatched.",
    name: "Hans Weber",
    company: "GlobalPack Solutions",
    country: "Germany",
  },
  {
    quote: "Gravure Tech's turnaround time and consistent quality make them our trusted partner for all our high-volume printing needs.",
    name: "Sarah Chen",
    company: "Asia Print Co.",
    country: "Singapore",
  },
  {
    quote: "Their decorative cylinders offer incredible seamless patterns. The durability of the chrome plating is far superior to other suppliers.",
    name: "Michael Rossi",
    company: "Decor Surfaces Inc.",
    country: "Italy",
  },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").substring(0, 2);
}

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#F1F5F9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-label">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#3F3D99] mb-6">
            Trusted by Leaders
          </h2>
          <p className="text-[#6B7280] font-light text-lg leading-relaxed">
            Hear what our global partners say about our engineering precision and service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="bg-white p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden
                         border border-[#E8E8F5] shadow-[0_2px_16px_rgba(63,61,153,0.06)]
                         hover:shadow-[0_8px_32px_rgba(63,61,153,0.12)] hover:-translate-y-2 transition-all duration-300"
            >
              {/* Left accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#3F3D99] via-[#5856C2] to-transparent rounded-l-2xl" />

              <div>
                {/* Stars + Quote icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ED3237] text-[#ED3237]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#3F3D99]/15" />
                </div>
                <p className="text-[#1F2937] text-base leading-relaxed mb-8 font-light">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-[#E8E8F5] pt-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#E8E8F5] border border-[#3F3D99]/20 flex items-center justify-center text-[#3F3D99] font-bold text-sm shrink-0">
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <h4 className="text-[#1F2937] font-bold text-sm mb-0.5">{testimonial.name}</h4>
                  <p className="text-[#3F3D99] text-xs font-semibold uppercase tracking-wider">
                    {testimonial.company}
                  </p>
                  <p className="text-[#6B7280] text-xs mt-0.5">{testimonial.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}