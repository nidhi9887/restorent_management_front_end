import axios from "axios"

export const baseURL= 'http://localhost:8080/api'

export default (headers = {}) => {
    const service = axios.create({
        baseURL:baseURL,
        headers:
        {
            ...headers
        },
    });
  return service

}