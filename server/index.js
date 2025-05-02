const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/email-automation", {
  useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  preferences: Object,
});
const User = mongoose.model("User", userSchema);

app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000, () => console.log("Server on port 5000"));
console.log("Connected to MongoDB");
console.log("Server is running on http://localhost:5000");