import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8FAFC]"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          {/* Spinner ring */}
          <div className="relative w-[100px] h-[100px] flex items-center justify-center">
            <svg width="100" height="100" viewBox="0 0 100 100" className="absolute inset-0">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(63,61,153,0.10)" strokeWidth="2" />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#3F3D99"
                strokeWidth="3"
                strokeDasharray="264"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 264, rotate: -90 }}
                animate={{ strokeDashoffset: 0, rotate: 270 }}
                transition={{
                  strokeDashoffset: { duration: 1.8, ease: "easeInOut" },
                  rotate: { duration: 2.5, repeat: Infinity, ease: "linear" },
                }}
                style={{ originX: "50%", originY: "50%" }}
              />
              {/* Accent dot */}
              <circle cx="50" cy="8" r="3" fill="#ED3237">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            {/* Center brand mark */}
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-heading font-extrabold text-[#3F3D99] text-xl leading-none">RI</span>
            </div>
          </div>

          {/* Brand name */}
          <div className="mt-6 flex flex-col items-center">
            <span className="text-[#3F3D99] text-sm uppercase tracking-[0.25em] font-bold mb-3">
              RADHEY Industries
            </span>
            <div className="w-28 h-[2px] bg-[#E8E8F5] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#3F3D99] to-[#ED3237] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
