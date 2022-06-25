import { useState } from "react";
export default function Counter() {
  console.log("inside counter component ");
  //   initialized counter variable
  let [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <h1>Inside Counter component!!!!!!!!</h1>
      <button onClick={() => setCount(count + 1)}>counter!!!!!</button>
    </div>
  );
}
