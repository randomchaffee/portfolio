import React from "react";
import { motion, type Variants } from "framer-motion";

interface BouncyIconProps {
  children: React.ReactNode;
  className?: string;
  delayOffset?: number;
}

const iconVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.8 },
  visible: (delayOffset: number = 0) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: delayOffset,
      type: "spring",
      damping: 16,
      stiffness: 250,
    },
  }),
};

export const BouncyIcon = ({
  children,
  className = "",
  delayOffset = 0,
}: BouncyIconProps) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={iconVariants}
      custom={delayOffset}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.span>
  );
};