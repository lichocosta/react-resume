import { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef();

  const handleClick = () => {
    alert(inputRef.current.value);
  };

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  }

  return (
    <div style={divStyle}>
      <h2>useRef</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>useRef</button>
    </div>
  );
}
