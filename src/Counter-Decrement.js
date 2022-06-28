// How to pass a Function as props in React?

export const CounterDecrement = ({ count, DecrementCounter }) => {
  console.log("INSIDE CounterDecrement COMPONENT");
  return (
    <div className="counterDecrement">
      <h1>Decrement counter is {count}!!!!!!!!!!</h1>
      <button onClick={() => DecrementCounter(count)}>
        {" "}
        decrement karo muje !!!!!!!
      </button>
    </div>
  );
};
