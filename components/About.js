import styles from "../styles/About.module.css"
import SocialMedia from "./SocialMedia";

export default function About(props) {
  return (
    <main className={styles.container}>
 
        <div className={styles.textContainer}>
        <h1>About</h1>
        <p>
          Hi ! My name is Marion and I'm a{" "}
          <span>full-stack Javascript developper</span>.
          <br />
          <br />
          After a successful 6 years carrer in a Web Ad Agency in Paris, I
          decided to pursue my <span>dream</span> to become a developper.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
          <span>sed do eiusmod tempor</span> incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco <span> laboris nisi ut aliquip ex ea </span> commodo
          consequat.
        </p>
        </div>
    </main>
  );
}
