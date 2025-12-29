const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  goal: {
    type: String, // weight loss, muscle gain, fitness
    required: true
  },
  fitnessLevel: {
    type: String, // beginner, intermediate, advanced
    required: true
  },
  timeAvailable: {
    type: Number, // minutes per day
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);