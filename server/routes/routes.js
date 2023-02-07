import express from "express";
import { getAllUsers, registerUser } from "../Controllers/UserController.js";
import upload from "../multer/multerConfig.js";
// console.log(upload);

const router = express.Router();

//get all users
router.get("/all-users", getAllUsers);

//register user
router.post("/register", upload.single("user_profile"), registerUser);

export default router;
