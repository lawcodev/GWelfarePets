import { BASE_URL_SERVER } from '../config/config'
const AUTHENTICATION_PATH = '/api/authentication'
const PETS_PATH = '/api/pets'
const BREED_PATH = '/api/breeds'
const QUESTIONS_PATH = '/api/questions'
const USER_PATH = '/api/user'
const ACCIDENT_PATH = '/api/accident'

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
  /* Api del proceso de adopción */
  apiGetQuestionsPath = () => {
    return `${BASE_URL_SERVER}${QUESTIONS_PATH}`
  }
  /* Api de authenticación */ 
  apiProfileDetailAuthenticationPath = (id) => {
    return `${BASE_URL_SERVER}${AUTHENTICATION_PATH}/detail/${id}`
  }
  /* Api de usuarios */
  apiAddNewUserPath = () => {
    return `${BASE_URL_SERVER}${USER_PATH}/add`
  }
  apiDisabledPath = (id) => {
    return `${BASE_URL_SERVER}${AUTHENTICATION_PATH}/disabled/${id}`
  }
  /* Api de accidentes, nuevo, editar, etc */
  apiAddNewAccidentPath = () => {
    return `${BASE_URL_SERVER}${ACCIDENT_PATH}/add`
  }
}