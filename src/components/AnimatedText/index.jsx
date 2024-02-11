// AnimatedText.js

import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const charVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export function AnimatedText({ text }) {
  return (
    <motion.div variants={textVariants} initial="hidden" animate="visible">
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedText;
