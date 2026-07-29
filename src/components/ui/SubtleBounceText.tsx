import { motion } from "framer-motion";

interface SubtleBounceTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

export const SubtleBounceText = ({
  text,
  className = "",
  delayOffset = 0,
}: SubtleBounceTextProps) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: delayOffset,
        type: "spring",
        damping: 15,
        stiffness: 200,
      }}
    >
      {text}
    </motion.span>
  );
};