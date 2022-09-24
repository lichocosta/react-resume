import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(10);

  useEffect(() => {
    document.title = `New value: ${value}`;
  });

  return (
    <>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </>
  );
}

export default App;
