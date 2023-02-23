import userModel from "../models/userModel.js";
import moment from "moment";

//register user
const registerUser = async (req, res) => {
  const file = req.file.filename;
  console.log(req.file);
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
      const dateCreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
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
      console.log("User registered successfully", userData);
    }
  } catch (err) {
    return res.status(400).json({
      status: 400,
      message: err.message,
    });
    console.log("error", err);
  }
};

// get all users data
const getAllUsers = async (req, res) => {
  const allUsers = await userModel.find();
  console.log(allUsers);
  return res.status(200).json({
    status: 200,
    data: allUsers,
  });
  console.log("allUsers", allUsers);
};

//get single user data
const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOne({ _id: id });
    return res.status(200).json({
      status: 200,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      status: 404,
      message: error.message,
    });
    console.log(error.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  console.log(req.file);
  const {
    fname,
    lname,
    email,
    mobile,
    gender,
    status,
    location,
    user_profile,
  } = req.body;
  const file = req.file ? req.file.filename : user_profile;
  const dateUpdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

  try {
    const updateUserData = await userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        fname,
        lname,
        email,
        mobile,
        gender,
        status,
        location,
        user_profile: file,
        dateUpdated,
      },
      {
        new: true,
      }
    );
    await updateUserData.save();
    res.status(200).json(updateUser);
  } catch (error) {
    return res.status(404).json({
      status: 404,
      message: error.message,
    });
    console.log(error.message);
  }
};
export { registerUser, getAllUsers, getSingleUser, updateUser };
