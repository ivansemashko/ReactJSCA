import { useState } from 'react'

// const windowOuterWidth = window.outerWidth
// const windowOuterHeight = window.outerHeight

// const [buttonWidth, setButtonWidth] = useState(0)
// const [buttonHeight, setButtonHeight] = useState(1)

const bubbleButton = () => {
  //   const randomWidthAndHeight = () => {
  //     let wightButton = Math.floor(Math.random() * windowOuterWidth)
  //     let heightButton = Math.floor(Math.random() * windowOuterHeight)

  //     setButtonHeight(heightButton)
  //     setButtonWidth(wightButton)
  //   }

  return (
    <div>
      <h2>Window Width: {windowOuterWidth}</h2>
      <h2>Window Height: {windowOuterHeight}</h2>
    </div>
  )
}

export default bubbleButton
