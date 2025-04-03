const pool = require('../config/db')

const getAllIncome = async () =>{
    const result = await pool.query(`SELECT * FROM income ORDER BY date DESC`)
    return result.rows;
}

const addIncome = async (title, amount, category_id, date, notes) => {
    const result = await pool.query(
      `INSERT INTO income (title, amount, category_id, date, notes)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, amount, category_id, date, notes]
    );
    return result.rows[0];
  };
  
  const deleteIncome = async (id) => {
    await pool.query(`DELETE FROM income WHERE id = $1`, [id]);
    return true;
  };
  const updateIncome = async (id, title, amount, category_id, date, notes) => {
    const result = await pool.query(
      `UPDATE income
       SET title = $1, amount = $2, category_id = $3, date = $4, notes = $5
       WHERE id = $6
       RETURNING *`,
      [title, amount, category_id, date, notes, id]
    );
    return result.rows[0];
  };

  module.exports = {
    getAllIncome,
    addIncome,
    deleteIncome,
    updateIncome
  };