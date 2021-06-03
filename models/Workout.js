const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter name of exercise"
        },
        type: {
            type: String,
            trim: true,
            required: "Enter type of workout"
        },
        weight: {
            type: Number,
            required: "Enter weight"
        },
        sets: {
            type: Number,
            required: "Enter number of sets"
        },
        reps: {
            type: Number,
            required: "Enter number of reps"
        },
        duration: {
            type: Number,
            required: "Enter duration of workout"
        },
        distance: {
            type: Number,
            required: "Enter distance"
        }
    }]
},
    {
        toJSON: { virtuals: true }
    });

const virtual = workoutSchema.virtual('totalDuration');
virtual.get(function () {
    return this.exercises.reduce((total, { duration }) => {
        return total + duration
    }, 0)
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
