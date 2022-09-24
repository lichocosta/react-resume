import { useState } from "react";
import { useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(100);

  useEffect(() => {
    setCount(count + 10);
    return () => {
      console.log("resetear todas las variables a 0 cuando se cierre la app");
    };
  }, []);

  return (
    <div>
      <h2>useEffect</h2>
      <h3>{count}</h3>
    </div>
  );
}

//funcion que toma otra funcion como parametro,
// dentro se puede hacer cualquier cosa que
// tenga que ver con el ciclo de vida de nuestra app
// por ejemplo cuando la app termina de correr o
// cuando cambie algun valor o cuando se desmonta

// sin el ,[] en la linea 9, el effect se hace loop
// dentro se puede agregar una variable que cuando cambie
// el effect se ejecute

// para hacer el willmount cuando el componente se desmonta
// hacer un return en el effect y poner lo que queramos
//que se ejecute cuando se cierra
