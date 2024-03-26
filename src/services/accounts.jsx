// cala baza danych
import axios from 'axios'
const baseUrl = 'http://localhost:3001/users'

const getAll = () => {
  return axios.get(baseUrl)
}

const getOne = (id) => {
  return axios.get(`'http://localhost:3001/users'/${id}`)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { 
  getAll: getAll,
  getOne: getOne,
  create: create,
  update: update
}