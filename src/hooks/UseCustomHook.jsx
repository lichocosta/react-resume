import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increase = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return {
    counter,
    increase,
    decrement,
    reset,
  };
};

export default function UseCustomHook() {
  const counterA = useCounter(15);
  const counterB = useCounter(25);

  return (
    <div>
      <h2>useCustomHook</h2>
      <h3>{counterA.counter}</h3>
      <div>
        <button onClick={counterA.decrement}>-</button>
        <button onClick={counterA.increase}>+</button>
        <button onClick={counterA.reset}>0</button>
      </div>
      <h3>{counterB.counter}</h3>
      <div>
        <button onClick={counterB.decrement}>-</button>
        <button onClick={counterB.increase}>+</button>
        <button onClick={counterB.reset}>0</button>
      </div>
    </div>
  );
}

//Sirve para extraer la lógica de la visualizacion
