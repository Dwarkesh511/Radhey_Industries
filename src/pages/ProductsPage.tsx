import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

// Import Paper Printing and Anilox Coating images
import paperPrintingCylindersImg from "@/assets/paper-printing-cylinders.png";
import aniloxCoatingRollersImg from "@/assets/anilox-coating-rollers.jpg";

// Import Flexible Packaging images
import flex3 from "@/assets/3 FLEXIBLE PACKEGING/BRED.png";
import flex4 from "@/assets/3 FLEXIBLE PACKEGING/BUTTER MILK-2.png";
import flex5 from "@/assets/3 FLEXIBLE PACKEGING/BUTTER MILK.png";
import flex6 from "@/assets/3 FLEXIBLE PACKEGING/CHIP.png";
import flex8 from "@/assets/3 FLEXIBLE PACKEGING/COW MIKL.png";
import flex9 from "@/assets/3 FLEXIBLE PACKEGING/Dabele-masala-pouch-100g.jpg";
import flex10 from "@/assets/3 FLEXIBLE PACKEGING/GHEE.png";
import flex11 from "@/assets/3 FLEXIBLE PACKEGING/HALD.png";
import flex12 from "@/assets/3 FLEXIBLE PACKEGING/MILK-1.png";
import flex13 from "@/assets/3 FLEXIBLE PACKEGING/MILK-2.png";
import flex14 from "@/assets/3 FLEXIBLE PACKEGING/MILK-3.png";
import flex15 from "@/assets/3 FLEXIBLE PACKEGING/NAMKEEN-1.png";
import flex17 from "@/assets/3 FLEXIBLE PACKEGING/RUSK.png";
import flex18 from "@/assets/3 FLEXIBLE PACKEGING/SALT-1.png";
import flex19 from "@/assets/3 FLEXIBLE PACKEGING/SPI-1.png";
import flex20 from "@/assets/3 FLEXIBLE PACKEGING/TEA-1.png";
import flex21 from "@/assets/3 FLEXIBLE PACKEGING/TOAST.png";
import flex22 from "@/assets/3 FLEXIBLE PACKEGING/energy powder.png";
import flex23 from "@/assets/3 FLEXIBLE PACKEGING/food.png";

const flexibleImages = [
  flex3, flex4, flex5, flex6, flex8, flex9, flex10,
  flex11, flex12, flex13, flex14, flex15, flex17, flex18, flex19, flex20,
  flex21, flex22, flex23
];

// Import Woven Sack images
import besan2 from "@/assets/WOVEN SACK BAG(1)/BESAN-2.png";
import besan from "@/assets/WOVEN SACK BAG(1)/BESAN.png";
import fert1 from "@/assets/WOVEN SACK BAG(1)/FERT-1.png";
import fert2 from "@/assets/WOVEN SACK BAG(1)/FERT-2.png";
import fert3 from "@/assets/WOVEN SACK BAG(1)/FERT-3.png";
import jeera from "@/assets/WOVEN SACK BAG(1)/JEERA.png";
import must from "@/assets/WOVEN SACK BAG(1)/MUST.png";
import pules from "@/assets/WOVEN SACK BAG(1)/PULES.png";
import rice1 from "@/assets/WOVEN SACK BAG(1)/RICE-1.png";
import rice2 from "@/assets/WOVEN SACK BAG(1)/RICE-2.png";
import rice3 from "@/assets/WOVEN SACK BAG(1)/RICE-3.png";
import salt2 from "@/assets/WOVEN SACK BAG(1)/SALT-2.png";
import taau from "@/assets/WOVEN SACK BAG(1)/TAAU.png";
import wallPutty from "@/assets/WOVEN SACK BAG(1)/WALL PUTTY.png";
import wheat1 from "@/assets/WOVEN SACK BAG(1)/WHEAT-1.png";
import wheat2 from "@/assets/WOVEN SACK BAG(1)/WHEAT-2.png";

const wovenSackImages = [
  rice1,
  rice2,
  rice3,
  besan,
  besan2,
  fert1,
  fert2,
  fert3,
  jeera,
  must,
  pules,
  salt2,
  taau,
  wallPutty,
  wheat1,
  wheat2
];

