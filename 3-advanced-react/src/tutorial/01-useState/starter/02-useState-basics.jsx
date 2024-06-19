import { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState('bob'))
  // const value = useState('hello')[0]
  // const func = useState('hello')[1]
  // console.log(value)
  // console.log(func)
  const [count, setCount] = useState(0)
  return (
    <div>
      <h4>You Clicked {count}</h4>
      <button
        className="btn"
        type="button"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click For +1
      </button>
    </div>
  )
}

export default UseStateBasics
