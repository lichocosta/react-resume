import people from "./People"

export default function List() {
  return (
    people.map(person => {
      return <Person key={person.id} name={person.name} age={person.age}/>
    })
  )
}

const Person = (props) => {
  return (
    <h6>Name: {props.name}, Age: {props.age}</h6>
  )
}