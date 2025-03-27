
// it's interaction between database and its work as independant of graphql and work as RESTAPI too. 
//create functions to run SQL query for database 

const pool = require ("../config/db")

const getAlluser= async ( ) =>{
    const result = await pool.query(`SELECT QUERY * FROM users`)
    return result.rows;

}
const createUser = async (name, email, password) => {
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return result.rows[0];
  };
  
module.exports = { getAlluser, createUser };