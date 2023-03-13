import Link from "next/link";
import Image from 'next/image'
import placeholder from '../assets/placeholder.png'
import styles from "../styles/Project.module.css"

export default function Project(props) {
  const hashtags = props.keywords.map((word) => {
    return <p>#{word}</p>;
  });
  console.log(props);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectInfo}>
        <h3>{props.name}</h3>
        <div className={styles.hashtags}>{hashtags}</div>
        <p>{props.description}</p>
        <div className={styles.projectLinks}>
          {props.link.github_front !== "" && (
            <Link href={props.link.github_front} target="_blank" style={{color : "#141c1f", textDecoration : "bold", fontSize : "14px"}}>
              Github Front
            </Link>
          )}
          {props.link.github_back !== "" && (
            <Link href={props.link.github_back} target="_blank" style={{color : "#141c1f", textDecoration : "bold", fontSize : "14px"}}>
              Github Back
            </Link>
          )}
          {props.link.prod !== "" && (
            <Link href={props.link.prod} target="_blank" style={{color : "#141c1f", textDecoration : "bold", fontSize : "14px"}}>
              Website
            </Link>
          )}
        </div>
      </div>
      <div style={{position : "relative", width : "100%"}}>

      <Image src = {placeholder} fill={true} style = {{borderRadius : "10px"}}/>
      </div>
    </div>
  );
}
