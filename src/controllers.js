import { pool } from "./db.js";

export async function listarTemplates(req, res) {
  try {
    const result = await pool.query("SELECT * FROM templates");
    res.json(result.rows);
  } catch (err) {
    console.error("ERRO:", err.message);
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
export async function criarTemplate(req, res) {
  try {
    const {
      nome_template,
      img_template,
      html_template,
      css_template,
      js_template
    } = req.body;

    const sql = `
      INSERT INTO templates 
      (nome_template, img_template, html_template, css_template, js_template)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [
      nome_template,
      img_template,
      html_template,
      css_template,
      js_template
    ];

    const result = await pool.query(sql, values);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Erro ao criar template:", err.message);
    res.status(500).json({ error: err.message });
  }
}
