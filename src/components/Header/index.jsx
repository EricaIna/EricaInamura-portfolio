import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 751px)").matches
  );
  const [isTabletScreen, setIsTabletScreen] = useState(
    window.matchMedia("(min-width: 752px) and (max-width: 1121px)").matches
  );
  const [isPCScreen, setIsPCScreen] = useState(
    window.matchMedia("(min-width: 1122px)").matches
  );
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    const updateMedia = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 751px)").matches);
      setIsTabletScreen(
        window.matchMedia("(min-width: 752px) and (max-width: 1121px)").matches
      );
      setIsPCScreen(window.matchMedia("(min-width: 1122px)").matches);
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <main>
      <header>
        <nav>
          {showLinks && !isSmallScreen && (
            <>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/projects">PROJECTS</NavLink>
              <NavLink to="/skills">SKILLS</NavLink>
              <NavLink to="/aboutme">ABOUT</NavLink>
              <NavLink to="/contact">CONTACT</NavLink>
            </>
          )}
        </nav>
        {isSmallScreen && <DropdownMenu setShowLinks={setShowLinks} />}
      </header>
      <Outlet />
    </main>
  );
};

export default Header;
