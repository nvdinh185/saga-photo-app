import express from "express";
const router = express.Router();
import { getUser, createUser } from "../controllers/userController.js";

router.get("/", getUser);
router.post("/", createUser);

export default router;
