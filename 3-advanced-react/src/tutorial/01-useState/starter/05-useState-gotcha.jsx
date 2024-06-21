import { useState } from 'react'
const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const [color, setColor] = useState('Empty')
  const randomColor = () => {
    const colorList = ['blue', 'green', 'red']
    let random = Math.floor(Math.random() * 3)
    setColor(colorList[random])
  }

  const handleClick = () => {
    setValue((currentState) => {
      const newState = currentState + 1
      return newState
    })
  }

  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        Click me
      </button>
      <h3 style={{ color: color }}>{color}</h3>
      <button className="btn" onClick={randomColor}>
        Random
      </button>
    </div>
  )
}

export default UseStateGotcha
