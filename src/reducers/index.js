import { SET_CATEGORIES } from '../actions/category'
import { combineReducers } from 'redux'

const category = (state = [], { type, categories }) => {
  switch(type) {
    case SET_CATEGORIES:
      return categories
    default:
      return state
  }
}


export default combineReducers({
  category,
})
