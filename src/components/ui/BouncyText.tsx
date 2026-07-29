import { motion, type Variants } from "framer-motion";

interface TextEffectProps {
    text: string;
    className?: string;
    delayOffset?: number;
}

const containerVariants: Variants = {
    hidden: { opacity: 0},
    visible: (delayOffset: number = 0) => ({
        opacity: 1,
        transition: {
            delayChildren: delayOffset,
            staggerChildren: 0.04
        },
    }),
};

const letterVariants: Variants = {
    hidden: { y: 10, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 300
        },
    },
};

const BouncyText = ({
  text,
  className = "",
  delayOffset = 0,
}: TextEffectProps ) => {
  return (
    <motion.div
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      custom={delayOffset}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BouncyText