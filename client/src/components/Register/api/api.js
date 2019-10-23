import { BASE_URL_SERVER } from '../../../config/config'
const USER_PATH = '/api/user'

export default class ApiEndPoint {
  
  UrlAddNewUserPath = () => {
    return `${BASE_URL_SERVER}${USER_PATH}/add`
  }
}