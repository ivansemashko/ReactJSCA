import { useEffect } from 'react'
import { useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    console.log('Int')
  }, [])
  return <h1>Hello there</h1>
}

export default CleanupFunction
