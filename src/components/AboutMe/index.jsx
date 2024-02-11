import React from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      className="AboutMe"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, delay: 1.0 }}
    >
      <h1>ABOUT ME</h1>
      <p className="aboutme-p">
        My passion for technology started when I was working as a nurse,
        especially during the pandemic. <br></br>I realized the crucial role of
        learning technology in improving both the workflow for healthcare
        professionals and the overall experience for patients. As our world
        continues to rapidly evolve in the midst of technological advancements,
        I find myself constantly thinking about innovative ways to adapt and
        enhance the intersection of technology and healthcare.My desire for
        self- improvement and passion for gaining new knowledge have become
        essential elements in my personal and professional development.
      </p>
    </motion.div>
  );
};

export default AboutMe;
