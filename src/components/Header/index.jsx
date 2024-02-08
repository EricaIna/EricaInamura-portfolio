import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";

const Header = () => {
  return (
    <main>
      <header>
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/skills">SKILLS</NavLink>
          <NavLink to="/aboutme">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <DropdownMenu />
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default Header;
