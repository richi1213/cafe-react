import { useEffect } from "react";
import FoodLayout from "../components/layout/FoodLayout";

function Meal({
  foodData,
  intersectionRef,
  isIntersecting,
  curFoodCategory,
  setCurFoodCategory,
}) {
  useEffect(() => setCurFoodCategory("meal"), [setCurFoodCategory]);

  return (
    <FoodLayout
      intersectionRef={intersectionRef}
      isIntersecting={isIntersecting}
      foodData={foodData.filter((food) => food.category === curFoodCategory)}
    ></FoodLayout>
  );
}

export default Meal;
