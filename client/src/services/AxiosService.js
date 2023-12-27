import Axios from 'axios'
import { baseURL } from '../env'
import { logger } from '../utils/Logger.js'

export const api = Axios.create({
  baseURL,
  timeout: 8000
})

const weatherAPIkey = process.env.OPENWEATHERAPI_KEY;

export const weatherAPI = Axios.create({ // returns 5 day forecast results per 3 hrs
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  timeout: 8000,
  params: {
    appid: weatherAPIkey
  }
})
export const bcwSandbox = Axios.create({
  baseURL: 'https://sandbox.codeworksacademy.com/',
  timeout: 6000,
  params: {
    clientId: 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml',
    domain: 'codeworksclassroom.auth0.com',
    audience: 'https://codeworksclassroom.com'
  }
})

api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
  }
  return Promise.reject(error)
}
