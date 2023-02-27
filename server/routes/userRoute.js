import express from "express";
const router = express.Router();
import { getUser } from "../controllers/userController.js";

router.get("/", getUser);

export default router;
