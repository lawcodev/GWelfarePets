const connection = require('../../data/connection');

module.exports = {
  async getConfig(){
    const results = await connection.query('select * from config');       
    return results.rows;
  }
}