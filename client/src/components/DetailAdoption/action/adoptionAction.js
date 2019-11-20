import { adoptionConstants } from '../../../constants/adoption.constants'
import * as httpService from '../../../helper/httpService'
import  ApiEndPoint from '../api/api'

export const AddNewAdoption = adoption => async dispatch => {
  const response = await httpService.EntityCreate(new ApiEndPoint().UrlAddAdoptionPath(), adoption)
  return dispatch({
    type: adoptionConstants.ADDALL_ADOPTION_SUCCESS,
    payload: response
  })
}
export const GetAllPetsTaken = () => async dispatch => {
  const response = await httpService.EntityGetAll(new ApiEndPoint().UrlGetllPetsTakenPath())
  return dispatch({
    type: adoptionConstants.GETALL_ADOPTIONS_SUCCESS,
    payload: response.data
  })
}
export const GetAllPetsUnApprovedTaken = () => async dispatch => {
  const response = await httpService.EntityGetAll(new ApiEndPoint().UrlGetAllUnApprovedTakenPath())
  return dispatch({
    type: adoptionConstants.GETALL_ADOPTIONS_PETS_UNAPPROVED_TAKEN_SUCCESS,
    payload: response.data
  })
}