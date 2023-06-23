import Button from "@/components/button/Button";
import Image from "next/image";
import styles from "./page.module.css";

export default function Category({ params }) {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae in officiis amet numquam iste ipsam tempore cum dicta
            odio praesentium. Tempora possimus nobis, minus animi omnis
            laudantium officiis et odit.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            alt=""
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae in officiis amet numquam iste ipsam tempore cum dicta
            odio praesentium. Tempora possimus nobis, minus animi omnis
            laudantium officiis et odit.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            alt=""
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          />
        </div>
      </div>
    </div>
  );
}
