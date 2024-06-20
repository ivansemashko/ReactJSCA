import { useState } from 'react'
const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        const newState = currentState + 1
        return newState
      })
    }, 3000)
  }

  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UseStateGotcha
