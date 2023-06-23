import Image from "next/image";
import styles from "./page.module.css";

export default function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            itaque in fuga cupiditate atque facilis repellendus dignissimos
            omnis consequatur, impedit, incidunt, veniam expedita voluptate
            dicta.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          molestias aperiam natus placeat nihil? Doloribus ullam atque,
          accusantium quod iure totam odio cupiditate ea nesciunt fugit iusto
          facilis deserunt blanditiis hic natus consequatur aliquid assumenda
          nostrum sequi architecto quas praesentium vero eum. Ullam rem eligendi
          cupiditate dignissimos atque delectus fuga consectetur blanditiis{" "}
          <br /> necessitatibus optio modi exercitationem nobis harum est
          facilis, non vel qui in! Obcaecati doloremque aliquid quia modi,
          officiis, assumenda commodi animi cum voluptas dolorem quibusdam nam
          dignissimos eveniet necessitatibus at eaque eum! Amet magni neque
          repellendus vero perferendis necessitatibus possimus <br />
          perspiciatis, tempora harum voluptatum eos eligendi unde eveniet
          sapiente deserunt, voluptas illo placeat reprehenderit esse sint.
          Asperiores error dolore pariatur nam rerum similique tempora ipsa
          blanditiis voluptates labore alias voluptatem deleniti officiis natus
          velit aspernatur dolor, beatae libero aliquam. Adipisci molestiae
          aspernatur possimus aut ab minima, quod omnis similique quidem vero
          facere ducimus voluptatibus saepe doloremque repellat? Dolorum.
        </p>
      </div>
    </div>
  );
}
