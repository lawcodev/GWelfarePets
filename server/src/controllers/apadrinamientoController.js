import connection from '../data/connection'

export async function AddNewSponsorShip(req, res) {
  try {
    const storeProcedure = `call spAddNewSponsorShip(?,?,?)`
    const { iduser, idpet, contribution, dateInitial, dateFinish, typeService, total,
      contributionFrequency } = req.body
    const newSponsorShip= { iduser, idpet, contribution, dateInitial, dateFinish, typeService, total,
      contributionFrequency }
    await connection.query(storeProcedure, [newSponsorShip.iduser, newSponsorShip.idpet, newSponsorShip.contribution,
      newSponsorShip.dateInitial, newSponsorShip.dateFinish, newSponsorShip.typeService, newSponsorShip.total, 
      newSponsorShip.contributionFrequency], (error) => {
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
export async function GetAllUnApprovedSponsorShip(req, res) {
  try {
    const storeProcedure = `call spGetAllUnApprovedSponsorShip()`
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
export async function ApproveSponsorShip(req, res) {
  try {
    const storeProcedure = `call spApproveSponsorShip(?)`
    const idSponsorShip = req.params.id 
    await connection.query(storeProcedure, [idSponsorShip], (error) => {
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
