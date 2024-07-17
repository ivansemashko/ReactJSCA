import React, { useReducer } from 'react'
import { data, people } from '../../../data'

const defaultState = {
  people: data,
  isLoading: false,
}

const CLEAR_LIST = 'CLEAR_LIST'
const RESET_LIST = 'RESET_LIST'
const REMOVE_ITEM = 'REMOVE_ITEM'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] }
    case RESET_LIST:
      return { ...state, people: data }
    // ! Invalid case (!!!)
    case REMOVE_ITEM:
      const np = state.people.filter((a) => a.id !== action.id.id)
      return { ...state, people: newPeople }
    default:
      console.log('Undefined type')
      break
  }
  throw new Error('No match')
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  // const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, id: { id } })
  }

  const resetItems = () => {
    dispatch({ type: RESET_LIST })
  }

  const clearList = () => {
    dispatch({ type: 'CLEAR_LIST' })
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
