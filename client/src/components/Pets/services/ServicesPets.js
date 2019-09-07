import { apiHandleFetchPets, apiHandleDeletePets, apiHandleCountLostPets } from '../api/UrlApi'

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
export default { handleGetPet, handleDeletedPet, handleCountLostPet }
