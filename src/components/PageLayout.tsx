import React from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen gt-bg-primary gt-text-primary selection:bg-[#ED3237] selection:text-white overflow-x-hidden relative">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
