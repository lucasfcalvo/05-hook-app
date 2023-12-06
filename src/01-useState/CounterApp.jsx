import React, { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;
  const [elCounter, setElCounter] = useState(0)
  return (
    <>
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      <h1>Counter 3: {counter3}</h1>
      <h1>el Counter: {elCounter}</h1>
      <hr />
      <button
        className="btn"
        onClick={() =>
          setCounter({
            ...counter,
            counter1: counter1 + 1,
          })
        }
      >
        {/* <button className="btn" onClick={()=>setElCounter(elCounter + 1)}> */}
        (counter 1 ) +1
      </button>
      <button
        className="btn"
        onClick={() =>
          setCounter({
            ...counter,
            counter2: counter2 + 1,
          })
        }
      >
        (counter 2 ) +1
      </button>
      <button
        className="btn"
        onClick={() =>
          setCounter({
            ...counter,
            counter3: counter3 + 1,
          })
        }
      >
        (counter 3 )+1
      </button>
       <button className="btn" onClick={()=>setElCounter(elCounter + 1)}>
       (elCounter ) +1
      </button>
    </>
  );
};
