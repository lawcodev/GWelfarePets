import { petConstants } from '../../../constants/pet.constants'
import * as httpService from '../../../helper/httpService'
import  ApiEndPoint from '../api/api'

export const PetsGetAll = () => async dispatch => {
  const response = await httpService.EntityGetAll(new ApiEndPoint().UrlGetPetPath())
  return dispatch({
    type: petConstants.GETALL_PETS_SUCCESS,
    payload: response.data
  })
}
export const PetDeleteAll = (id) => async dispatch => {
  await httpService.EntityDelete(new ApiEndPoint().UrlGetPetDeletePath(id))
  return dispatch({
    type: petConstants.DELETE_PET_SUCCESS,
    payload: id
  })
}
export const PetGetById = (id) => async dispatch => {
  const response = await httpService.EntityGetById(new ApiEndPoint().UrlGetBydIdPath(id))
  return dispatch({
    type: petConstants.GETBYID_PET_SUCCESS,
    payload: response.data[0]
  })
}
export const PetAdd = pet => async dispatch => {
  const response = await httpService.EntityCreate(new ApiEndPoint().UrlAddNewPetPath(), pet)
  return dispatch({
    type: petConstants.ADD_PET_SUCCESS,
    payload: response
  })
}

