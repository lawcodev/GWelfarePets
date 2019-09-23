const mysql = require('mysql')
const config = require('./config.js')
const connection = mysql.createConnection(config)

connection.connect(function(error){
  if (error) console.error('Error de conexión', error.stack);
  console.log('Database connected - N° del hilo ' + connection.threadId); 
})
module.exports = connection;