const express = require('express');
const router = express.Router();
const connection = require('../data/connection');
const helper = require('../lib/helper')

router.post('/authentication', async (req, res, next) => {
  try {
    const query = `select e.idemployeed from person p inner join employeed e on p.idperson = e.idperson where p.username = ? and p.password = ? and state = 1`
    let username = req.body.username
    let password = req.body.password
    const encryptedPassword = await helper.matchPassword(password, password)
    
    if(username && password) {
      connection.query(query, [username, encryptedPassword], function(error, results, fields) {
        if(results.length > 0) {
          res.status(200).send({
            status: res.statusCode,
            data: results[0]
          })
        } else {
          res.status(401).send({
            status: res.statusCode,
            data: 'username o password incorrect'
          })       
        }
        return results
      })
    } else{
      res.status(401).send({
        status: res.statusCode,
        data: 'Please enter username o password'
      })          
    }
  } catch (error) {
    console.error(error)    
  }
})
//Detalle de la sesión
router.get('/authentication/detail/:id', async (req, res) => {
  try {
    const storeProcedure = `call spGetUserById(?)`
    const idauthentication = req.params.id
    connection.query(storeProcedure, [idauthentication], (error, results) => {
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
module.exports = router;