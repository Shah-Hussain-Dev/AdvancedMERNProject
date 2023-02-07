import userModel from "../models/userModel.js";
import moment from "moment";
const registerUser = async (req, res) => {
  const file = req.file.filename;
  const { fname, lname, email, mobile, gender, status, location } = req.body;

  if (
    !fname ||
    !lname ||
    !email ||
    !mobile ||
    !gender ||
    !status ||
    !location ||
    !file
  ) {
    return res.status(400).json({
      status: 400,
      message: "All fields are required!",
    });
  }

  //already registered
  try {
    const alreadyExist = await userModel.findOne({ email: email });
    if (alreadyExist) {
      return res.status(400).json({
        status: 400,
        message: "User already exist",
      });
    } else {
      const dateCreated = moment(new Date()).format("YYYY-MM-DD");
      const userData = await new userModel({
        fname,
        lname,
        email,
        mobile,
        gender,
        status,
        location,
        user_profile: file,
        dateCreated: dateCreated,
      });
      await userData.save();
      return res.status(201).json({
        status: 201,
        data: userData,
        message: "User registered successfully",
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: 400,
      message: err.message,
    });
    console.log("error", err);
  }
};

const getAllUsers = async (req, res) => {
  const allUsers = await userModel.find();
  console.log(allUsers);
  return res.status(200).json({
    status: 200,
    data: allUsers,
  });
};
export { registerUser, getAllUsers };
