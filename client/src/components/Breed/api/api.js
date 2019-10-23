import { BASE_URL_SERVER } from '../../../config/config'
const BREED_PATH = '/api/breeds'

export default class ApiEndPoint {
 
  /* Api de razas */
  UrlGetBreedPath = () => {
    return `${BASE_URL_SERVER}${BREED_PATH}`
  }
}