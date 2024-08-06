const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',  
  host: 'localhost',
  database: 'employee_tracker',
  password: 'jabrown31', 
  port: 5432
});

module.exports = pool;
