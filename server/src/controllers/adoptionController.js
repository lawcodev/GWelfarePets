import connection from '../data/connection'

export async function addNewAdoption(req, res) {
  try {
    const storeProcedure = `call spAddNewAdoption(?,?,?)`
    const { iduser, idpet, contributionAdoption } = req.body
    const newAdoption = { iduser, idpet, contributionAdoption }
    console.log(newAdoption)    
    await connection.query(storeProcedure, [newAdoption.iduser, newAdoption.idpet, 
      newAdoption.contributionAdoption], (error) => {
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
export async function getAllPetsAdoption(req, res) {
  try {
    const storeProcedure = `call spGetAllPetAdoption()`
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
export async function GetAllUnApprovedTakenPet(req, res) {
  try {
    const storeProcedure = `call spGetAllUnApprovedTakenPet()`
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
export async function ApproveAdoption(req, res) {
  try {
    const storeProcedure = `call spApproveAdoption(?)`
    const idadoption = req.params.id 
    await connection.query(storeProcedure, [idadoption], (error) => {
      if (error)
        return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: 'Aprobado correctamente'
      });
    })
  } catch (e) {
    console.log(e)    
  }
}
