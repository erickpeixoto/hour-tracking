import axios from 'axios'

const API = api => axios.create({
    baseURL: api.host,
    timeout: 5000,
})

export default API