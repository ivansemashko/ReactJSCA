import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions'
import { data, people } from '../../../data'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] }
    case RESET_LIST:
      return { ...state, people: data }
    case REMOVE_ITEM:
      let np = state.people.filter((person) => person.id !== action.id.id)
      return { ...state, people: np }
    default:
      console.log('Undefined type')
      break
  }
  throw new Error('No match')
}

export default reducer
