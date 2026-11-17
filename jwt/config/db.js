import "dotenv/config";
import mysql from "mysql2/promise";

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  throw new Error("DATABASE_URL belum di set di .env");
}
const url = new URL(dbUrl); // Node URL class

const pool = await mysql.createConnection({
  host: url.hostname, // host dari DATABASE_URL
  user: url.username, // user
  password: url.password, // password
  database: url.pathname.replace(/^\//, ""), // path tanpa leading slash => dbname
  port: url.port ? Number(url.port) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export { pool };
