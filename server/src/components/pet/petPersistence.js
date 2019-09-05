const connection = require('../../data/connection');

module.exports = {
  async getPet(){
    const results = await connection.query('select * from pet');       
    return results.rows;
  },
  async delete(id){
    const rowsAffect = await connection.query(`delete from pet where id = $1`, [id]);
    return rowsAffect
  },
  async getPetId(id){
    const results = await connection.query(`select * from pet where id = $1`, [id]);
    return results.rows[0]
  },
  async getCountPet(){
    const countPet = await connection.query(`select count(*) from pet`)
    return countPet
  }
}