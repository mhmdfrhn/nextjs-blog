import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            className={styles.img}
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            esse aut neque voluptatibus quidem alias tempore modi sunt fuga nam.
            Quaerat aperiam error enim aliquam.
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            className={styles.img}
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            esse aut neque voluptatibus quidem alias tempore modi sunt fuga nam.
            Quaerat aperiam error enim aliquam.
          </p>
        </div>
      </Link>
    </div>
  );
}
