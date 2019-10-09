import  ApiEndPoint from '../../../api/api'
import * as httpService from '../../../config/httpService'

export async function HandleAccidentCreate (entity) {
  const response = await httpService.EntityCreate(new ApiEndPoint().apiAddNewAccidentPath(), entity)
  return response
}
