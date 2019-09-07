const { Pool } = require('pg')

const pool = new Pool({

  host: '',
  user: 'postgres',
  password: 'jcs12344321',
  database: 'gwelfarepetsBD',
  port: 5432
  
});
module.exports = pool;