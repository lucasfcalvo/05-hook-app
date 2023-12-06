import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrmt = useCallback((value) => {
    setCounter((count) => count + value);
  }, []);

  //   const incrmt = () => {
  //     setCounter(counter + 1);
  //   };
  return (
    <>
      <h1>use callbackHook: {counter} </h1>
      <ShowIncrement increment={incrmt} />
    </>
  );
};
