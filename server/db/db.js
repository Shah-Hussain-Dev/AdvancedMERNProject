import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    // const options = {
    //   dbName: "UMS",
    // };
    const options = {
      keepAlive: true,
      connectTimeoutMS: 30000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.set("strictQuery", false);
    await mongoose.connect(DATABASE_URL, options);
    console.log("DB connected");
  } catch (error) {
    console.log("Error", error);
  }
};

export default connectDB;
