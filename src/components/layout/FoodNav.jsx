import { NavLink } from "react-router-dom";
import styles from "./FoodNav.module.css";
import FoodFilterItem from "../food/FoodFilterItem";
import categoryAllImg from "../../assets/category/categoryAll.png";
import categoryBurgerImg from "../../assets/category/categoryBurger.png";
import categoryDesertImg from "../../assets/category/categoryDesert.png";
import categoryPizzaImg from "../../assets/category/categoryPizza.png";
import categorySaladImg from "../../assets/category/categorySalad.png";

function FoodNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">
            <FoodFilterItem image={categoryAllImg} category="All" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/burger">
            <FoodFilterItem image={categoryBurgerImg} category="Burger" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/pizza">
            <FoodFilterItem image={categoryPizzaImg} category="Pizza" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/meal">
            <FoodFilterItem image={categorySaladImg} category="Meal" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/desert">
            <FoodFilterItem image={categoryDesertImg} category="Desert" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FoodNav;
