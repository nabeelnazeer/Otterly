const express = require("express");
const collection = require("./mongo");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/Login", cors(), (req, res) => {
  // Add your logic for GET /Login route if needed
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });

    if (user) {
      // Consider using bcrypt for password hashing and comparison
      if (user.password === password) {
        res.json({ status: "success", message: "Login successful" });
      } else {
        res.status(401).json({ status: "error", message: "Invalid credentials" });
      }
    } else {
      res.status(404).json({ status: "error", message: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

app.post("/Signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await collection.findOne({ email: email });

    if (existingUser) {
      res.status(409).json({ status: "error", message: "User already exists" });
    } else {
      // Consider using bcrypt for password hashing
      const newUser = await collection.insertOne({ email: email, password: password });
      res.status(201).json({ status: "success", message: "User created successfully" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

const PORT = 8008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
