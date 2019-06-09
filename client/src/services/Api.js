import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
