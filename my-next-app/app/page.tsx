import styles from "./page.module.css";
import Image from "next/image";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";





const data: { contents: News[] } = {
        contents:[
    {
         id: "1" ,
         title: "sample text",
         category:{ name: "New" ,
         },
         publishedAt:"2024/07/24" ,
         createdAt: "2024/08/20" ,
    },
    {
         id: "2",
         title :"sample text",
         category: {
            name: "Past"
         },
         publishedAt: "2024/04/04",
         createdAt: "2024/08/20",
    },
    {
        id :"3" ,
        title: "sample text" ,
        category: {
            name:"New",
        },
        publishedAt: "2024/08/20",
        createdAt:"2024/08/20",
    },
    ],
    };

export default function Home() {
    const sliceData = data.contents.slice(0,2);
  return (
    <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>Commission</h1>
        <p className={styles.description}>sample text</p>
      </div>
      <Image className={styles.bgimg} src="/White.png" alt=""
      width={2200}
      height={2100} 
      />
    </section>

     <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData}/>
        <div className={styles.newsLink}>
           <ButtonLink href="/news">More
           </ButtonLink>
        </div>
     </section>
    </>
  );
}       