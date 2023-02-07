import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 10,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  user_profile: {
    type: String,
    required: true,
    trim: true,
  },

  status: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  dateCreated: {
    type: Date,
  },
  dateUpdated: {
    type: Date,
  },
});

const userModel = new mongoose.model("user", userSchema);
export default userModel;
