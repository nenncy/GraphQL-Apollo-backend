const pool = require('./config/db.js')

const createTable = async ()=>{

    const queries= `
     CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );  
    
    CREATE TABLE IF NOT EXISTS categories(
     id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE,
      type VARCHAR(10) CHECK (type IN ('income', 'expense')) NOT NULL,
      color VARCHAR(7),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

     CREATE TABLE IF NOT EXISTS income (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      amount NUMERIC NOT NULL CHECK (amount >= 0),
      category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
      date DATE NOT NULL,
      notes TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS expenses (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      amount NUMERIC NOT NULL CHECK (amount >= 0),
      category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
      date DATE NOT NULL,
      notes TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    `
    try{
        await pool.query(queries);
        console.log("created succefully")

    }
    catch(err){
        console.log("error creating tables", err)
    }
    finally{
        pool.end()
    }
    

}

createTable();