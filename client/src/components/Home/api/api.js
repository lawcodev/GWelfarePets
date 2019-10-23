import { BASE_URL_SERVER } from '../../../config/config'

const ACCIDENT_PATH = '/api/accident'

export default class ApiEndPoint {

  UrlAddNewAccidentPath = () => {
    return `${BASE_URL_SERVER}${ACCIDENT_PATH}/add`
  }
}