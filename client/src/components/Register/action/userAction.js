import { userConstants } from '../../../constants/user.constants'
import * as httpService from '../../../helper/httpService'
import ApiEndPoint from '../api/api'

export const AddNewUser = (user) => async dispatch => {
  const response = await httpService.EntityCreate(new ApiEndPoint().UrlAddNewUserPath(), user)
  return dispatch({
    type: userConstants.ADD_USER_SUCCESS,
    payload: response
  })
}

