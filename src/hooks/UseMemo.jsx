import { useMemo } from "react";

function computeExpensiveValue(a, b) {
  return a * b;
}

export default function UseMemo() {
  const change = true;

  const memorizedValue = useMemo(() => computeExpensiveValue(5, 5), [change]);

  return (
    <div>
      <h2>useMemo</h2>
      function result:
      <h3>{memorizedValue}</h3>
    </div>
  );
}

//Memoriza resultados de funciones que consuman muchos recursos
//al llamar/renderizar la app o el componente,
//Hasta que algún valor de este useMemo cambie no se vuelve a ejecutar
