import React from "react";
import "./Projects.css";
import Card from "../../components/Card";

import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const items = [
    {
      id: 1,
      title: "Film Finder",
      technologies: "React Python Flask Javascript HTML CSS",
      roles: "Art direction, Web design,Front end",
      details:
        "This project is an end-to-end team collaboration, built with React for the front end and Python for the back end. The purpose of this app is to provide users with a list of movies they can browse, save to their list, review, rate, and receive recommendations based on their watched movies.",
      img: "../../../Filmfinder.png",
      modalImg: "../../../film-modal.png",
      link: "https://github.com/EricaIna/Reddy_43_Client.git",
    },
    {
      id: 2,
      title: "Time Labyrinth",
      technologies: "Javascript express.js HTML CSS",
      roles: "Web design, Front-end",
      details:
        "The History Maze Game is an educational and engaging experience tailored for secondary school students. It takes players on an exciting journey through a maze filled with historical checkpoints, challenging them with history-related questions. The game, crafted with HTML, CSS, JavaScript, ExpressJS, and NodeJS, offers an immersive and interactive learning experience.",
      img: "../../../TimeLabyrinth.png",
      modalImg: "../../../maze-modal.png",
      link: "https://github.com/EricaIna/History-Maze-Game.git",
    },
    {
      id: 3,
      title: "E Medical Service",
      technologies: "HTML CSS Javascript",
      details:
        "My first responsive , bilingual website, created to practice HTML, CSS, and JavaScript without using frameworks, was inspired by my experiences working in A&E in the UK. The concept is to offer medical interpreting services for Japanese individuals in the UK who do not speak English.",
      img: "../../../e-medical.png",
      modalImg: "../../../medical-modal.png",
      link: "https://github.com/EricaIna/med-translate",
      live: "https://e-medical-service.netlify.app/",
    },
  ];
  return (
    <motion.div
      className="Projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.0 }}
    >
      <h1>Projects</h1>
      <motion.div className="card-wrapper">
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
