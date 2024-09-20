import { useCart } from "../../store/CartContext";
import CartModal from "../../ui/overlays/CartModal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart({ clickHandler }) {
  const cartContext = useCart();
  const isEmpty = cartContext.foodItems.length === 0;

  const cancelHandler = () => {
    clickHandler(false);
  };

  const cartIncrementQuantityHandler = (itemId) => {
    cartContext.incrementFoodQuantity(itemId);
  };

  const cartDecrementQuantityHandler = (itemId) => {
    cartContext.decrementFoodQuantity(itemId);
  };

  const totalPrice = cartContext.foodItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const cartControls = (
    <div className={styles.controls}>
      <button
        className={`${styles.cancel} ${styles.button}`}
        onClick={cancelHandler}
      >
        Cancel
      </button>
      {!isEmpty && (
        <button className={`${styles.order} ${styles.button}`}>Order</button>
      )}
    </div>
  );

  return (
    <CartModal onBackdropClick={clickHandler}>
      <div className={styles.cart}>
        <h2>Cart</h2>
        {isEmpty && <p>Add some delicious food in your cart</p>}
        <div className={styles.cartItems}>
          {cartContext.foodItems.map((item) => (
            <CartItem
              foodData={item}
              key={item.id}
              increment={() => cartIncrementQuantityHandler(item.id)}
              decrement={() => cartDecrementQuantityHandler(item.id)}
            />
          ))}
        </div>

        <h2>{`Total: $${totalPrice}`}</h2>
        {cartControls}
      </div>
    </CartModal>
  );
}

export default Cart;
