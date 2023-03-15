import styles from "../styles/SkillsAndProjects.module.css";
import Techno from "./Techno";
import react_logo from "../assets/react_logo.png";
import nodejs_logo from "../assets/nodejs_logo.png";
import mongodb_logo from "../assets/mongodb_logo.png";
import express_logo from "../assets/express_logo.png";
import next_logo from "../assets/next_logo.png";
import react_native_logo from "../assets/react_native_logo.png";
import redux_logo from "../assets/redux_logo.png";
import project_list from "../projects.json";
import Project from "./Project";
import { useEffect, useState } from "react";

export default function SkillAndProjects(props) {

  const [selectedCat, setSelectedCat] = useState([]);
  const [selected, setSelected] = useState([])

  const skills = {
    react: react_logo,
    nodeJs: nodejs_logo,
    mongoDB: mongodb_logo,
    express: express_logo,
    nextJS: next_logo,
    reactNative: react_native_logo,
    redux: redux_logo,
  };

  useEffect(() => {
    setSelectedCat(project_list.map((project) => {
      if (selected.length === 0) {
        return <Project {...project} />;
      } else {
        if (selected.some((value) => project.keywords.includes(value))) {
          return <Project {...project} />;
        }
      }
    }).filter(project => project))
  }, [selected]);


  const handleClick = (keyword) => {
    if(selected.find((word) => word === keyword)){
      setSelected(selected.filter((word) => word !== keyword))
    }
    else {
      setSelected([...selected, keyword])
    }
  }

  console.log({
    selectedCat: selectedCat, 
    selectedCatLength: selectedCat.length, 
    project_list: project_list.length, 
    condition: selectedCat.length < project_list.length
  })
  return (
    <main className={styles.container}>
      <div className={styles.skillAndProjects}>
        <h1>Skills & Projects</h1>
        <div className={styles.skills}>
          <div className={styles.titleAndLogos}>
            <h3>Filter by skill</h3>
            <div className={styles.logos}>
              {Object.keys(skills).map((skill, index) => {
                return <Techno name={skill} image={skills[skill]} handleClick = {handleClick}/>;
              })}
            </div>
            <p>{selectedCat.length < project_list.length ? selectedCat.length : project_list.length} projects</p>
            <div className={styles.projects}>
              {selectedCat}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
