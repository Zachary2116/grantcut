import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to Database"))
    .catch(err => console.error("❌ Error connecting to database:", err));

const db = mongoose.connection;

// User Schema & Model
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: { type: String, unique: true },
    phno: String,
    gender: String,
    password: String
});

const User = mongoose.model("User", userSchema);

// Secret Key for JWT
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"; 

// 🔹 User Registration Route
app.post("/register", async (req, res) => {
    try {
        const { name, age, email, phno, gender, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ msg: "Please provide all required fields." });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "Email already exists." });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, age, email, phno, gender, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ msg: "User registered successfully!" });
    } catch (err) {
        console.error("❌ Error inserting record:", err);
        res.status(500).json({ msg: "Server error, please try again later." });
    }
});

// 🔹 User Login Route (Generate JWT Token)
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: "Please provide email and password." });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ msg: "Invalid email or password." });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Invalid email or password." });
        }

        // Generate JWT Token
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ msg: "Login successful!", token });
    } catch (err) {
        console.error("❌ Login error:", err);
        res.status(500).json({ msg: "Server error, please try again later." });
    }
});

// 🔹 Middleware to Protect Routes
const authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(403).json({ msg: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid token." });
    }
};

// 🔹 Protected Route Example
app.get("/profile", authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: "Server error." });
    }
});

// API Route for Testing Connection
app.get("/", (req, res) => {
    res.json({ msg: "Welcome to the API!" });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
