const Workout = require("../models/Workout");

// Simple rule-based workout generator
exports.generateWorkout = async (req, res) => {
  const { userId, fitnessLevel } = req.body;

  let exercises = [];

  if (fitnessLevel === "beginner") {
    exercises = [
      { name: "Jumping Jacks", reps: "20", duration: "2 min" },
      { name: "Squats", reps: "15", duration: "—" }
    ];
  } else {
    exercises = [
      { name: "Push-ups", reps: "20", duration: "—" },
      { name: "Plank", reps: "—", duration: "1 min" }
    ];
  }

  const workout = await Workout.create({
    userId,
    exercises,
    intensity: fitnessLevel === "beginner" ? "low" : "medium"
  });

  res.json(workout);
};