import styles from "./FoodList.module.css";
import FoodItem from "../food/FoodItem";

function FoodList({ foodData }) {
  return (
    <ul className={styles.foodList}>
      {foodData.map((food) => (
        <FoodItem foodObj={food} key={food.name} />
      ))}
    </ul>
  );
}

export default FoodList;
