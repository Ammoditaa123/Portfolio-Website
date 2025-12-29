const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  exercises: [
    {
      name: String,
      reps: String,
      duration: String
    }
  ],
  intensity: {
    type: String // low, medium, high
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Workout", workoutSchema);