import React from "react";
import "./Contact.css";
import { addScaleCorrector, motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="Contact">
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
              style={{ width: "100px", height: "100px", position: "relative" }}
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transformOrigin: "center",
                }}
              >
                <polygon points="45,20 65,50 45,80 25,50" fill="#a94b47" />
              </svg>
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
              style={{ width: "100px", height: "100px", position: "relative" }}
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transformOrigin: "center",
                }}
              >
                <polygon points="45,20 65,50 45,80 25,50" fill="#a94b47" />
              </svg>
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
              style={{ width: "100px", height: "100px", position: "relative" }}
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transformOrigin: "center",
                }}
              >
                <polygon points="45,20 65,50 45,80 25,50" fill="#a94b47" />
              </svg>
            </motion.div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Contact;
