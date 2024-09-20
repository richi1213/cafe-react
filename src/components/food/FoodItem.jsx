import { useEffect, useRef, useState } from "react";
import AddToCart from "../../ui/buttons/AddToCart";
import styles from "./FoodItem.module.css";
import Counter from "../../ui/buttons/Counter";
import { useCart } from "../../store/CartContext";

function FoodItem({ foodObj }) {
  const [imageLoaded, setImageLoaded] = useState(true);
  const [counterResetToggle, setCounterResetToggle] = useState(false);
  const [invalidNumberOfItem, setInvalidNumberOfItem] = useState(false);

  const quantityRef = useRef(0);

  const cartContext = useCart();

  function addToCartHandler() {
    const foodItemData = {
      id: foodObj.id,
      name: foodObj.name,
      price: foodObj.price,
      quantity: quantityRef.current,
    };

    if (foodItemData.quantity === 0) {
      setInvalidNumberOfItem(true);
      setInterval(() => {
        setInvalidNumberOfItem(false);
      }, 1500);
      return;
    }

    setCounterResetToggle(!counterResetToggle);
    setInvalidNumberOfItem(false);
    cartContext.addFoodToCart(foodItemData);
  }

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.src = foodObj.imgSrc;
  }, [foodObj.imgSrc]);

  const blurHashContent = <div className={styles.blurhash}></div>;

  let imageContent;

  imageLoaded
    ? (imageContent = (
        <img src={foodObj.imgSrc} alt={foodObj.name} loading="lazy" />
      ))
    : (imageContent = blurHashContent);

  return (
    <li className={styles.foodItem}>
      {imageContent}
      <h4 className={styles.foodTitle}>{foodObj.name}</h4>
      <p className={styles.foodDesc}>{foodObj.desc}</p>
      <h3 className={styles.foodPrice}>${foodObj.price}</h3>
      <Counter
        ref={quantityRef}
        default={0}
        reset={counterResetToggle}
        onCountChange={(count) => (quantityRef.current = count)}
      />
      <AddToCart onAddToCart={addToCartHandler} />
      {invalidNumberOfItem && (
        <p className={styles.errorMsg}>Please select number of items</p>
      )}
    </li>
  );
}

export default FoodItem;
