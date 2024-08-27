import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from"../Menu";

export default function Header() {
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.lofoLink}> {/*ここにロゴ*/} 
            <Image
              src="/logo.svg"
              alt="logo"
              className={styles.logo}
              width={348}  // 幅を1000に設定
              height={191}  // 高さを1000に設定
              priority
            />
            </Link>
            <Menu />
        </header>
    );
}