import { createConnection } from 'mysql';
import config from './config.js';
const connection = createConnection(config)

connection.connect(function(error){
  if (error) console.error('Connection is failed - ErrorId', error.stack);
  console.log('>>> Database connected - Thread: ' + connection.threadId); 
})
// Esta para cambiarlo, para usar promesas resolve, reject
module.exports = connection;