import  ApiEndPoint from '../../../api/api'
import * as httpService from '../../../config/httpService'

export async function HandleBreedGetAll () {
  const response = await httpService.EntityGetAll(new ApiEndPoint().apiGetBreedPath())
  return response.data
}

