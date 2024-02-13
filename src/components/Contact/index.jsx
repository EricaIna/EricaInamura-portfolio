import React from "react";
import "./Contact.css";
import { addScaleCorrector, motion } from "framer-motion";
import { Diamond } from "../Diamond";
import ScrollReveal from "../ScrollReveal";

const Contact = () => {
  return (
    <ScrollReveal move="bottom">
      <motion.div
        className="Contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.0 }}
      >
        <h1>Contact</h1>
        <ul className="contact-area">
          <li className="mail-area">
            <motion.a
              href="mailto:erica.rirura.4you@gmail.com"
              whileHover={{ scale: 1.2 }}
            >
              erica.rirura.4you@gmail.com
            </motion.a>
          </li>
          <div className="content-right">
            <div className="content-li">
              <motion.div
                animate={{
                  rotateY: 180,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <Diamond />
              </motion.div>

              <ul className="svg-ul">
                <li>
                  <motion.a
                    href="https://www.linkedin.com/in/erica-inamura-b7b704255/"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                  >
                    Linked in
                  </motion.a>
                </li>
              </ul>

              <motion.div
                animate={{
                  rotateY: 180,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <Diamond />
              </motion.div>

              <ul className="svg-ul">
                <li>
                  <motion.a
                    href="https://github.com/EricaIna"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                  >
                    GIT HUB
                  </motion.a>
                </li>
              </ul>
              <motion.div
                animate={{
                  rotateY: 180,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <Diamond />
              </motion.div>
            </div>
          </div>
        </ul>
      </motion.div>
    </ScrollReveal>
  );
};

export default Contact;
