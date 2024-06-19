import { data } from '../../../data'
import React from 'react'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const deleteHuman = (id) => {
    setPeople(people.filter((u) => u.id !== id))
  }
  const clearAll = () => {}

  return (
    <div>
      {people.map((human) => {
        const { id, name } = human
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() => deleteHuman(id)}
              className="btn"
            >
              Delete
            </button>
          </div>
        )
      })}
      <button type="button" onClick={() => setPeople([])} className="btn">
        DeleteAll
      </button>
    </div>
  )
}

export default UseStateArray
