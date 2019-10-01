import  ApiEndPoint from '../../../api/api'
import * as httpService from '../../../config/httpService'

export async function HandleAuthentication (entity) {
  const success = await httpService.AUTHENTICATION_USER(new ApiEndPoint().apiAuthenticationPath(), entity)
  return success
}
export async function HandleAuthenticationById(id) {
  const detailAuthentication = await httpService.EntityGetById(new ApiEndPoint().apiDetailAuthenticationPath(id))
  return detailAuthentication.data[0]
}