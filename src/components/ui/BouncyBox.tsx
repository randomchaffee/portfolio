import React from "react";
import { motion } from "framer-motion";

interface BouncyBoxProps {
  children: React.ReactNode;
  className?: string;
  delayOffset?: number;
  yOffset?: number;
}

export const BouncyBox = ({
  children,
  className = "",
  delayOffset = 0,
  yOffset = 20,
}: BouncyBoxProps) => {
  return (
    <motion.div
      className={className}
      initial={{ y: yOffset, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: delayOffset,
        type: "spring",
        damping: 15,
        stiffness: 200,
      }}
    >
      {children}
    </motion.div>
  );
};

export default BouncyBox;