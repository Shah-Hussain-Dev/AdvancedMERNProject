import express from "express";
import { getAllUsers, getSingleUser, registerUser } from "../Controllers/UserController.js";
import upload from "../multer/multerConfig.js";
// console.log(upload);

const router = express.Router();

//get all users
router.get("/all-users", getAllUsers);

//register user
router.post("/user/register", upload.single("user_profile"), registerUser);

//get single user
router.get("/user/:id", getSingleUser);

export default router;
