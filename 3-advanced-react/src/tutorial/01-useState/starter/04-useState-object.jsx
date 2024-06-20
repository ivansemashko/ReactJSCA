import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'No Ivan Semashko',
    age: -21,
    hobby: 'read books',
  })

  const displayPerson = () => {
    setPerson({ name: 'Ivan Semashko', age: 21, hobby: 'Drive BMW cars' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  )
}

export default UseStateObject
