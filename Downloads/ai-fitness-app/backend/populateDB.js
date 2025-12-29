const mongoose = require("mongoose");
require("dotenv").config(); // load .env

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  goal: String,
  fitnessLevel: String,
  timeAvailable: Number,
  progress: { type: Number, default: 0 },
});
const User = mongoose.model("User", userSchema);

// Workout Schema
const workoutSchema = new mongoose.Schema({
  name: String,
  exercises: [String],
  difficulty: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const Workout = mongoose.model("Workout", workoutSchema);

// Sample data
const usersData = [
  { name: "Ammoditaa", age: 18, goal: "fitness", fitnessLevel: "beginner", timeAvailable: 30 },
  { name: "Rohan", age: 22, goal: "strength", fitnessLevel: "intermediate", timeAvailable: 45 },
  { name: "Sneha", age: 20, goal: "endurance", fitnessLevel: "beginner", timeAvailable: 25 },
  { name: "Aditya", age: 25, goal: "weight loss", fitnessLevel: "advanced", timeAvailable: 60 },
  { name: "Mira", age: 19, goal: "flexibility", fitnessLevel: "intermediate", timeAvailable: 35 },
];

const exercisesByGoal = {
  fitness: ["Push-ups", "Squats", "Plank"],
  strength: ["Deadlift", "Bench Press", "Pull-ups"],
  endurance: ["Running", "Cycling", "Jump Rope"],
  "weight loss": ["Burpees", "Mountain Climbers", "Lunges"],
  flexibility: ["Yoga", "Stretching", "Pilates"],
};

function getDifficulty(level) {
  if (level === "beginner") return "beginner";
  if (level === "intermediate") return "medium";
  return "hard";
}

async function populateDB() {
  try {
    await User.deleteMany();
    await Workout.deleteMany();

    for (let userData of usersData) {
      const user = await User.create(userData);
      await Workout.create({
        name: `${user.goal} Workout`,
        exercises: exercisesByGoal[user.goal],
        difficulty: getDifficulty(user.fitnessLevel),
        userId: user._id,
      });
      console.log(`Created user: ${user.name}`);
    }

    console.log("🎉 Database populated successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.log("Error populating DB:", err);
  }
}

populateDB();