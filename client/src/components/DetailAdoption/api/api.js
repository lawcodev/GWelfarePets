import { BASE_URL_SERVER } from '../../../config/config'
const ADOPTION_PATH = '/api/adoption'

export default class ApiEndPoint {
 
  UrlAddAdoptionPath = () => {
    return `${BASE_URL_SERVER}${ADOPTION_PATH}/add`
  }
  UrlGetllPetsTakenPath = () => {
    return `${BASE_URL_SERVER}${ADOPTION_PATH}`
  }
  UrlGetAllUnApprovedTakenPath = () => {
    return `${BASE_URL_SERVER}${ADOPTION_PATH}/unapproved/taken`
  }
}