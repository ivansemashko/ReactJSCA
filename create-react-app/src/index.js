import React from 'react'
import ReactDOM from 'react-dom'

// Better
function Greeting() {
  return (
    <React.Fragment>
      <div className="someValue">
        <h3>Hello people</h3>
        <ul>
          <li>
            <a href="#">Hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input type="text" />
    </React.Fragment>
  )
}

// Bad
function LongGreeting() {
  return React.createElement('h2', {}, 'hello world')
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
