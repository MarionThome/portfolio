import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import SkillAndProjects from "../components/SkillsAndProjects";
import Contact from "../components/Contact";
import { createContext, useRef, useContext } from "react";
import { ComponentContext } from "../context/ComponentContext";

export default () => {
  const componentRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];;

  return (
    <ComponentContext.Provider value={componentRefs}>
      <div>
        <div style={{ height: "100vh" }}>
          <NavBar />
          <Home />
        </div>
        <div ref={componentRefs[0]}>
          <About />
        </div>
        <div ref={componentRefs[1]}>
          <SkillAndProjects/>
        </div>
        <div ref={componentRefs[2]}>
          <Contact/>
        </div>
      </div>
    </ComponentContext.Provider>
  );
};
