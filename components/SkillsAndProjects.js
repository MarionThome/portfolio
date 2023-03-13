import styles from "../styles/SkillsAndProjects.module.css";
import Techno from "./Techno"
import react_logo from "../assets/react_logo.png";
import nodejs_logo from "../assets/nodejs_logo.png";
import mongodb_logo from "../assets/mongodb_logo.png";
import express_logo from "../assets/express_logo.png";
import next_logo from "../assets/next_logo.png";
import react_native_logo from "../assets/react_native_logo.png";
import redux_logo from "../assets/redux_logo.png";
import project_list from "../projects.json"
import Project from "./Project";

export default function SkillAndProjects(props) {

  const skills = {
    react: react_logo,
    nodejs: nodejs_logo,
    mongodb: mongodb_logo,
    express : express_logo, 
    next : next_logo, 
    react_native : react_native_logo, 
    redux : redux_logo
  };
  return (
    <main className={styles.container}>
      <div className={styles.skillAndProjects}>
        <h1>Skills & Projects</h1>
        <div className={styles.skills}>
          <div className={styles.titleAndLogos}>
          <h3>Filter by skill</h3>
          <div className={styles.logos}>
            {Object.keys(skills).map((skill, index) => {
              console.log(skills[skill])
              return (
                <Techno name = {skill} image={skills[skill]}/>
              );
            })}
          </div>
          <div className={styles.projects}>
            {project_list.map((project) => {
              return <Project {...project}/>
            })}
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
