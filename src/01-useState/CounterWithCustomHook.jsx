import { useCounter } from "../hooks/useCounter";
export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, resetCount } = useCounter();
  return (
    <>
      <h1>counter with Hook: {counter}</h1>
      <hr />
      <button className="btn" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn" onClick={resetCount}>
        Reset
      </button>

      <button className="btn" onClick={() => decrement(3)}>
        -1
      </button>
    </>
  );
};
