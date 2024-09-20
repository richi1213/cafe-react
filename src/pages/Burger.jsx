import { useEffect } from "react";
import FoodLayout from "../components/layout/FoodLayout";

function Burger({
  foodData,
  intersectionRef,
  isIntersecting,
  curFoodCategory,
  setCurFoodCategory,
}) {
  useEffect(() => setCurFoodCategory("burger"), [setCurFoodCategory]);

  return (
    <FoodLayout
      intersectionRef={intersectionRef}
      isIntersecting={isIntersecting}
      foodData={foodData.filter((food) => food.category === curFoodCategory)}
    ></FoodLayout>
  );
}

export default Burger;
