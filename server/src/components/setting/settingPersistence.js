const connection = require('../../data/connection');

module.exports = {
  async getSetting(){
    const results = await connection.query('select * from setting');       
    return results.rows;
  }
}