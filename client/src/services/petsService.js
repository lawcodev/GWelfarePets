export async function handleGetPet(){
  const response = await fetch('http://localhost:4000/api/pets')
  const responseJson = await response.json()
  return responseJson
}
export default handleGetPet
