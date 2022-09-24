import { useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useLayoutEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>useLayoutEffect</h2>
        Crypto API
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} {item.high_24h}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

//Es parecido a useEffect solo con una diferencia esta funcion
//solo va a correr despues que el componente se renderice pero,
//antes de que aparezca en la pantalla.
//Significa que React va a esperar a que tu useLayoutEffect.
//Hay que tener precaución porque no se va a ver nada en la pantalla
//hasta que se termine de cargar lo que tenga la función...
