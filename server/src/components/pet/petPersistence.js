const connection = require('../../data/connection');

module.exports = {
  async getPet(){
    const results = await connection.query('select * from pet');       
    return results.rows;
  }
}