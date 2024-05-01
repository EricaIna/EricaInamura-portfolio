import React from "react";

import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const AboutMe = () => {
  return (
    <ScrollReveal move="bottom">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.0 }}
      >
        <p
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          &copy;All rights reserved
        </p>
      </motion.div>
    </ScrollReveal>
  );
};

export default AboutMe;
