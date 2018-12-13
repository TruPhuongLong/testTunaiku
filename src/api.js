import axios from 'axios'
const url = "https://swapi.co/api/films"

export const gets = () => {
   return axios.get(url)
}

export const get = (id) => {
    return axios.get(url + id || `/${id}`)
 }
