import  ApiEndPoint from '../api/api'
import * as httpService from '../../../helper/httpService'

export async function HandleAccidentCreate (entity) {
  const response = await httpService.EntityCreate(new ApiEndPoint().UrlAddNewAccidentPath(), entity)
  return response
}
