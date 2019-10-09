import  ApiEndPoint from '../../../api/api'
import * as httpService from '../../../config/httpService'
import AuthService from '../../../config/token'

export async function HandleAuthentication (entity, token) {
  const success = await AuthService.AUTHENTICATION_USER(new ApiEndPoint().apiAuthenticationPath(), entity)
  return success
}
export async function HandleAuthenticationById(id) {
  const detailAuthentication = await httpService.EntityGetAll(new ApiEndPoint().apiProfileDetailAuthenticationPath(id))
  return detailAuthentication.data
}
export async function HandleDisabledUser(id) {
  const response = await httpService.EntityDelete(new ApiEndPoint().apiDisabledPath(id))
  return response
}