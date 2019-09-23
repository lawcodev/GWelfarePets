const express = require('express');
const router = express.Router();
const connection = require('../data/connection');

router.post('/authentication', (req, res, next) => {
  try {
    const storeProcedure = `call spAuthentication(?,?)`
    const { username, password } = req.body
    const newAuthentication = {
      username, 
      password
    }
    console.log(newAuthentication);    
    connection.query(storeProcedure, [newAuthentication.username, newAuthentication.password])
  } catch (error) {
    console.error(error)    
  }
})
module.exports = router;