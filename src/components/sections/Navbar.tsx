import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import brandLogo from "@/assets/logo/radhey_logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Portfolio", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return href === "/" ? location === "/" : location.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "gt-nav-scrolled"
          : "bg-white/90 backdrop-blur-sm py-3 shadow-sm border-b border-[rgba(63,61,153,0.08)]"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={brandLogo}
            alt="RADHEY Industries"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            link.name === "Portfolio" ? (
              <a
                key={link.name}
                href="/assets/brochure/radhey-brochure.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(`${window.location.origin}/assets/brochure/radhey-brochure.pdf`, "_blank");
                }}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md group text-[#3F3D99] hover:text-[#2D2B7A] cursor-pointer"
              >
                {link.name}
                {/* Red hover/active underline */}
                <span
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#ED3237] transition-all duration-300 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 origin-center"
                />
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md group ${
                  isActive(link.href)
                    ? "text-[#ED3237]"
                    : "text-[#3F3D99] hover:text-[#2D2B7A]"
                }`}
              >
                {link.name}
                {/* Red hover/active underline */}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#ED3237] transition-all duration-300 ${
                    isActive(link.href) ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  } group-hover:opacity-100 group-hover:scale-x-100 origin-center`}
                />
              </Link>
            )
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#E8E8F5] dark:hover:bg-[#374151] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-[#ED3237]" />
          ) : (
            <Moon className="w-5 h-5 text-[#3F3D99]" />
          )}
        </button>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#ED3237] text-white rounded-md font-semibold text-sm hover:bg-[#C62828] transition-all duration-300 shadow-[0_4px_14px_rgba(237,50,55,0.30)] hover:shadow-[0_6px_20px_rgba(237,50,55,0.40)] hover:-translate-y-[3px] uppercase tracking-wide inline-block"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#3F3D99] w-10 h-10 flex items-center justify-center rounded-md hover:bg-[#E8E8F5] dark:hover:bg-[#374151] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="md:hidden text-[#3F3D99] dark:text-[#ED3237] w-10 h-10 flex items-center justify-center rounded-md hover:bg-[#E8E8F5] dark:hover:bg-[#374151] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-b border-[#D1D5DB] flex flex-col py-4 px-6 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              link.name === "Portfolio" ? (
                <a
                  key={link.name}
                  href="/assets/brochure/radhey-brochure.pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    window.open("/assets/brochure/radhey-brochure.pdf", "_blank", "noopener,noreferrer");
                  }}
                  className="py-3 text-sm font-medium transition-colors border-b border-[#F1F5F9] last:border-none flex items-center gap-2 text-[#3F3D99] hover:text-[#2D2B7A] cursor-pointer"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 text-sm font-medium transition-colors border-b border-[#F1F5F9] last:border-none flex items-center gap-2 ${
                    isActive(link.href)
                      ? "text-[#ED3237]"
                      : "text-[#3F3D99] hover:text-[#2D2B7A]"
                  }`}
                >
                  {isActive(link.href) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ED3237] shrink-0" />
                  )}
                  {link.name}
                </Link>
              )
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 bg-[#ED3237] text-white text-center rounded-md font-semibold transition-all duration-300 uppercase tracking-wide text-sm hover:bg-[#C62828] hover:-translate-y-[3px] shadow-[0_4px_14px_rgba(237,50,55,0.25)]"
            >
              Request Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
