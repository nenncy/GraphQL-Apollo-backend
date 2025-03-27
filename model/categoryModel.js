const pool =  require('../config/db')

const getAllcategory = async ()=>{
    const result =  await pool.query('SELECT * FROM categories ORDER BY id');
    return result.rows;
}

const addCategory =  async(name, type, color) =>{
    const result = await pool.query(
        `INSERT INTO categories (name, type, color) VALUES ($1,$2,$3) RETURNING *
        `, [name, type, color]
    )
    return result.rows[0];
}
module.exports = {
    getAllcategory,
    addCategory
  };