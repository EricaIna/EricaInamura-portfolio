import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  const skillIcons = [
    { title: "HTML", src: "icon1.svg", alt: "Icon 1" },
    { title: "CSS", src: "icon2.svg", alt: "Icon 2" },
    { title: "JavaScript", src: "icon3.svg", alt: "Icon 3" },
    { title: "React", src: "icon4.svg", alt: "Icon 4" },
    { title: "Node.js", src: "icon5.svg", alt: "Icon 5" },
    { title: "GitHub", src: "icon6.svg", alt: "Icon 6" },
    { title: "SQL", src: "icon7.svg", alt: "Icon 7" },
    { title: "Python", src: "icon8.svg", alt: "Icon 8" },
    { title: "PhotoShop", src: "icon9.svg", alt: "Icon 9" },
    { title: "Figma", src: "icon10.svg", alt: "Icon 10" },
  ];

  return (
    <motion.div
      className="Skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.0 }}
    >
      <h1>SKILLS</h1>

      <motion.div
        className="skill-container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skillIcons.map((icon, index) => (
          <motion.div className="skill-item" key={index} variants={item}>
            {/* <img src={icon.src} alt={icon.alt} /> */}
            <h5>{icon.title}</h5>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
