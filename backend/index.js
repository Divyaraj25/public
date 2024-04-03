import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import user from "./models/users.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/gym");
app.post("/sign-up", (req, res) => {
  let isRegistered = false;
  const { email, username, contact, password } = req.body;

  const newUser = new user({ email, username, contact, password });
  newUser.save();
  isRegistered = true;
  res.status(200).send(isRegistered).redirect("/home");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userone = await user.findOne({ email });

  if (userone.password === password) {
    res.status(200).send("logged in");
  }
});

app.listen(3000, () => {
  console.log("All good");
});
