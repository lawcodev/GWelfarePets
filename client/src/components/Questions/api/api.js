import { BASE_URL_SERVER } from '../../../config/config'
const QUESTIONS_PATH = '/api/questions'

export default class ApiEndPoint {
  /* Authentication */
  getBasePath = () => {
    return `${BASE_URL_SERVER}`
  }
  /* Api del proceso de adopción */
  UrlGetQuestionsPath = () => {
    return `${BASE_URL_SERVER}${QUESTIONS_PATH}`
  }
}