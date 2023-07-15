import { useState } from "react";

export function Counter() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum((currentNum) => {
      return currentNum + 1;
    });
  };

  function decrease() {
    setNum((currentNum) => {
      return currentNum - 1;
    });
  }

  return (
    <>
      <h3>{num}</h3>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </>
  );
}
