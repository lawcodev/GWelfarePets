import connection from '../data/connection'

export async function getAllPets(req, res) {
  try {
    const storeProcedure = `call spGetAllPets()`
    connection.query(storeProcedure, (error, results) => {
      if (error)
        return console.error(error.message);
      res.send({
        status: res.statusCode,
        data: results[0]
      });
    });
  } catch (e) {
    console.log(e)    
  }
}
export async function countAllPetActive(req, res) {
  try {
    const storeProcedure = `select count(*) as count from pet where state = 1`
    await connection.query(storeProcedure, (error, results) => {
      if (error)
        return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: results[0]
      });
    });
  } catch (e) {
    console.log(e)    
  }
}
export async function addNewPet(req, res) {
  try {
    const storeProcedure = `call spAddNewPet(?,?,?,?)`
    const { name, description, years, genre } = req.body
    const newPet = { name, description, years, genre }
    await connection.query(storeProcedure, [newPet.name, newPet.description, newPet.years, newPet.genre], (error) => {
      if (error)
        return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: 'Creado correctamente'
      });
    })  
  } catch (e) {
    console.log(e)
  }
}
export async function deletePet(req, res) {
  try {
    const storeProcedure = `call spPetDelete(?)`
    const idpet = req.params.id // se captura el id de la mascota
    await connection.query(storeProcedure, [idpet], (error) => {
      if (error)
        return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: 'Eliminado correctamente'
      });
    })
  } catch (e) {
    console.log(e)    
  }
}
export async function detailPet(req, res) {
  try {
    const storeProcedure = `call spPetDetail(?)`
    const idpet = req.params.id
    await connection.query(storeProcedure, [idpet], (error, results) => {
      if (error)
        return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: results[0]
      });
    })
  } catch (e) {
    console.error(e)    
  }
}