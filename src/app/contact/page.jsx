import Button from "@/components/button/Button";
import Image from "next/image";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill={true} alt="" className={styles.img} />
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea
            className={styles.textArea}
            cols="30"
            rows="10"
            placeholder="messages"
          ></textarea>
          <Button url="#" text="Send" />
        </div>
      </div>
    </div>
  );
}
