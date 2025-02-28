const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [{ email: "test@example.com", password: bcrypt.hashSync("password", 8) }];

const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ email: user.email }, "secretkey", { expiresIn: "1h" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

app.listen(5000, () => console.log("Server running on port 5000"));