import express, { Router } from "express";
import { createU, getAllU, getU, removeU, updateU } from "../controllers/user";

const router: Router = express.Router();
router.get('/users', getAllU)
router.get('/users/:id', getU)
router.post('/users', createU )
router.put('/users/:id', updateU, )
router.delete('/users/:id', removeU, )

export default router;
