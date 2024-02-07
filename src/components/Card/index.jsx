// import React, { useState } from "react";
// import "./Card.css";
// import { motion, AnimatePresence } from "framer-motion";
// import CloseButton from "../ Closebtn";

// const Card = ({ item }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleCard = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="card-container">
//       <motion.div className={`card`} onClick={toggleCard}>
//         <img src={item.img} className="cardImg"></img>
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               className="modal-overlay"
//               onClick={() => setIsOpen(false)}
//               //   initial={{ opacity: 0 }}
//               //   animate={{ opacity: 1 }}
//               //   exit={{ opacity: 0 }}
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <motion.div className="modal-content">
//                 {isOpen && (
//                   <>
//                     <div>
//                       {" "}
//                       <motion.button onClick={() => setIsOpen(false)}>
//                         <CloseButton />
//                       </motion.button>
//                       <img
//                         src={`../src/assets/${item.modalImg}`}
//                         className="modalImg"
//                       />
//                     </div>

//                     <h2>{item.title}</h2>
//                     <h5 className="technology">
//                       {item.technologies.split(",").map((technology, index) => (
//                         <span key={index}>
//                           {technology
//                             .trim()
//                             .split(" ")
//                             .map((word, wordIndex) => (
//                               <span key={wordIndex} className="technology-word">
//                                 {word}
//                               </span>
//                             ))}
//                         </span>
//                       ))}
//                     </h5>

//                     <p>{item.details}</p>
//                     <p>{item.link}</p>
//                   </>
//                 )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default Card;

import React, { useState } from "react";
import "./Card.css";
import { motion, AnimatePresence } from "framer-motion";
import CloseButton from "../ Closebtn";

const Card = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="card-container">
      <motion.div className={`card`} onClick={toggleCard}>
        <img src={item.img} className="cardImg"></img>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="modal-overlay"
              onClick={() => setIsOpen(false)}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="modal-content" onClick={stopPropagation}>
                {isOpen && (
                  <>
                    <div>
                      <motion.button onClick={() => setIsOpen(false)}>
                        <CloseButton />
                      </motion.button>
                      <img
                        src={`../src/assets/${item.modalImg}`}
                        className="modalImg"
                      />
                    </div>
                    <h2>{item.title}</h2>
                    <h5 className="technology">
                      {item.technologies.split(",").map((technology, index) => (
                        <span key={index}>
                          {technology
                            .trim()
                            .split(" ")
                            .map((word, wordIndex) => (
                              <span key={wordIndex} className="technology-word">
                                {word}
                              </span>
                            ))}
                        </span>
                      ))}
                    </h5>
                    <div className="modal-bottom">
                      <div className="description">
                        <h5>Description</h5>
                        <p>{item.details}</p>
                      </div>
                      <div className="link">
                        <h5>Link</h5>
                        <a href={item.link}>Git Hub</a>
                        <a href={item.live}>Live</a>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Card;
