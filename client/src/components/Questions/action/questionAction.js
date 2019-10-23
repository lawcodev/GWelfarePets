import { questionsConstants } from '../../../constants/question.constants'
import * as httpService from '../../../helper/httpService'
import  ApiEndPoint from '../api/api'

export const QuestionsGetAll = () => async dispatch => {
  const response = await httpService.EntityGetAll(new ApiEndPoint().UrlGetQuestionsPath())
  return dispatch({
    type: questionsConstants.GETALL_QUESTIONS_SUCCESS,
    payload: response.data
  })
}

