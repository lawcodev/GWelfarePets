const express = require('express');
const router = express.Router();
const connection = require('../data/connection');
const helper = require('../lib/helper')
const jwt = require('jsonwebtoken')
const config = require('../lib/config')
//Agregar usuarios 
router.post('/user/add', async (req, res) => {
  try {
    const storeProcedure = `call spAddNewUser(?,?,?,?,?,?,?,?,?)`
    const { username, password, firstName, middleName, lastName, dni, emailAddress, cellphone, birthday } = req.body
    const passwordEncrypted = await helper.encryptPassword(password)
    const newUser = { username, passwordEncrypted, firstName, middleName, lastName, dni, emailAddress, cellphone, birthday }
    console.log(newUser)    
    connection.query(storeProcedure, [newUser.username, newUser.passwordEncrypted, newUser.firstName, newUser.middleName, newUser.lastName, 
    newUser.dni, newUser.emailAddress, newUser.cellphone, newUser.birthday], function(error, results) {
      if(results.length > 0) {
        if (error) {
          return console.error(error.message);
        } else {
          results[0].forEach(item => {
            const token = jwt.sign({id: item.iduser}, config.secret, {
              expiresIn: 60 * 60 * 24
            })
            console.log(token);
            res.json({
              auth: true,
              token: token
            });
          });
        }
      }
    })  
  } catch (error) {
    console.error(error)    
  }
})
module.exports = router;