const express = require('express');
const router = express.Router();
const connection = require('../data/connection');

//Total de razas
router.get('/breeds', async (req, res, next) => {
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
});
module.exports = router;