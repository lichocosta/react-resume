import { useState } from "react";

export default function UseState() {
  const [counter, setCounter] = useState(10);
  const [strings, setStrings] = useState(["Hello", " ", "World!"]);

  return (
    <div>
      <h2>useState</h2>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 2)}>+</button>
      <p>{strings}</p>
    </div>
  );
}
