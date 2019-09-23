import  ApiEndPoint from '../api/api'
import * as httpService from '../../../config/httpService'

export const HandleAuthentication = entity => {
  return httpService.AUTHENTICATION_USER(new ApiEndPoint().apiAuthenticationPath(), entity)
}
