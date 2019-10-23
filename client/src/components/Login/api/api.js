import { BASE_URL_SERVER } from '../../../config/config'
const AUTHENTICATION_PATH = '/api/authentication'

export default class ApiEndPoint {
  
  UrlAuthenticationPath = () => {
    return `${BASE_URL_SERVER}${AUTHENTICATION_PATH}`
  }
  UrlDetailAuthenticationPath = (id) => {
    return `${BASE_URL_SERVER}${AUTHENTICATION_PATH}/detail/${id}`
  }
  
}