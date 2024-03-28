
import axios from 'axios'
import { getUserFromLocalStorage } from './localStorage'

const customFetch = axios.create({
    baseURL: 'https://dev-api.giddaa.com'
})

// customFetch.interceptors.request.use((config) => {
//     const user = getUserFromLocalStorage()
//     console.log(user);
//     if(user) {
//         config.headers['Authorization'] = `Bearer ${user}`
//     }
// })

export default customFetch

