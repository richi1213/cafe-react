import { useEffect, useState } from "react";
import CartIcon from "../../ui/icons/CartIcon";
import styles from "./CartButton.module.css";
import { useCart } from "../../store/CartContext";

function CartButton({ onCartButtonClick }) {
  const cartContext = useCart();
  const [isCartButtonHighlighted, setIsCartButtonHighlighted] = useState(false);
  const { foodItems } = cartContext;

  let numberOfCartItems = foodItems.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  const clickHandler = () => {
    onCartButtonClick(true);
  };

  let cartBtnClasses = `${styles.iconContainer} ${
    isCartButtonHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    if (foodItems.length === 0) return;
    setIsCartButtonHighlighted(true);

    const timer = setTimeout(() => {
      setIsCartButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [foodItems]);

  return (
    <div className={cartBtnClasses}>
      <button className={styles.cartButton} onClick={clickHandler}>
        <CartIcon />
      </button>
      <div className={styles.cartItemCount}>{numberOfCartItems}</div>
    </div>
  );
}

export default CartButton;
