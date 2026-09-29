import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Loader from "@/components/Loader";
import ScrollToTop from "@/components/ScrollToTop";
import { MessageCircle } from "lucide-react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import QualityPage from "@/pages/QualityPage";
import ContactPage from "@/pages/ContactPage";

const queryClient = new QueryClient();

const pageVariants: Variants = {
  initial: { opacity: 0, y: 16, filter: "blur(4px)" },
  enter: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -8, filter: "blur(2px)", transition: { duration: 0.3, ease: "easeIn" } }
};

function AnimatedRoutes() {
  const [location] = useLocation();
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (!window.location.hash) {
          window.scrollTo(0, 0);
        }
      }}
    >
      <motion.div key={location} variants={pageVariants} initial="initial" animate="enter" exit="exit">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/quality" component={QualityPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Loader />
          <AnimatedRoutes />
          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/919274519006"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 md:bottom-5 md:right-5 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-[9999]"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
