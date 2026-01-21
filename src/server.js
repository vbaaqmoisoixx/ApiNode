import express from "express";
import cors from "cors";
import routes from "./routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.get("/", (req, res) => {
    res.send(
      "<h1>API de Templates</h1><p>Acesse <a href='http://localhost:3000/templates'>/templates</a> para ver os templates disponíveis.</p>"
    );
})




app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
