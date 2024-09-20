import { BrowserRouter, Route, Routes } from "react-router-dom";
import Burger from "./pages/Burger";
import Pizza from "./pages/Pizza";
import Meal from "./pages/Meal";
import Desert from "./pages/Desert";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getFood } from "./services/apiFood";
import { CartProvider } from "./store/CartContext";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [intersectionRef, isVisible] = useInView();
  const [curFoodCategory, setCurFoodCategory] = useState("all");

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    getFood()
      .then((data) => {
        setFoodData(data);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
      });
  }, []);

  useEffect(() => {
    if (!curFoodCategory) return;
    if (curFoodCategory === "all") {
      document.title = "Cafe React";
      return;
    }
    document.title = `Category | ${capitalizeFirstLetter(curFoodCategory)}`;
    return () => {
      document.title = "Cafe React";
    };
  }, [curFoodCategory]);

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                foodData={foodData}
                intersectionRef={intersectionRef}
                isIntersecting={!isVisible}
                setCurFoodCategory={setCurFoodCategory}
              />
            }
          />
          <Route
            path="burger"
            element={
              <Burger
                foodData={foodData}
                intersectionRef={intersectionRef}
                isIntersecting={!isVisible}
                curFoodCategory={curFoodCategory}
                setCurFoodCategory={setCurFoodCategory}
              />
            }
          />
          <Route
            path="pizza"
            element={
              <Pizza
                foodData={foodData}
                intersectionRef={intersectionRef}
                isIntersecting={!isVisible}
                curFoodCategory={curFoodCategory}
                setCurFoodCategory={setCurFoodCategory}
              />
            }
          />
          <Route
            path="meal"
            element={
              <Meal
                foodData={foodData}
                intersectionRef={intersectionRef}
                isIntersecting={!isVisible}
                curFoodCategory={curFoodCategory}
                setCurFoodCategory={setCurFoodCategory}
              />
            }
          />
          <Route
            path="desert"
            element={
              <Desert
                foodData={foodData}
                intersectionRef={intersectionRef}
                isIntersecting={!isVisible}
                curFoodCategory={curFoodCategory}
                setCurFoodCategory={setCurFoodCategory}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
