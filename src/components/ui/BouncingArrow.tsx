import { motion } from "framer-motion";

interface BouncingArrowProps {
  className?: string;
  size?: number;
  color?: string;
  bounceHeight?: number; // How far down it bounces (in px)
  duration?: number;     // Duration of one bounce cycle in seconds
}

export const BouncingArrow = ({
  className = "",
  size = 20,
  color = "currentColor",
  bounceHeight = 6,
  duration = 1,
}: BouncingArrowProps) => {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      animate={{ y: [0, bounceHeight, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatDelay: 0.2, // Gives a slight pause between bounces
        ease: "easeInOut",
      }}
    >
      {/* Lucide/Heroicons Chevron Down style SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </motion.div>
  );
};

export default BouncingArrow;