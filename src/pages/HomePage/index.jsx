import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

import { motion, useAnimation } from "framer-motion";
import Projects from "../Projects";
import Skills from "../../components/Skills";
import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import AnimatedText from "../../components/AnimatedText";
import { Diamond, Right, Left } from "../../components/Diamond";

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
          <div className="headline">
            <Left />
            <h1 className="homepage-h1">
              <AnimatedText text="Hi My name is Erica" />
            </h1>
            <Right />
          </div>
          <h5 className="sub">Frontend developer / UI designer</h5>
        </div>
        <div className="homepage-bc"></div>
      </motion.div>
      <motion.div initial={{ opacity: 1 }} transition={{ duration: 1 }}>
        <>
          <Projects />
          <Skills />
          <AboutMe />
          <Contact />
          <Footer />
        </>
      </motion.div>
    </>
  );
};

export default HomePage;
