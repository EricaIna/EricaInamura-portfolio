import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import * as Pages from "./pages";
import "./App.css";
import { Header } from "./components";
import { AnimatePresence } from "framer-motion";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Pages.HomePage />}></Route>
            <Route path="/projects">
              <Route index element={<Pages.Projects />}></Route>
              {/* <Route path="/shows/:id" element={<Pages.ShowPage />}></Route> */}
            </Route>
            <Route path="/aboutme" element={<AboutMe />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Pages.NotFoundPage />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
