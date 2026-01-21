import { Router } from "express";
import { listarTemplates,criarTemplate } from "./controllers.js";

const router = Router();

router.get("/templates", listarTemplates);
router.post("/templates", criarTemplate);

export default router;
