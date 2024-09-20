import styles from "./FoodFilterItem.module.css";

function FoodFilterItem({ image, category }) {
  return (
    <div className={styles.filterCategory}>
      <img src={image} alt={`${category} image`} />
      <h5>{category}</h5>
    </div>
  );
}

export default FoodFilterItem;
