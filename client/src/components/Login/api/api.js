import { BASE_URL_SERVER } from '../../../config/config'
const AUTHENTICATION_PATH = '/api/authentication'

export default class ApiEndPoint {
  getBasePath = () => {
    return `${BASE_URL_SERVER}`
  }
  apiAuthenticationPath = () => {
    return `${BASE_URL_SERVER}${AUTHENTICATION_PATH}`
  }
}