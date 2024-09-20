import styles from "./AddToCart.module.css";

function AddToCart({ onAddToCart }) {
  return (
    <button className={styles.addToCartBtn} onClick={onAddToCart}>
      Add to Cart
    </button>
  );
}

export default AddToCart;
