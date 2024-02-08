import React from "react";
import { useState, useEffect } from "react";
import "./Dropdownmenu.css";
import ArrowIcon from "../ArrowIcon";
import { HamburgerIcon, CloseIcon } from "../Icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    const originalStyle = window.getComputedStyle(body).overflow;
    body.style.overflow = isOpen ? "hidden" : originalStyle;

    return () => {
      body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="menu-icon" onClick={toggleDropdown}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      {isOpen && (
        <div className="menu-content" data-testid="custom">
          <motion.div
            className="main-rect"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul>
              <li>
                <ArrowIcon />
                <Link to="/" onClick={closeMenu}>
                  HOME
                </Link>
              </li>
              <li>
                <ArrowIcon />
                <Link to="projects" onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <ArrowIcon />
                <Link to="/skills" onClick={closeMenu}>
                  Skills
                </Link>
              </li>
              <li>
                <ArrowIcon />
                <Link to="/aboutme" onClick={closeMenu}>
                  About me
                </Link>
              </li>

              <li>
                <ArrowIcon />
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
