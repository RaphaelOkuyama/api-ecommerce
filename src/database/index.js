const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgres://USERNAME:PASSWORD@localhost:5432/DB_NAME",
});

async function query(queryString, params, callback) {
  return pool.query(queryString, params, callback);
}

async function getClient() {
  return pool.connect();
}

module.exports = { query, getClient };