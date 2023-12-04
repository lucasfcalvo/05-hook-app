import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const decrement = (value = 1) => {
    //se evalua de que el counter no pueda ser menor a cero
    if (counter === 0) return;
    setCounter(counter - value);
  };
  const resetCount = () => {
    setCounter(initialValue);
  };
  return {
    // counter: counter,
    counter,
    increment,
    decrement,
    resetCount,
  };
};
