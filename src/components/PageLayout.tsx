import React from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { MessageCircle } from "lucide-react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen gt-bg-primary gt-text-primary selection:bg-[#ED3237] selection:text-white overflow-x-hidden relative">
      <Navbar />
      <main>{children}</main>
      <Footer />
      
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
