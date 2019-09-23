import { BASE_URL_SERVER } from '../../../config/config'
const PETS_PATH = '/api/pets'

export default class ApiEndPoint {
  getBasePath = () => {
    return `${BASE_URL_SERVER}`
  }
  apiGetPetsPath = () => {
    return `${BASE_URL_SERVER}${PETS_PATH}`
  }
  apiDeletePetPath = (id) => {
    return `${BASE_URL_SERVER}${PETS_PATH}/delete/${id}`
  }
  apiDetailPetPath = (id) => {
    return `${BASE_URL_SERVER}${PETS_PATH}/detail/${id}`
  }
  apiCountPetPath = () => {
    return `${BASE_URL_SERVER}${PETS_PATH}/count`
  }
  apiAddNewPetPath = () => {
    return `${BASE_URL_SERVER}${PETS_PATH}/add`
  }
}