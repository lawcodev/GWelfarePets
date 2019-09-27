import { BASE_URL_SERVER } from '../config/config'
const AUTHENTICATION_PATH = '/api/authentication'
const PETS_PATH = '/api/pets'
const BREED_PATH = '/api/breeds'

export default class ApiEndPoint {
  /* Authentication */
  getBasePath = () => {
    return `${BASE_URL_SERVER}`
  }
  apiAuthenticationPath = () => {
    return `${BASE_URL_SERVER}${AUTHENTICATION_PATH}`
  }
  /* Api de mascotas */
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
  /* Api de razas */
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