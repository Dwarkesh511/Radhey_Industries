import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Industries from "@/components/sections/Industries";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen gt-bg-primary gt-text-primary selection:bg-[#ED3237] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Products />
      <Industries />
      <Contact />
      <Footer hideIndustries />

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
