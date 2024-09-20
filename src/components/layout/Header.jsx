import LogoIcon from "../../ui/icons/LogoIcon";
import CartButton from "../cart/CartButton";
import styles from "./Header.module.css";

function Header({ isIntersecting, clickHandler }) {
  return (
    <header
      className={`${styles.header} ${
        isIntersecting ? styles.intersecting : ""
      }`}
    >
      <div className={styles.logo}>
        <div className={styles.heading}>
          <p>Welcome to</p>
          <h1>Cafe React</h1>
        </div>

        <LogoIcon />
      </div>

      <CartButton onCartButtonClick={clickHandler} />
    </header>
  );
}

export default Header;
