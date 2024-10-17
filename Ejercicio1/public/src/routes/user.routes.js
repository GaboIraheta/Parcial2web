import { showHome, showForm, showConfirmPage, sendData } from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.get('/', showHome);
router.get('/form', showForm);
router.get('/confirmPage', showConfirmPage);
router.post('/submit', sendData);   

export default router;