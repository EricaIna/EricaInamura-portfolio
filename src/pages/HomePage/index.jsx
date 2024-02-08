import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import Projects from "../Projects";
import Skills from "../../components/Skills";
import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";

const HomePage = () => {
  return (
    <>
      <motion.div
        className="homepage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="homepage-title">
          <h1> Hi My name is Erica</h1>
          <h5 className="sub">Frontend developer / UI designer</h5>
        </div>
        <div className="homepage-bc"></div>
      </motion.div>
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </>
  );
};

export default HomePage;
