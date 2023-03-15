import styles from "../styles/About.module.css"
import SocialMedia from "./SocialMedia";
import profilePic from "../assets/profilePic.png"
import Image from 'next/image'

export default function About(props) {
  return (
    <main className={styles.container}>
 
        <div className={styles.textContainer}>
        <h1>About</h1>
        <Image src = {profilePic} alt = "Profile Picture" width={200}
      height={200}/>
        <p>
          Hi ! My name is Marion and I'm a{" "}
          <span>full-stack Javascript developper</span>.
          <br />
          <br />
          After a successful 6 years carrer in a Web Ad Agency in Paris, I
          decided to pursue my <span>dream</span> to become a developper.
        </p>
        </div>
    </main>
  );
}
