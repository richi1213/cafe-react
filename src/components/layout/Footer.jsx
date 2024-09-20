import FacebookIcon from "../../ui/icons/FacebookIcon";
import InstagramIcon from "../../ui/icons/InstagramIcon";
import PinterestIcon from "../../ui/icons/PinterestIcon";
import TwitterIcon from "../../ui/icons/TwitterIcon";
import styles from "./Footer.module.css";
0;
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.upper}>
        <div className={styles.icons}>
          <div className={styles.iconContainer}>
            <FacebookIcon />
          </div>
          <div className={styles.iconContainer}>
            <InstagramIcon />
          </div>
          <div className={styles.iconContainer}>
            <PinterestIcon />
          </div>
          <div className={styles.iconContainer}>
            <TwitterIcon />
          </div>
        </div>
        <div className={styles.links_1}>
          <a href="#">HOME</a>
          <a href="#">MENU</a>
          <a href="#">STORY</a>
          <a href="#">DETOX</a>
          <a href="#">LOCATION</a>
        </div>
        <div className={styles.links_2}>
          <a href="#">COONTACT</a>
          <p>|</p>
          <a href="#">BLOG</a>
          <p>|</p>
          <a href="#">CATERING</a>
          <p>|</p>
          <a href="#">DELIVERY</a>
        </div>
      </div>
      <div className={styles.lower}>
        <h6>
          HEALTY &#183; TASTY &#183; FAST &#183; CASUAL &#183; CRAFTED WITH{" "}
          <span className={styles.heart}>&#10084;</span> AT CAFE REACT
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
