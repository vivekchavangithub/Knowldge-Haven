import axios from 'axios'

const apiUrl = "http://localhost:5000"
const token = ''
export const axioInstance = axios.create({
    baseURL:apiUrl,
    headers:{
        // 'Authorization':`Bearer ${token}`
    }
}); 