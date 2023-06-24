const express =require('express')
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/WorkoutController')

const router = express.Router()

//GET all workouts
router.get('/',getWorkouts)

//GET a single workout
router.get('/:id',getWorkout)

//POST a new Workout
router.post('/',createWorkout)

//DELETE a  Workout
router.delete('/:id',deleteWorkout)

//UPDATE a Workout
router.patch('/:id',updateWorkout)


module.exports = router