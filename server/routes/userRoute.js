import express from "express";
const router = express.Router();
import { createUser, deleteUser, getUser, searchUser, updateUser } from "../controllers/userController.js";

router.post("/", createUser);
router.get("/", getUser);
router.delete("/delete/:id", deleteUser);
router.put("/updates/:id", updateUser);
router.get('/search', searchUser);

export default router;
