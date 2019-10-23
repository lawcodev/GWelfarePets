import { BASE_URL_SERVER } from '../../../config/config'

const PETS_PATH = '/api/pets'

export default class ApiEndPoint {
  UrlGetPetPath = () => {
    return `${BASE_URL_SERVER}${PETS_PATH}`
  }
  UrlGetPetDeletePath = (id) => {
    return `${BASE_URL_SERVER}${PETS_PATH}/delete/${id}`
  }
  UrlGetBydIdPath = (id) => {
    return `${BASE_URL_SERVER}${PETS_PATH}/detail/${id}`
  }
  UrlAddNewPetPath = () => {
    return `${BASE_URL_SERVER}${PETS_PATH}/add`
  }
}