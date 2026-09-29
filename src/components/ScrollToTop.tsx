import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      const t1 = setTimeout(scrollToHash, 50);
      const t2 = setTimeout(scrollToHash, 350);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      window.scrollTo(0, 0);
      const t1 = setTimeout(() => window.scrollTo(0, 0), 50);
      const t2 = setTimeout(() => window.scrollTo(0, 0), 350);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [location]);

  return null;
}
