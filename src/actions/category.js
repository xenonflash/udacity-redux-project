import { api_fetchCategories } from '../apis/index'

export const SET_CATEGORIES = 'set categories'

export function fetchCategories() {
  return dispatch => (
    api_fetchCategories().then(categories => {
      dispatch({ type: SET_CATEGORIES, categories })
    })
  )
}