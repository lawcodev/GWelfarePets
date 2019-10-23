import { breedConstants } from '../../../constants/breed.constants'
import * as httpService from '../../../helper/httpService'
import  ApiEndPoint from '../api/api'

export const BreedsGetAll = () => async dispatch => {
  const response = await httpService.EntityGetAll(new ApiEndPoint().UrlGetBreedPath())
  return dispatch({
    type: breedConstants.GETALL_BREED_SUCCESS,
    payload: response.data
  })
}

