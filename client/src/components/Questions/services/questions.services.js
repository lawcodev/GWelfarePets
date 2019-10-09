import  ApiEndPoint from '../../../api/api'
import * as httpService from '../../../config/httpService'

export async function HandleQuestionGetAll () {
  const response = await httpService.EntityGetAll(new ApiEndPoint().apiGetQuestionsPath())
  return response.data
}