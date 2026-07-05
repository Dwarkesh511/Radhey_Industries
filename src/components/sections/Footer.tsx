import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import brandLogo from "@/assets/logo/radhey_logo.png";
import { contactDetails } from "@/lib/contactDetails";
import brochurePdf from "@/assets/brochure/radhey-brochure.pdf";

export default function Footer({ hideIndustries = false }: { hideIndustries?: boolean }) {
  return (
    <footer className="bg-[#1E1E4F]">
      {/* Top CTA Band */}
      <div className="bg-gradient-to-r from-[#2D2B7A] to-[#3F3D99] py-14">
        <div className="container mx-auto px-6 flex justify-between items-center flex-wrap gap-8">
          <div>
            <p className="text-white/50 uppercase tracking-wider text-xs mb-2 font-semibold">
              Ready to Elevate Your Print Quality?
            </p>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Start a Project With Us
            </h3>
          </div>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-[#ED3237] text-white rounded-lg font-semibold text-sm uppercase tracking-wide
                         hover:bg-[#C62828] transition-all duration-300 shadow-[0_4px_20px_rgba(237,50,55,0.35)]
                         hover:shadow-[0_6px_28px_rgba(237,50,55,0.45)] hover:-translate-y-[3px] inline-flex items-center gap-2"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="px-7 py-3.5 border-2 border-white/40 text-white rounded-lg font-semibold text-sm uppercase tracking-wide
                         hover:bg-white hover:text-[#3F3D99] transition-all duration-300 hover:-translate-y-[3px] inline-flex items-center"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.45fr]">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={brandLogo}
                alt="RADHEY Industries"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/60 max-w-xs text-sm leading-relaxed mb-8">
              Engineering precision cylinders for the world's most demanding printing applications.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Products</h5>
            <ul className="space-y-3">
              {[
                { name: "Packaging Cylinders", path: "/products" },
                { name: "Decorative Cylinders", path: "/products" },
                { name: "Coating Cylinders", path: "/products" },
                { name: "Embossing Rollers", path: "/products" },
                { name: "Specialty Cylinders", path: "/products" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className="footer-link hover:text-[#ED3237] hover:translate-x-1 inline-block transition-all duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Company</h5>
            <ul className="space-y-3">
              <li><Link href="/about" className="footer-link hover:text-[#ED3237]">About Us</Link></li>
              <li><Link href="/products" className="footer-link hover:text-[#ED3237]">Products</Link></li>
              <li><Link href="/quality" className="footer-link hover:text-[#ED3237]">Quality</Link></li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(brochurePdf, "_blank", "noopener,noreferrer");
                  }}
                  className="footer-link hover:text-[#ED3237] cursor-pointer"
                >
                  Portfolio
                </a>
              </li>
              <li><Link href="/contact" className="footer-link hover:text-[#ED3237]">Contact</Link></li>
            </ul>
          </div>

          {/* Contact + Newsletter Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h5 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Get In Touch</h5>
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-[#ED3237] shrink-0" />
                <div>
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white/60 text-sm leading-relaxed break-words">
                    {contactDetails.emails.map((email) => (
                      <span key={email} className="block">{email}</span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-[#ED3237] shrink-0" />
                <div>
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {contactDetails.phones.map((phone) => (
                      <span key={phone} className="block">{phone}</span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[#ED3237] shrink-0" />
                <div>
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Address</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {contactDetails.addressLines.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3 font-semibold">Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                className="bg-white/8 border border-white/15 rounded-lg px-3 py-2.5 text-sm flex-1 text-white placeholder:text-white/35
                           focus:outline-none focus:border-[#ED3237]/60 focus:ring-1 focus:ring-[#ED3237]/20 transition-all"
                placeholder="Your email"
              />
              <button className="bg-[#ED3237] text-white px-4 py-2.5 rounded-lg hover:bg-[#C62828] transition-all flex items-center justify-center shadow-md">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Industries Band */}
      {!hideIndustries && (
        <div className="border-t border-white/8 py-6">
          <div className="container mx-auto px-6 flex items-center gap-3 flex-wrap">
            <span className="text-white/40 text-xs uppercase tracking-wider mr-3 font-semibold">Industries Served:</span>
            {[
              "Flexible Packaging",
              "Woven Sack Bags",
              "Shrink & Sleeves",
              "Paper Printing",
              "Decorative Laminates",
              "Leather & Rexin",
              "Anilox Coating"
            ].map((ind, i) => (
              <span key={i} className="border border-white/10 text-white/50 text-[11px] px-3 py-1 rounded-full whitespace-nowrap">
                {ind}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="border-t border-white/8 py-5 bg-[#181842]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} RADHEY Industries. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-[#ED3237] text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-[#ED3237] text-xs transition-colors">Terms</a>
            <a href="#" className="text-white/40 hover:text-[#ED3237] text-xs transition-colors">ISO Certificates</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
