const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/User");
const Workout = require("./models/Workout");
const userRoutes = require("./routes/userRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();

// ✅ Middleware must come BEFORE routes
app.use(cors());          // Allow all origins
app.use(express.json());   // Parse JSON bodies

// Routes
app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});