const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "What is the name of your exercise?"
  },
  type: {
    type: String,
    trim: true,
    required: "What type of workout is this?"
  },
  weight: {
    type: Number,
    required: "What is the weight?"
  },
  sets: {
    type: Number,
    required: "How many sets?"
  },
  reps: {
    type: Number,
    required: "How many reps?"
  },
  duration: {
    type: Number,
    required: "How long was your workout?"
  },
  distance: {
    type: Number,
    required: "How many miles?"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
