import { useState } from "react";
export const DecrementCounter = () => {
  console.log("INSIDE DecrementCounter METHOD!!!!!!!");
  let [count, setCount] = useState(100);

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="decrementKarVaro!">
      <h1>{count}</h1>
      <button onClick={() => decrementCounter()}>
        Decrement karo muje !!!!!!!
      </button>
    </div>
  );
};
