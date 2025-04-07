const express=require('express')
const router= express.Router()
const {
  getWorkouts, getWorkout, createWorkout,
  deleteWorkout,updateaWorkout
}=require('../controllers/WorkoutController')
//get all workout
router.get('/',getWorkout)
//get a single workout

router.get('/:id',getWorkouts)

//post a workout
router.post('/',createWorkout)
//   res.json({msg:`post a new workout`})
// })
//delete a workout
router.delete('/:id',deleteWorkout)
//update a workout
router.patch('/:id',updateaWorkout)
module.exports=router