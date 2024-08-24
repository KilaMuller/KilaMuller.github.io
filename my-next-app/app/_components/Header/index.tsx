import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

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
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li>
                        <Link href="/news">News</Link>
                    </li>
                    <li>
                        <Link href="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}