import React, { useReducer } from 'react'
import { data } from '../../../data'

const defaultState = {
  people: data,
}

const reducer = () => {}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  // const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
  }

  const resetItems = () => {
    // setPeople(data)
  }

  const clearList = () => {
    // setPeople([])
  }
  console.log(state)

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}

      {state.people.length === 0 ? (
        <button className="btn" onClick={() => resetItems()}>
          Reset Items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={() => clearList()}
        >
          Clear items
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
