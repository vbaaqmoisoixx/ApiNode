import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
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