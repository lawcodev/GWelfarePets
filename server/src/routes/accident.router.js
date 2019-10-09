const express = require('express');
const router = express.Router();
const connection = require('../data/connection');
//Agregar mascotas 
router.post('/accident/add', async (req, res) => {
  try {
    const storeProcedure = `call spAddNewPetAccident(?,?,?,?)`
    const { description, latitude, longitude, iduser } = req.body
    
    const newAccident = { description, latitude, longitude, iduser }
    connection.query(storeProcedure, [newAccident.description, newAccident.latitude, newAccident.longitude, newAccident.iduser], (error) => {
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
})
module.exports = router;