// Import Shrink Sleeve images
import ss2 from "@/assets/shrink_and_sleev/SS-2.jpg";
import ss3 from "@/assets/shrink_and_sleev/SS-3.webp";
import ss4 from "@/assets/shrink_and_sleev/SS-4.jpg";
import ss5 from "@/assets/shrink_and_sleev/SS-5.jpg";
import ss6 from "@/assets/shrink_and_sleev/SS-6.jpg";
import ss7 from "@/assets/shrink_and_sleev/SS-7.jpg";

const shrinkSleeveImages = [
  ss2,
  ss3,
  ss4,
  ss5,
  ss6,
  ss7
];

// Import Leather & Rexin images
import leather1 from "@/assets/7 LEATHER/Leather Printing.jpg";
import leather2 from "@/assets/7 LEATHER/Leather Printing-1.jpg";
import leather3 from "@/assets/7 LEATHER/Leather Printing-2.jpg";
import leather4 from "@/assets/7 LEATHER/Leather Printing-3.jpg";
import leather5 from "@/assets/7 LEATHER/Leather Printing-4.jpg";
import leather6 from "@/assets/7 LEATHER/Leather Printing-5.jpg";
import leather7 from "@/assets/7 LEATHER/Leather Printing-6.jpg";

const leatherImages = [
  leather1,
  leather2,
  leather3,
  leather4,
  leather5,
  leather6,
  leather7
];

interface Product {
  id: number;
  name: string;
  category: string;
  image?: string;
  images?: string[];
  description: string;
  specs: { key: string; value: string }[];
  fullDesc: string;
  overview?: string;
  applications?: string[];
  features?: string[];
  materials?: string[];
  advantages?: string;
  industries?: string;
}

