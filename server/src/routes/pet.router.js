const express = require('express');
const router = express.Router();
const connection = require('../data/connection');

//Total de mascotas
router.get('/pets', async (req, res, next) => {
  try {
    const storeProcedure = `call spGetAllPets()`
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
});
// Contador total de mascotas activas
router.get('/pets/count', async (req, res, next) => {
  try {
    const storeProcedure = `select count(*) as count from pet where state = 1`
    connection.query(storeProcedure, (error, results) => {
      if (error)
        return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: results[0]
      });
    });
  } catch(e) {
    console.error(e);    
  }
});
//Eliminar una mascota por id
router.get('/pets/delete/:id', async (req, res, next) => {
  const storeProcedure = `call spPetDelete(?)`
  const idpet = req.params.id // se captura el id de la mascota
  connection.query(storeProcedure, [idpet], (error) => {
    if (error)
      return console.error(error.message);
    res.json({
      status: res.statusCode,
      data: 'Eliminado correctamente'
    });
  })
});
//Detalle de la mascota
router.get('/pets/detail/:id', async (req, res) => {
  try {
    const storeProcedure = `call spPetDetail(?)`
    const idpet = req.params.id
    connection.query(storeProcedure, [idpet], (error, results) => {
      if (error)
        return console.error(error.message);
      res.json({
        status: res.statusCode,
        data: results[0]
      });
    })
  } catch (error) {
    console.error(error)    
  }
});
//Agregar mascotas 
router.post('/pets/add', async (req, res) => {
  try {
    const storeProcedure = `call spAddNewPet(?,?,?,?)`
    const { name, description, age, genre} = req.body
    const newPet = { name, description, age, genre }
    connection.query(storeProcedure, [newPet.name, newPet.description, newPet.age, newPet.genre], (error) => {
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