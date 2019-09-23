import { BASE_URL_SERVER } from '../../../config/config'
const BREED_PATH = '/api/breeds'

export default class ApiEndPoint {
  getBasePath = () => {
    return `${BASE_URL_SERVER}`
  }
  apiGetBreedPath = () => {
    return `${BASE_URL_SERVER}${BREED_PATH}`
  }
  apiDeleteBreedPath = (id) => {
    return `${BASE_URL_SERVER}${BREED_PATH}/delete/${id}`
  }
  apiDetailBreedPath = (id) => {
    return `${BASE_URL_SERVER}${BREED_PATH}/detail/${id}`
  }
  apiCountBreedPath = () => {
    return `${BASE_URL_SERVER}${BREED_PATH}/count`
  }
  apiAddNewBreedPath = () => {
    return `${BASE_URL_SERVER}${BREED_PATH}/add`
  }
}