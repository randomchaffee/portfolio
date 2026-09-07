import { motion, type Variants } from "framer-motion";

interface TextEffectProps {
    text: string;
    className?: string;
    delayOffset?: number;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (delayOffset: number = 0) => ({
        opacity: 1,
        transition: {
            delayChildren: delayOffset,
            staggerChildren: 0.04
        },
    }),
};

const letterVariants: Variants = {
    hidden: { y: 10, opacity: 0 },
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
}: TextEffectProps) => {
  // Split string into an array of words
  const words = text.split(" ");

  return (
    <motion.div
      className={`inline-flex flex-wrap justify-center md:justify-start ${className}`}
      variants={containerVariants}
      custom={delayOffset}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        // Prevent mid-word breaks by wrapping each word in a whitespace-nowrap container
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default BouncyText;