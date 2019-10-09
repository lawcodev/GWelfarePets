import  ApiEndPoint from '../../../api/api'
import * as httpService from '../../../config/httpService'

export async function HandleUserCreate (entity) {
  const response = await httpService.EntityCreate(new ApiEndPoint().apiAddNewUserPath(), entity)
  return response
}
