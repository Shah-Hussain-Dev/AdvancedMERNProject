import express from "express";
import {
  getAllUsers,
  getSingleUser,
  registerUser,
  updateUser,
} from "../Controllers/UserController.js";
import upload from "../multer/multerConfig.js";
// console.log(upload);

const router = express.Router();

//get all users
router.get("/all-users", getAllUsers);

//register user
router.post("/user/register", upload.single("user_profile"), registerUser);

//get single user
router.get("/user/:id", getSingleUser);

//update user
router.put("/user/update-user/:id", upload.single("user_profile"), updateUser);
export default router;
