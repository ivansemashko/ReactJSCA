import React from 'react'
import ReactDOM from 'react-dom'

// Better
function Greeting() {
  return <h2>My First Component</h2>
}

// Bad
function LongGreeting() {
  return React.createElement('h2', {}, 'hello world')
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
