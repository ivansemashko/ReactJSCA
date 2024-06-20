import { useState } from 'react'
const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <h1>{value}</h1>
      <button
        className="btn"
        type="button"
        onClick={() => {
          setValue((currentState) => {
            const newState = currentState + 1
            return newState
          })
        }}
      >
        Click me
      </button>
    </div>
  )
}

export default UseStateGotcha
