import axios from 'axios'
import { getToken } from '@/services/auth-token.service'

export const publicInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const privateInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

privateInstance.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
