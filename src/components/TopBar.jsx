import styles from "./TopBar.module.css";

export default function TopBar() {
    return <nav className={styles.topBar}>
        <b className={styles.leftTitle}>My Stopwatch</b>
        <b className={styles.rightTitle}>By @Jxl</b>
    </nav>
}