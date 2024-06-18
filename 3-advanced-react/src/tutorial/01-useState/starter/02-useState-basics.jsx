import { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState('bob'))
  // const value = useState('hello')[0]
  // const func = useState('hello')[1]
  // console.log(value)
  // console.log(func)
  const colors = ['red', 'green', 'blue']
  const [count, setCount] = useState(0)
  const [name, setName] = useState(1)
  return (
    <div>
      <h4 style={{ color: setColor }}>You Clicked {count}</h4>
      <button
        className="btn"
        type="button"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click For +1
      </button>
      <button
        className="btn"
        type="button"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click For Change Color Text
      </button>
    </div>
  )
}

export default UseStateBasics
