import Header from "./Header";
import FoodNav from "./FoodNav";
import FoodList from "./FoodList";
import Footer from "./Footer";
import { useState } from "react";
import Cart from "../cart/Cart";

function FoodLayout({ children, intersectionRef, isIntersecting, foodData }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  function cartOpenHandler(value) {
    setIsCartOpen(value);
  }

  // const orderClickHandler = () => {
  //   setIsOrderPlaced(true);
  //   setInterval(() => {
  //     setIsOrderPlaced(false);
  //   }, 3000);
  // };

  return (
    <div>
      <div ref={intersectionRef}></div>
      {isCartOpen && <Cart clickHandler={cartOpenHandler} />}
      <Header isIntersecting={isIntersecting} clickHandler={cartOpenHandler} />
      <FoodNav />
      <FoodList foodData={foodData} />
      {children}
      <Footer />
    </div>
  );
}

export default FoodLayout;
