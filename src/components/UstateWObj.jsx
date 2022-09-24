const DisplayTitle = () => {
  const [person, setPerson] = useState({name: 'Mike', age: 29})
  const handleClick = () => setPerson({...person, age: 35})
  return <>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>
      Change Age
    </button>
  </>
};

export default DisplayTitle