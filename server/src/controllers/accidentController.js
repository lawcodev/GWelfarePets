import connection from '../data/connection'

export async function getAllAccidentApproved(req, res) {
  try {
    const storeProcedure = `call spGetAllAccidentsApproved()`
    await connection.query(storeProcedure, (error, results) => {
      if (error) return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: results[0],
      });
    });
  } catch(e) {
    console.error(e);    
  }
}
export async function getAllAccidentUnApproved(req, res) {
  try {
    const storeProcedure = `call spGetAllAccidentsUnApproved()`
    await connection.query(storeProcedure, (error, results) => {
      if (error) return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: results[0],
      });
    });
  } catch(e) {
    console.error(e);    
  }
}
export async function addNewAccident(req, res) {
  try {
    const storeProcedure = `call spAddNewPetAccident(?,?,?,?,?,?,?)`
    const { lastSeen, title, latitude, longitude, iduser, iddangerlevel, idaccidenttype } = req.body
    
    const newAccident = { lastSeen, title, latitude, longitude, iduser, iddangerlevel, idaccidenttype }
    connection.query(storeProcedure, [newAccident.lastSeen, newAccident.title, newAccident.latitude, 
      newAccident.longitude, newAccident.iduser, newAccident.iddangerlevel, newAccident.idaccidenttype], (error) => {
      if (error)
        return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: 'Creado correctamente'
      });
    })  
  } catch (error) {
    console.error(error)    
  }
}
export async function deleteAccident(req, res) {
  try {
    const storeProcedure = `call spDeleteAccident(?)`
    const idpetaccident = req.params.id 
    connection.query(storeProcedure, [idpetaccident], (error) => {
      if(error)
        return console.error(error)
      res.json({
        status: res.statusCode,
        data: 'Eliminado correctamente'
      })        
    })
  } catch (e) {
    console.error(e)    
  }
}
export async function accidentApproved(req, res) {
  try {
    const storeProcedure = `call spApprovedAccident(?)`
    const idpetaccident = req.params.id 
    connection.query(storeProcedure, [idpetaccident], (error) => {
      if(error)
        return console.error(error)
      res.json({
        status: res.statusCode,
        data: 'Aprobado correctamente'
      })        
    })
  } catch (e) {
    console.error(e)    
  }
}

