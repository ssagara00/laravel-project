import axios from 'axios'

// axiosのインスタンスを作成
const client = axios.create({
  baseURL: 'http://localhost:81/api/',
  withCredentials: true,
})

export default client
