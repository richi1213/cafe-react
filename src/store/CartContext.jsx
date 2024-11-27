import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  foodItems: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "food/added": {
      const { id, quantity } = action.payload;
      const itemIndex = state.foodItems.findIndex((food) => food.id === id);

      let updatedItems;

      if (itemIndex !== -1) {
        updatedItems = state.foodItems.map((item, index) =>
          index === itemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedItems = [...state.foodItems, { ...action.payload }];
      }

      return {
        ...state,
        foodItems: updatedItems,
      };
    }

    case "food/removed": {
      const { id } = action.payload;
      const updatedItems = state.foodItems.filter((item) => item.id !== id);

      return {
        ...state,
        foodItems: updatedItems,
      };
    }

    case "food/emptied": {
      return initialState;
    }

    case "food/incrementedQuantity": {
      const { id } = action.payload;
      const updatedItems = state.foodItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      return { ...state, foodItems: updatedItems };
    }

    case "food/decrementedQuantity": {
      const { id } = action.payload;
      const itemToDecrement = state.foodItems.find((item) => item.id === id);

      if (itemToDecrement.quantity === 1) {
        return {
          ...state,
          foodItems: state.foodItems.filter((item) => item.id !== id),
        };
      }

      const updatedItems = state.foodItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );

      return { ...state, foodItems: updatedItems };
    }

    default:
      throw new Error("Unknown action");
  }
}

export function CartProvider({ children }) {
  const [{ foodItems }, dispatch] = useReducer(reducer, initialState);

  function addFoodToCart(food) {
    dispatch({
      type: "food/added",
      payload: { ...food },
    });
  }

  function removeFoodFromCart(foodId) {
    dispatch({ type: "food/removed", payload: { id: foodId } });
  }
  function emptyCart() {
    dispatch({ type: "food/emptied" });
  }

  function incrementFoodQuantity(foodId) {
    dispatch({ type: "food/incrementedQuantity", payload: { id: foodId } });
  }

  function decrementFoodQuantity(foodId) {
    dispatch({ type: "food/decrementedQuantity", payload: { id: foodId } });
  }

  return (
    <CartContext.Provider
      value={{
        foodItems,
        addFoodToCart,
        removeFoodFromCart,
        emptyCart,
        incrementFoodQuantity,
        decrementFoodQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const cartContext = useContext(CartContext);

  if (cartContext === undefined)
    throw new Error("CartContext must be used within a CartProvider");

  return cartContext;
}
