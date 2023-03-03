import styles from "../styles/Contact.module.css";
import Button from "./Button";

export default function Contact(props) {

  
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Contact</h1>
        <p>
          My inbox is always open ! 
          <br />
          <br />
          Also, I'm currently <span>looking for new
          opportunities</span> and challenges, so don't hesitate to <span>say hi</span>!
        </p>
      </div>
      <Button name={"Send me a Message"} handleClick={() => window.location = 'mailto:thm.marion@gmail.com'}/>
    </main>
  );
}
