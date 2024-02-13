import React from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const AboutMe = () => {
  return (
    <ScrollReveal move="bottom">
      <motion.div
        className="AboutMe"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.0 }}
      >
        <h1>ABOUT ME</h1>
        <p className="aboutme-p">
          My passion for technology started when I was working as a nurse,
          especially during the pandemic. <br></br>I realized the crucial role
          of learning technology in improving both the workflow for healthcare
          professionals and the overall experience for patients. Driven by a
          passion to learn and improve, I'm committed to lifelong learning for
          personal and professional growth.Additionally, I find joy in design,
          often drawing inspiration from museum visits or traveling around to
          fuel my creative endeavors.
        </p>
      </motion.div>
    </ScrollReveal>
  );
};

export default AboutMe;
