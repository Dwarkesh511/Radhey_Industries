import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
  strength?: number;
}

export default function MagneticButton({ children, className, style, onClick, href, strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const isInternalLink = href && href.startsWith("/");

  return (
    <motion.div
      ref={ref}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {isInternalLink ? (
        <Link href={href} onClick={onClick} className={className} style={style}>
          {children}
        </Link>
      ) : href ? (
        <a href={href} onClick={onClick} className={className} style={style}>
          {children}
        </a>
      ) : (
        <div onClick={onClick} className={className} style={style}>
          {children}
        </div>
      )}
    </motion.div>
  );
}
