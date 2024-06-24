import { useState } from 'react'

const windowOuterWidth = window.outerWidth
const windowOuterHeight = window.outerHeight

const bubbleButton = () => {
  const [buttonWidth, setButtonWidth] = useState('50%')
  const [buttonHeight, setButtonHeight] = useState('50%')
  const [buttonSizeWidth, setButtonSizeWidth] = useState('3%')
  const [buttonSizeHeight, setButtonSizeHeight] = useState('3%')
  const [color, setColor] = useState('purple')
  const [count, setCount] = useState(0)

  const randomCord = (maxCordHeight, maxCordWidth) => {
    let randomWidth = Math.floor(Math.random() * maxCordWidth)
    let randomHeight = Math.floor(Math.random() * maxCordHeight)
    setButtonHeight(randomHeight)
    setButtonWidth(randomWidth)
  }
  const randomButSize = () => {
    let randomButWidth = Math.floor(Math.random() * 15)
    let randomButHeight = Math.floor(Math.random() * 5)

    setButtonSizeHeight(`${randomButHeight}%`)
    setButtonSizeWidth(`${randomButWidth}%`)
  }

  const randomColor = () => {
    const colorArr = ['red', 'blue']
    setColor(colorArr[Math.floor(Math.random() * colorArr.length)])
  }

  setInterval(randomColor, 500)
  // setInterval(() => randomCord(windowOuterHeight, windowOuterWidth), 1000)

  return (
    <>
      <div>
        <h2 style={{ pointerEvents: 'none' }}>{count}</h2>
        <button
          onMouseEnter={() => randomCord(windowOuterHeight, windowOuterWidth)}
          onMouseLeave={() => randomButSize()}
          onClick={() => setCount(count + 1)}
          className="btn"
          style={{
            position: 'absolute',
            left: buttonWidth,
            top: buttonHeight,
            width: buttonSizeWidth,
            fontSize: `${buttonSizeWidth * 0.3}%`,
            height: buttonSizeHeight,
            backgroundColor: color,
          }}
          type="button"
        ></button>
      </div>
    </>
  )
}

export default bubbleButton
