import axios from 'axios'
export function api_fetchCategories() {
  return axios.get('/categories').then(res => res.data.categories)
}