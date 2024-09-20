import { forwardRef, useReducer, useEffect } from "react";
import styles from "./Counter.module.css";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count > 0 ? state.count - 1 : state.count };

    case "reset":
      return { count: 0 };

    case "set":
      return { count: action.value };

    default:
      return state;
  }
};

const Counter = forwardRef((props, ref) => {
  const [countState, countDispatch] = useReducer(countReducer, {
    count: props.default,
  });

  const increment = () => {
    countDispatch({ type: "increment" });
  };

  const decrement = () => {
    countDispatch({ type: "decrement" });
  };

  const reset = () => {
    countDispatch({ type: "reset" });
  };

  const set = (num) => {
    countDispatch({ type: "set", value: num });
  };

  useEffect(() => {
    reset();
  }, [props.reset]);

  useEffect(() => {
    set(props.default);
  }, [props.default]);

  useEffect(() => {
    if (props.onCountChange) {
      props.onCountChange(countState.count);
    }
  }, [countState.count, props]);

  return (
    <div className={styles.counter}>
      <button onClick={decrement}>-</button>
      <div className={styles.counterNumber} ref={ref}>
        {countState.count}
      </div>
      <button onClick={increment}>+</button>
    </div>
  );
});

Counter.displayName = "Counter";

export default Counter;
