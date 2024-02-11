import React from "react";
import { motion } from "framer-motion";

export function Diamond() {
  return <img src="../diamond.svg" alt="Logo" />;
}

export function Right() {
  return (
    <motion.img
      src="../right.svg"
      alt="Logo"
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ duration: 3, delay: 1 }}
    />
  );
}
export function Left() {
  return (
    <motion.img
      src="../left.svg"
      alt="Logo"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 3, delay: 1 }}
    />
  );
}

export default { Diamond, Right, Left };
