import styles from "./page.module.css";
import Hero from "public/hero.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <button className={styles.btn}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero-img" className={styles.hero} />
      </div>
    </div>
  );
}