import axios from 'axios'
const baseUrl = 'http://localhost:3001/games'

const getAll = () => {
  return axios.get(baseUrl)
}

const getOne = (id) => {
  return axios.get(`${baseUrl}/${id}`)
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