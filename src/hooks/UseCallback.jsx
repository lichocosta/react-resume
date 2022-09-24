import { useCallback, useState } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(30);

  const showCount = useCallback(() => {
    alert(count);
  },[count]); //segundo argumento, cada vez que cambie la variable 'count' se vuelva a llamar/renderizar la funcion.

  return (
    <div>
      <h2>useCallback</h2>
      <button onClick={showCount}>Component 1</button>
      <button onClick={showCount}>Component 2</button>
      <button onClick={showCount}>Component 3</button>
    </div>
  );
}

//es similar a useMemo, son para mejorara performance
//la diferencia es que este Memo solo memoriza un valor
//y Callback una función
