import  ApiEndPoint from '../../../api/api'
import * as httpService from '../../../config/httpService'

export async function HandlePetGetAll () {
  const response = await httpService.EntityGetAll(new ApiEndPoint().apiGetPetsPath())
  return response
}
export async function HandlePetDelete(idpet) {
  const response = await httpService.EntityDelete(new ApiEndPoint().apiDeletePetPath(idpet))
  return response
}
export async function handleCountLostPet() {
  const countPet = await fetch(new ApiEndPoint().apiCountPetPath())
  const responseCountPet = countPet.json()
  return responseCountPet
}
export async function HandlePetGetById(idpet) {
  const response = await httpService.EntityGetById(new ApiEndPoint().apiDetailPetPath(idpet))
  return response
}
export async function HandlePetCreate (entity) {
  const response = await httpService.EntityCreate(new ApiEndPoint().apiAddNewPetPath(), entity)
  return response
}
