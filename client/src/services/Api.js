import axios from 'axios'

export default() => {
    return axios.get({
        baseURL: `http://localhost:8081/`
    })
}