const productsData: Product[] = [
  {
    id: 1,
    name: "Flexible Packaging Cylinders",
    category: "Flexible Packaging",
    image: flex3,
    images: flexibleImages,
    description: "High-precision rotogravure cylinders specially designed for flexible packaging applications including food packaging, FMCG products, pharmaceuticals, personal care, household products, laminated films, pouches, and industrial packaging. Engineered for superior print quality, accurate registration, excellent ink transfer, and long production life.",
    specs: [
      { key: "Feature 1", value: "Food Packaging" },
      { key: "Feature 2", value: "FMCG" },
      { key: "Feature 3", value: "High Precision" }
    ],
    fullDesc: "High-precision rotogravure cylinders specially designed for flexible packaging applications including food packaging, FMCG products, pharmaceuticals, personal care, household products, laminated films, pouches, and industrial packaging. Engineered for superior print quality, accurate registration, excellent ink transfer, and long production life.",
    overview: "High-precision rotogravure cylinders specially designed for flexible packaging applications including food packaging, FMCG products, pharmaceuticals, personal care, household products, laminated films, pouches, and industrial packaging.",
    applications: [
      "Food Packaging",
      "FMCG Packaging",
      "Pharmaceuticals",
      "Personal Care & Household",
      "Laminated Films & Pouches"
    ],
    features: [
      "High engraving precision",
      "Excellent ink transfer",
      "Accurate color registration",
      "Superior wear resistance",
      "Mirror polished finish",
      "High-speed printing compatibility",
      "Long service life"
    ],
    materials: [
      "BOPP",
      "PET",
      "CPP",
      "PE",
      "Aluminum Foil",
      "Paper Laminated"
    ],
    advantages: "Delivers crisp dot reproduction and consistent ink release over millions of meters, reducing downtime and waste.",
    industries: "Food & Beverage, FMCG, Pharmaceuticals, Household Goods, Flexible Packaging Converter."
  },
  {
    id: 2,
    name: "Woven Sack Bag Cylinders",
    category: "Woven Sack",
    image: rice1,
    images: wovenSackImages,
    description: "High-precision rotogravure cylinders engineered for PP woven sacks, BOPP laminated bags, fertilizer bags, cement bags, rice bags, flour bags, sugar bags and other industrial packaging applications. Designed for sharp print quality, accurate registration and long production life.",
    specs: [
      { key: "Feature 1", value: "PP Woven" },
      { key: "Feature 2", value: "BOPP Laminated" },
      { key: "Feature 3", value: "Industrial Packaging" }
    ],
    fullDesc: "High-precision rotogravure cylinders engineered for PP woven sacks, BOPP laminated bags, fertilizer bags, cement bags, rice bags, flour bags, sugar bags and other industrial packaging applications. Designed for sharp print quality, accurate registration and long production life.",
    overview: "High-precision rotogravure cylinders engineered for PP woven sacks, BOPP laminated bags, fertilizer bags, cement bags, rice bags, flour bags, sugar bags and other industrial packaging applications.",
    applications: [
      "Fertilizer Bags",
      "Cement & Building Materials",
      "Rice & Flour Sacks",
      "Animal Feed Bags",
      "BOPP Laminated Woven Sacks"
    ],
    features: [
      "Heavy-duty copper overlay",
      "Wear-resistant chrome plating",
      "Optimized cell geometry for coarse substrates",
      "High registration accuracy",
      "Long production lifespan"
    ],
    materials: [
      "PP Woven Fabric",
      "BOPP Film",
      "HDPE",
      "Laminated Woven Fabrics"
    ],
    advantages: "Built to withstand abrasive inks and tough operating conditions while maintaining vibrant print quality.",
    industries: "Agriculture, Cement & Building Materials, Grain & Flour Mills, Chemical Packaging."
  },
  {
    id: 3,
    name: "Shrink Sleeve Printing Cylinders",
    category: "Shrink Sleeve",
    image: ss2,
    images: shrinkSleeveImages,
    description: "High-performance gravure cylinders specially engineered for shrink sleeve printing applications, delivering exceptional color reproduction, precise registration, and superior print quality for PET, PVC, OPS, and other shrink films.",
    specs: [
      { key: "Feature 1", value: "PET / PVC / OPS" },
      { key: "Feature 2", value: "High Registration Accuracy" },
      { key: "Feature 3", value: "360° Sleeve Printing" }
    ],
    fullDesc: "High-performance gravure cylinders specially engineered for shrink sleeve printing applications, delivering exceptional color reproduction, precise registration, and superior print quality for PET, PVC, OPS, and other shrink films.",
    overview: "High-performance gravure cylinders specially engineered for shrink sleeve printing applications, delivering exceptional color reproduction, precise registration, and superior print quality for PET, PVC, OPS, and other shrink films.",
    applications: [
      "Beverage Labels",
      "Food Packaging",
      "Cosmetics",
      "Pharmaceutical Products",
      "Personal Care Products",
      "Household Products"
    ],
    features: [
      "High engraving precision",
      "Excellent ink transfer",
      "Accurate color registration",
      "Superior wear resistance",
      "Mirror polished finish",
      "High-speed printing compatibility",
      "Long service life"
    ],
    materials: [
      "PET",
      "PVC",
      "OPS",
      "PLA",
      "Other Shrink Films"
    ],
    advantages: "Engineered to withstand long production runs while maintaining high-speed printing compatibility and optimal ink transfer, ensuring a lower total cost of ownership and consistent brand presentation.",
    industries: "Beverage, Food packaging, Cosmetics, Pharmaceuticals, Personal care, and Household products."
  },
  {
    id: 4,
    name: "Paper Printing Cylinders",
    category: "Paper Printing",
    image: paperPrintingCylindersImg,
    description: "High-precision gravure cylinders designed for high-quality paper printing applications, delivering sharp reproduction, consistent ink transfer, and reliable printing performance.",
    specs: [
      { key: "Tag 1", value: "Paper Printing" },
      { key: "Tag 2", value: "High Precision" },
      { key: "Tag 3", value: "Consistent Ink Transfer" }
    ],
    fullDesc: "High-precision gravure cylinders designed for high-quality paper printing applications, delivering sharp reproduction, consistent ink transfer, and reliable printing performance.",
    overview: "High-precision rotogravure cylinders designed for high-quality paper printing applications, including coated & uncoated paper, folding cartons, gift wraps, decor paper, and specialty paper packaging.",
    applications: [
      "Gift Wraps & Wrapping Paper",
      "Folding Cartons & Paperboard",
      "Paper Labels & Decals",
      "Decor & Wall Paper",
      "Specialty Paper Packaging"
    ],
    features: [
      "Fine screen engraving for paper surfaces",
      "Consistent cell depth & ink release",
      "Smooth doctor blade wiping",
      "Minimal paper dust buildup",
      "High-speed paper web compatibility"
    ],
    materials: [
      "Coated Paper",
      "Uncoated Kraft",
      "Paperboard",
      "Decor Paper",
      "Specialty Substrates"
    ],
    advantages: "Delivers sharp image clarity, accurate tone reproduction, and uniform coverage on absorbent paper surfaces.",
    industries: "Paper Packaging, Commercial Printing, Publishing, Decorative Paper Converting."
  },
  {
    id: 5,
    name: "Leather & Rexin Printing Cylinders",
    category: "Leather & Rexin",
    image: leather1,
    images: leatherImages,
    description: "Premium-quality rotogravure cylinders specially engineered for leather, rexin, synthetic leather, PVC leather, PU leather, upholstery materials, footwear, automotive interiors, handbags, furniture coverings, and decorative surface printing. Designed to produce sharp engraving, consistent texture reproduction, superior ink transfer, and long production life.",
    specs: [
      { key: "Feature 1", value: "Leather" },
      { key: "Feature 2", value: "Rexin" },
      { key: "Feature 3", value: "Decorative Printing" }
    ],
    fullDesc: "Premium-quality rotogravure cylinders specially engineered for leather, rexin, synthetic leather, PVC leather, PU leather, upholstery materials, footwear, automotive interiors, handbags, furniture coverings, and decorative surface printing. Designed to produce sharp engraving, consistent texture reproduction, superior ink transfer, and long production life.",
    overview: "Premium-quality rotogravure cylinders specially engineered for leather, rexin, synthetic leather, PVC leather, PU leather, upholstery materials, footwear, automotive interiors, handbags, furniture coverings, and decorative surface printing.",
    applications: [
      "PVC & PU Synthetic Leather",
      "Automotive Interiors",
      "Footwear & Footwear Uppers",
      "Upholstery & Furniture Coverings",
      "Handbags & Luggage"
    ],
    features: [
      "Deep texturing & embossing engraving capability",
      "Consistent ink & lacquer transfer",
      "High resistance to solvent-based chemical inks",
      "Long service life under high nip pressure"
    ],
    materials: [
      "PVC Leather",
      "PU Leather",
      "Synthetic Leather",
      "Rexin",
      "Textile Backed Fabrics"
    ],
    advantages: "Provides consistent texture and color depth on flexible synthetic leather roll stocks.",
    industries: "Automotive, Footwear, Fashion Accessories, Upholstery, Artificial Leather Manufacturing."
  },
  {
    id: 6,
    name: "Anilox Coating Rollers",
    category: "Anilox / Coating",
    image: aniloxCoatingRollersImg,
    description: "Precision-engineered anilox coating rollers designed for uniform ink and coating transfer, providing consistent coverage and reliable performance across demanding printing applications.",
    specs: [
      { key: "Tag 1", value: "Ceramic Anilox" },
      { key: "Tag 2", value: "Precise Cell Volume" },
      { key: "Tag 3", value: "Uniform Coating" }
    ],
    fullDesc: "Precision-engineered anilox coating rollers designed for uniform ink and coating transfer, providing consistent coverage and reliable performance across demanding printing applications.",
    overview: "Precision-engineered anilox coating rollers designed for uniform ink, varnish, adhesive, and barrier coating transfer, providing consistent coverage and reliable performance across demanding printing applications.",
    applications: [
      "Flexographic & Gravure Coating",
      "Varnish & Lacquer Application",
      "Adhesive & Laminating Coating",
      "Barrier Coating for Packaging",
      "Matte & Gloss Surface Finishing"
    ],
    features: [
      "Laser-engraved ceramic or hard-chrome surface",
      "Exact cell volume & screen count",
      "Uniform ink metering & transfer",
      "Superior doctor blade wear resistance",
      "Easy cleaning & corrosion resistance"
    ],
    materials: [
      "Solvent-based Coatings",
      "Water-based Lacquers",
      "UV & EB Curable Coatings",
      "Adhesives & Primers"
    ],
    advantages: "Ensures precise wet film thickness control and consistent coating application without streaks or voids.",
    industries: "Flexible Packaging, Paper Converting, Label Printing, Industrial Coating."
  }
];

