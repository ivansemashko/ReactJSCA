import { useState } from 'react'

const windowOuterWidth = window.outerWidth
const windowOuterHeight = window.outerHeight

const bubbleButton = () => {
  const [buttonWidth, setButtonWidth] = useState('50%')
  const [buttonHeight, setButtonHeight] = useState('50%')
  const [count, setCount] = useState(0)
  const [buttonSizeWidth, setButtonSizeWidth] = useState('3%')
  const [buttonSizeHeight, setButtonSizeHeight] = useState('3%')

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

  const clickCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <h2 style={{ pointerEvents: 'none' }}>{count}</h2>
        <button
          onMouseEnter={() => randomCord(windowOuterHeight, windowOuterWidth)}
          onMouseLeave={() => randomButSize()}
          onClick={() => clickCount()}
          className="btn"
          style={{
            position: 'absolute',
            left: buttonWidth,
            top: buttonHeight,
            width: buttonSizeWidth,
            fontSize: '100%',
            height: buttonSizeHeight,
          }}
          type="button"
        >
          Click
        </button>
      </div>
    </>
  )
}

export default bubbleButton
