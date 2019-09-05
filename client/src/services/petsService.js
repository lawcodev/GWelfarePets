export async function handleGetPet(){
  const response = await fetch('http://localhost:4000/api/pets')
  const responseJson = await response.json()
  return responseJson
}
export async function handleDeletedPet(id){
  const response = await fetch(`http://localhost:4000/api/pets/delete/${id}`)
  const responseJson = await response.json()
  return responseJson
}
export async function handleCountLostPet(){
  const response = await fetch(`http://localhost:4000/api/pets/count`)
  const responseJson = await response.json()
  return responseJson
}
export default { handleGetPet, handleDeletedPet, handleCountLostPet }
