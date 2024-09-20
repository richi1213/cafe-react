import styles from "./CartItem.module.css";

function CartItem({ foodData, increment, decrement }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.lable}>
        <h3>{`${foodData.name} x${foodData.quantity} `}</h3>
        <p>${(foodData.price * foodData.quantity).toFixed(2)}</p>
      </div>
      <div className={styles.cartItemControles}>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
