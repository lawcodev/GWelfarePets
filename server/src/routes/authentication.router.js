const express = require('express');
const router = express.Router();
const connection = require('../data/connection');
const helper = require('../lib/helper')
const jwt = require('jsonwebtoken')
const config = require('../lib/config')

router.post('/authentication', async (req, res, next) => {
  try {
    const query = `select u.iduser, p.username, p.password, r.name as authorizationName from person p inner join role r on p.idrole = r.idrole inner join user u on u.idperson = p.idperson where username = ?`
    const { username, password } = req.body
    const user = {
      username: username,
      password: password
    }
    connection.query(query, [user.username], async function(err, results) {
      if(results.length > 0) {
        const passwordEncrypted = results[0].password
        const iduser = results[0].iduser
        const authorization = results[0].authorizationName
        if(authorization === config.administrator || authorization === config.trabajador) {
          const validPassword = await helper.matchPassword(password, passwordEncrypted)
          if(!validPassword) return res.status(401).json({ auth: false, token: null, message: 'password incorrect' })
          const token = jwt.sign({ id: iduser }, config.secret, {
            expiresIn: 60 * 60 * 24
          })
          res.json({ auth: true, token, authorization: true})
        } else if(authorization === config.usuario) {
          const validPassword = await helper.matchPassword(password, passwordEncrypted)
          if(!validPassword) return res.status(401).json({ auth: false, token: null, message: 'password incorrect' })
          const token = jwt.sign({ id: iduser }, config.secret, {
            expiresIn: 60 * 60 * 24
          })
          res.json({ auth: true, token, authorization: false})
        } else {
          return res.status(404).json('Error al encontrar credenciales')
        }
      } else {
        return res.status(404).json('The username doesnt exist')
      }
    })
  } catch (error) {
    console.error(error)  
    throw error;  
  }
})
//Detalle de la sesión
router.get('/authentication/home', async (req, res, next) => {
  try {
    const storeProcedure = `select * from person p inner join role r on p.idrole = r.idrole where p.idperson = ?`
    console.log(req.userId);
    connection.query(storeProcedure, [req.idperson], function (error, results) {
      if (results.length > 0 ) {
        console.log(results[0].idperson);
        res.json({
          status: res.statusCode,
          data: results[0]
        });
      } else {
        return res.status(404).send('No user date found')
      }
    })
  } catch (error) {
    console.error(error)    
  }
});
router.get('/authentication/detail/:id', async (req, res) => {
  try {
    const storeProcedure = `select * from person p inner join role r on p.idrole = r.idrole inner join user u on u.idperson = p.idperson where u.iduser = ?`
    const iduser = req.params.id
    connection.query(storeProcedure, [iduser], (error, results) => {
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