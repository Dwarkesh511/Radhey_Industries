import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Industries from "@/components/sections/Industries";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

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
    </div>
  );
}
