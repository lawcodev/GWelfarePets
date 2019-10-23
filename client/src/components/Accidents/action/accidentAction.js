import { accidentConstants } from '../../../constants/accident.constants'
import * as httpService from '../../../helper/httpService'
import  ApiEndPoint from '../api/api'

export const AccidentGetAllUnApproved = () => async dispatch => {
  const response = await httpService.EntityGetAll(new ApiEndPoint().UrlGetAllAccidentUnApprovedPath())
  return dispatch({
    type: accidentConstants.GETALL_ACCIDENTS_UNAPPROVED_SUCCESS,
    payload: response.data
  })
}
export const AccidentGetAllApproved = () => async dispatch => {
  const response = await httpService.EntityGetAll(new ApiEndPoint().UrlGetAllAccidentApprovedPath())
  return dispatch({
    type: accidentConstants.GETALL_ACCIDENTS_APPROVED_SUCCESS,
    payload: response.data
  })
}
export const ApprovedAccident = (id) => async dispatch => {
  const response = await httpService.EntityApproved(new ApiEndPoint().UrlApprovedAccidentPath(id))
  return dispatch({
    type: accidentConstants.APPROVED_ACCIDENT_SUCCESS,
    payload: response.data
  })
}
export const RechazeAccident = (id) => async dispatch => {
  const response = await httpService.EntityDelete(new ApiEndPoint().UrlRechazeAccidentPath(id))
  return dispatch({
    type: accidentConstants.RECHAZE_ACCIDENT_SUCCESS,
    payload: response.data
  })
}
export const AccidentAdd = accident => async dispatch => {
  const response = await httpService.EntityCreate(new ApiEndPoint().UrlAddAccidentPath(), accident)
  return dispatch({
    type: accidentConstants.ADD_ACCIDENT_SUCCESS,
    payload: response
  })
}

