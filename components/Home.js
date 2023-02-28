import styles from "../styles/Home.module.css"
import profilePic from "../assets/profilePic.png"
import Image from 'next/image'
import Button from "./Button";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
    <div className={styles.infoContainer}>
        <div>
      <span>Hi, my name is</span>
      <h1>Marion Thomé</h1>
      <p>Full-Stack developper, <br />
        ready to build for the web</p>
        </div>
        <div className={styles.buttonContainer}>
           <Button name={"Check My Work"}/>
        </div>
    </div>
    <Image src = {profilePic} alt = "Profile Picture" width={450}
      height={450}/>
    </div>
  );
}
