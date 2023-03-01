import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import { createContext, useRef, useContext } from "react";
import { ComponentContext } from "../context/ComponentContext";

export default () => {
  const aboutRef = useRef(null);

  return (
    <ComponentContext.Provider value={aboutRef}>
      <main>
        <div style={{ height: "100vh" }}>
          <NavBar />
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
      </main>
    </ComponentContext.Provider>
  );
};
