import React, { useState } from "react";

const CounterFunc = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((prevState) => prevState + 1);
  const decrementCount = () => setCount((prevState) => prevState - 1);

  return (
    <div className="text-center bg-slate-400 py-4 rounded border border-neutral-900">
      <p className="text-2xl font-bold mb-4">Count: {count}</p>
      <button className="default-button mr-3" onClick={incrementCount}>Increment</button>
      <button className="default-button" onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default CounterFunc;
