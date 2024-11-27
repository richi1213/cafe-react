import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.customLoader}></div>
      <div className={styles.loadingText}>Awesome food is on the way...</div>
    </div>
  );
}
