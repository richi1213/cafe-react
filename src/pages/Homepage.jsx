import { useEffect } from "react";
import FoodLayout from "../components/layout/FoodLayout";

function Homepage({
  foodData,
  intersectionRef,
  isIntersecting,
  setCurFoodCategory,
}) {
  useEffect(() => setCurFoodCategory("all"), [setCurFoodCategory]);
  return (
    <FoodLayout
      intersectionRef={intersectionRef}
      isIntersecting={isIntersecting}
      foodData={foodData}
    ></FoodLayout>
  );
}

export default Homepage;
