import { useState } from 'react'

const ToggleChallenge = () => {
  const [stateValue, setStateValue] = useState(false)

  const changeButton = () => {
    if (stateValue) setStateValue(false)
    else setStateValue(true)
  }

  return (
    <div>
      <button className="btn" onClick={() => changeButton()}>
        Click
      </button>
      {stateValue ? (
        <div className="alert alert-danger">
          <h3>True ?</h3>
        </div>
      ) : null}
      {stateValue && (
        <div>
          <h3>True &&</h3>
        </div>
      )}
    </div>
  )
}

export default ToggleChallenge
