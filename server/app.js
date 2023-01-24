import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
4;

app.get("/", (req, res) => {
  res.status(201).json("Server Started");
});
app.listen(PORT, () => {
  console.log(`Server is on PORT http://localhost:${PORT}`);
});
