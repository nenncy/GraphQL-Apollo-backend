require('dotenv').config();
const { Pool } = require('pg'); // Import PostgreSQL client

// Create PostgreSQL Connection Pool
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT  
});

// Check PostgreSQL Connection
pool.connect()
    .then(() => console.log("✅ PostgreSQL Connected Successfully!"))
    .catch(err => console.error("❌ PostgreSQL Connection Failed:", err.message));

module.exports = pool;