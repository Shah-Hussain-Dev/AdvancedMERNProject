import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";
import routes from "./routes/routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4500;
const DB_URL = process.env.DB_URL;

//CORS policy
app.use(cors());
//DATABASE connection
connectDB(DB_URL);
// load json
app.use(express.json());

//static files path
app.use("/uploads", express.static("./uploads"));

// routes
app.use(routes);

//loads json
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is on PORT http://localhost:${PORT}`);
});
