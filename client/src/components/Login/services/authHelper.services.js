import  ApiEndPoint from '../api/api'
import * as httpService from '../../../helper/httpService'
import AuthService from '../../../config/token'

export async function HandleAuthentication (entity) {
  const success = await AuthService.AUTHENTICATION_USER(new ApiEndPoint().UrlAuthenticationPath(), entity)
  return success
}
export async function HandleAuthenticationById(id) {
  const detailAuthentication = await httpService.EntityGetAll(new ApiEndPoint().UrlDetailAuthenticationPath(id))
  return detailAuthentication.data
}
