const { Pool } = require("pg");
const storesJson = require("./stores.json");

class ModelClass {
  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "postgres",
      password: process.env.PG_PASSWORD,
      port: 5432,
    });
  }

  async connectDatabase() {
    await this.pool.connect();
  }
  async setupDatabase() {
    await this.pool.query(`CREATE TABLE IF NOT EXISTS public.stores
    (
        id SERIAL,
        name text 
        url text 
        district text 
        CONSTRAINT stores_pkey PRIMRAY KEY
    )`);
  }
}
module.exports = ModelClass;
