import styles from "./not-found.module.css";

export default function NotFound(){
    return(
        <div className={styles.cotainer}>
            <dl>
                <dt className={styles.title}>ページが見つかりませんでした</dt>
                <dd className={styles.text}>あなたがアクセスしようとしたページは存在しません。
                    <br />
                    URLを再度ご確認下さい。
                </dd>
            </dl>
        </div>
    );
}