import express, { Router } from "express";
import { createN, getN, getAllN, removeN, updateN } from "../controllers/new";


const router: Router = express.Router();
router.get('/news', getAllN);
router.get("/news/:id", getN);
router.post("/news", createN);
router.put("/news/:id",  updateN)
router.delete("/news/:id" , removeN)

export default router;