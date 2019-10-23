import { BASE_URL_SERVER } from '../../../config/config'
const ACCIDENT_PATH = '/api/accident'

export default class ApiEndPoint {
 
  UrlAddAccidentPath = () => {
    return `${BASE_URL_SERVER}${ACCIDENT_PATH}/add`
  }
  UrlGetAllAccidentUnApprovedPath = () => {
    return `${BASE_URL_SERVER}${ACCIDENT_PATH}/unApproved`
  }
  UrlApprovedAccidentPath = (id) => {
    return `${BASE_URL_SERVER}${ACCIDENT_PATH}/approved/${id}`
  }
  UrlRechazeAccidentPath = (id) => {
    return `${BASE_URL_SERVER}${ACCIDENT_PATH}/delete/${id}`
  }
  UrlGetAllAccidentApprovedPath = () => {
    return `${BASE_URL_SERVER}${ACCIDENT_PATH}/approved`
  }
}