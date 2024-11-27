import { useState } from "react";
import { useCart } from "../../store/CartContext";
import CartModal from "../../ui/overlays/CartModal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import { createOrder } from "../../services/supabase";

function Cart({ clickHandler }) {
  const cartContext = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const isEmpty = cartContext.foodItems.length === 0;

  const cancelHandler = () => {
    clickHandler(false);
  };

  const orderHandler = () => {
    setIsCheckingOut(true);
  };

  const confirmHandler = async ({ name, phoneNumber, address }) => {
    if (!name || !phoneNumber || !address) {
      console.error("Missing required user information");
      return;
    }

    const orderFood = {
      user: {
        name,
        phoneNumber,
        address,
      },
      items: cartContext.foodItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
      })),
      totalPrice: Number(totalPrice),
    };

    // console.log("Order data being sent to Supabase:", orderFood); // Log order data before sending

    // const insertedOrder = await createOrder(orderFood);
    createOrder(orderFood);

    // // Log the inserted order for debugging
    // console.log("Inserted order response:", insertedOrder);

    // if (insertedOrder) {
    //   console.log("Order successfully created:", insertedOrder);
    // } else {
    //   console.error("Failed to create order");
    // }
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
        <button
          className={`${styles.order} ${styles.button}`}
          onClick={orderHandler}
        >
          Order
        </button>
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

        {isCheckingOut && (
          <CheckoutForm
            onCancelClick={cancelHandler}
            onConfirmClick={confirmHandler}
          />
        )}
        {!isCheckingOut && cartControls}
      </div>
    </CartModal>
  );
}

export default Cart;
