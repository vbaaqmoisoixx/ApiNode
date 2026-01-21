import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

export default pool;

pool.query("select now()")
  .then(res => console.log("Conectado com sucesso:", res.rows))
  .catch(err => console.error("Erro ao conectar:", err));


pool.connect().then(() => {
  console.log("Conectado ao banco de dados");
})
.catch((err) => {
  console.error("Erro ao conectar ao banco de dados:", err);
});