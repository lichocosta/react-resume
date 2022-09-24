import { useReducer } from "react";

const initialState = { count: 10 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>useReducer</h2>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

//Es parecido al useState pero en lugar de actualizar
//la variable o del valor guardado en el componente.
//Cuando quieras actualizar el estado del componente
//vas a tener que llamar a una Accion, esta a un Reducer
//y el reducer va a actualizar el estado en el Store
//definido previamente en la app

//Permite tener una base de  código más facil de entender
//escalable y mantenible a diferencia de useState
