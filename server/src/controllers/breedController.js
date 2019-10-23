import connection from '../data/connection'

export async function getAllBreeds(req, res) {
  try {
    const storeProcedure = `call spGetAllBreed()`
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
