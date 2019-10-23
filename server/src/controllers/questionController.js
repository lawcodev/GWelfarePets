import connection from '../data/connection'

export async function getAllQuestions(req, res) {
  try {
    const storeProcedure = `call spGetAllQuestions()`
    connection.query(storeProcedure, (error, results) => {
      if (error)
        return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: results[0],
      });
    });
  } catch(e) {
    console.error(e);    
  }
}