interface ProductImageSliderProps {
  images: string[];
  productName: string;
  className?: string;
}

function ProductImageSlider({ images, productName, className = "" }: ProductImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="w-full h-full relative" style={{ background: "#ffffff", padding: "12px" }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${productName} - view ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full object-contain object-center"
          />
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors focus:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors focus:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}



export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof productsData[0] | null>(null);

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
            <span className="text-[#3F3D99]">Products</span>
          </div>
          
          <motion.div {...sectionEntry}>
            <span className="inline-block py-1 px-3 border border-[#ED3237]/40 rounded-full text-[#ED3237] text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[#ED3237]/10 backdrop-blur-sm">
              Our Products
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold gt-text-primary mb-6 tracking-tight max-w-4xl">
              Advanced Rotogravure <span className="text-gradient">Cylinder Solutions</span>
            </h1>
            <p className="text-lg md:text-xl gt-text-secondary font-light max-w-2xl">
              A comprehensive range of precision-engineered cylinders designed to meet the exact specifications of diverse printing and coating applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-24 gt-bg-secondary min-h-screen">
        <div className="container mx-auto px-6">
          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {productsData.map(product => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="glass-card rounded-xl overflow-hidden group hover:border-[#ED3237]/35 hover:scale-[1.02] transition-all cursor-pointer flex flex-col"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="h-[200px] w-full bg-gradient-to-br from-[#0B1026] via-[#111827] to-[#1E1E4F] relative overflow-hidden">
                     {product.images && product.images.length > 0 ? (
                       <ProductImageSlider images={product.images} productName={product.name} />
                     ) : (
                       <>
                          {product.image && (
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="absolute inset-0 w-full h-full object-contain p-3 object-center" 
                            />
                          )}
                         <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[bg-pan_3s_infinite_linear]" />
                       </>
                     )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block py-1 px-2 border border-[rgba(63,61,153,0.22)] rounded text-[#3F3D99] text-[10px] font-bold uppercase tracking-wider mb-3 bg-[#E8E8F5]">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-heading font-bold gt-text-primary mb-2">{product.name}</h3>
                      <p className="gt-text-secondary text-sm font-light leading-relaxed line-clamp-2">{product.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-auto mb-6">
                      {product.specs.map(spec => (
                        <span key={spec.key} className="text-xs gt-text-secondary bg-black/5 dark:bg-white/5 px-2 py-1 rounded border" style={{ borderColor: "var(--gt-border)" }}>
                          {spec.value}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full py-3 border gt-text-primary rounded-lg font-medium group-hover:bg-[#3F3D99] group-hover:border-[#3F3D99] group-hover:text-white transition-colors uppercase tracking-wide text-xs" style={{ borderColor: "var(--gt-border)" }}>
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-24 gt-bg-primary">
        <div className="container mx-auto px-6">
           <motion.div {...sectionEntry} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold gt-text-primary mb-4 tracking-tight">Built to Outperform</h2>
              <p className="gt-text-secondary font-light max-w-2xl mx-auto">Every cylinder is a masterpiece of metallurgical and mechanical engineering.</p>
           </motion.div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Material Quality", desc: "Premium forged steel cores overlaid with high-purity electrolytic copper and hard industrial chrome.", spec: "Steel + Cu + Cr" },
                { title: "Dimensional Tolerance", desc: "Machined and balanced to exact specifications, ensuring perfect register and smooth running.", spec: "±0.001mm" },
                { title: "Surface Finish", desc: "Polished to a flawless mirror finish, providing optimal ink release and blade wear resistance.", spec: "Ra 0.1μm" }
              ].map((feature, i) => (
                <motion.div key={i} {...sectionEntry} className="glass-card p-8 rounded-lg relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8E8F5] rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150" />
                   <h3 className="text-2xl font-heading font-bold gt-text-primary mb-2">{feature.title}</h3>
                   <span className="text-[#3F3D99] font-mono text-sm block mb-4">{feature.spec}</span>
                   <p className="gt-text-secondary font-light">{feature.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="gt-bg-secondary border rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              style={{ borderColor: "var(--gt-border)" }}
              onClick={e => e.stopPropagation()}
            >
               <div className="md:w-2/5 bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] border-r relative min-h-[250px]" style={{ borderColor: "var(--gt-border)" }}>
                 {selectedProduct.images && selectedProduct.images.length > 0 ? (
                   <ProductImageSlider images={selectedProduct.images} productName={selectedProduct.name} />
                 ) : (
                   <>
                     {selectedProduct.image && (
                       <img 
                         src={selectedProduct.image} 
                         alt={selectedProduct.name} 
                         className="absolute inset-0 w-full h-full object-contain p-4 object-center" 
                       />
                     )}
                     <div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-[bg-pan_3s_infinite_linear]" />
                   </>
                 )}
                 <div className="absolute bottom-6 left-6 z-20">
                    <span className="px-3 py-1 bg-[#3F3D99] text-white text-xs font-bold uppercase rounded-md">{selectedProduct.category}</span>
                 </div>
               </div>
               <div className="md:w-3/5 p-8 md:p-10 overflow-y-auto">
                  <h2 className="text-3xl font-heading font-bold gt-text-primary mb-4">{selectedProduct.name}</h2>
                  
                  {selectedProduct.overview ? (
                    <div className="space-y-6 gt-text-secondary font-light text-sm leading-relaxed mb-8">
                      <div>
                        <h4 className="text-sm font-bold gt-text-primary uppercase tracking-wider mb-2">Product Overview</h4>
                        <p>{selectedProduct.overview}</p>
                      </div>
                      
                      {selectedProduct.applications && (
                        <div>
                          <h4 className="text-sm font-bold gt-text-primary uppercase tracking-wider mb-2">Applications</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {selectedProduct.applications.map((app, i) => (
                              <li key={i}>{app}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {selectedProduct.features && (
                        <div>
                          <h4 className="text-sm font-bold gt-text-primary uppercase tracking-wider mb-2">Features</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {selectedProduct.features.map((feat, i) => (
                              <li key={i}>{feat}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedProduct.materials && (
                        <div>
                          <h4 className="text-sm font-bold gt-text-primary uppercase tracking-wider mb-2">Materials Supported</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {selectedProduct.materials.map((mat, i) => (
                              <li key={i}>{mat}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedProduct.advantages && (
                        <div>
                          <h4 className="text-sm font-bold gt-text-primary uppercase tracking-wider mb-2">Advantages</h4>
                          <p>{selectedProduct.advantages}</p>
                        </div>
                      )}

                      {selectedProduct.industries && (
                        <div>
                          <h4 className="text-sm font-bold gt-text-primary uppercase tracking-wider mb-2">Industries Served</h4>
                          <p>{selectedProduct.industries}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="gt-text-secondary font-light leading-relaxed mb-8">{selectedProduct.fullDesc}</p>
                  )}
                 
                 <div className="flex flex-wrap gap-4 pt-6 border-t" style={{ borderColor: "var(--gt-border)" }}>
                    <a href="/contact" className="px-6 py-3 bg-[#ED3237] text-white rounded-lg font-semibold hover:bg-[#C62828] transition-all duration-300 shadow-[0_10px_30px_rgba(237,50,55,0.22)] hover:-translate-y-[3px] uppercase tracking-wide text-sm text-center flex-1">
                      Request Quote
                    </a>
                    <button 
                      onClick={() => setSelectedProduct(null)}
                      className="px-6 py-3 border gt-text-primary rounded-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors uppercase tracking-wide text-sm flex-1"
                      style={{ borderColor: "var(--gt-border)" }}
                    >
                      Close
                    </button>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </PageLayout>
  );
}
