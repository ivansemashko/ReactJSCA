import { useState } from 'react'

const windowOuterWidth = window.outerWidth
const windowOuterHeight = window.outerHeight

const bubbleButton = () => {
  const [buttonWidth, setButtonWidth] = useState(windowOuterWidth / 2)
  const [buttonHeight, setButtonHeight] = useState(windowOuterHeight / 2)

  const randomCord = (maxCordHeight, maxCordWidth) => {
    let randomWidth = Math.floor(Math.random() * maxCordWidth)
    let randomHeight = Math.floor(Math.random() * maxCordHeight)
    setButtonHeight(randomHeight)
    setButtonWidth(randomWidth)
  }

  return (
    <div>
      <button
        onMouseEnter={() => randomCord(windowOuterHeight, windowOuterWidth)}
        onClick={() => alert('So nice!!')}
        className="btn"
        style={{
          position: 'absolute',
          left: buttonWidth,
          top: buttonHeight,
          width: '3%',
          fontSize: '100%',
          height: '3%',
        }}
        type="button"
      >
        Click
      </button>
    </div>
  )
}

export default bubbleButton
