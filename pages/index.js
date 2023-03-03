import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import SkillAndProjects from "../components/SkillsAndProjects";
import Contact from "../components/Contact";
import { createContext, useRef, useContext } from "react";
import { ComponentContext } from "../context/ComponentContext";
import SocialMedia from "../components/SocialMedia";
import linkedin from "../assets/linkedin_logo.png"
import github from "../assets/github_logo.png"

export default () => {
  const componentRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];;

  return (
    <ComponentContext.Provider value={componentRefs}>
      <div style={{height : "100vh"}}>
        <SocialMedia src={linkedin.src} name={"linkedin_logo"} bottom = {20} left = {30} url={"https://www.linkedin.com/in/marionthome/"}/>
        <SocialMedia src={github.src} name={"github_logo"} bottom = {90} left = {30} url={"https://github.com/MarionThome"}/>
        <div>
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
