import { apiHandleFetchPets, apiHandleDeletePets, apiHandleCountLostPets, apiHandleDetailPets } from '../api/Handler.api'

export async function handleGetPet(){
  const fetchPet = await fetch(apiHandleFetchPets)
  const responseFechPet = await fetchPet.json()
  return responseFechPet
}
export async function handleDeletedPet(id){
  const deletePet = await fetch(`${apiHandleDeletePets}+${id}`)
  const responseDeletPet = await deletePet.json()
  return responseDeletPet
}
export async function handleCountLostPet(){
  const countPet = await fetch(apiHandleCountLostPets)
  const responseCountPet = await countPet.json()
  return responseCountPet
}
export async function handleDetailPet(id){
  const detailPet = await fetch(`${apiHandleDetailPets}+${id}`)
  const responseDetailPet = await detailPet.json()
  return responseDetailPet
}
export default { handleGetPet, handleDeletedPet, handleCountLostPet, handleDetailPet }
