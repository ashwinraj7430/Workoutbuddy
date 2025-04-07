const Workout= require('../models/workoutmodel')
const mongoose= require('mongoose')



//get all workouts
const getWorkout= async(req,res)=>{
    const workout= await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workout)
}

//get a single workout
const getWorkouts=async(req,res)=>{
    const {id}=req.params
    const workouts= await Workout.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'no such workout'})
    }

    if(!workouts){
        return res.status(404).json({error:'no such workout'})
    }
    res.status(200).json(workouts)
}
//post a new workout
const createWorkout= async(req,res)=>{
    const {title,load,reps}=req.body

    let emptyFields=[]

    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length>0){
     return res.status(400).json({error:'please fill in the all details',emptyFields})

    }
    try{
      const workout=await Workout.create({title,load,reps})
      res.status(201).json(workout)
    }
    catch(error){
      res.status(400).json({error:error.message})
    }
}
//delete a wokrout

const deleteWorkout= async(req,res)=>{
    try{
   const {id}=req.params
   const workout=await Workout.findByIdAndDelete(id)
   if(!workout){
    return res.status(404).json({error:'no such workout'})
    
   }res.status(200).json(workout)

}catch(error){
    res.status(500).json({error:"error"})
}
}

// update a workout
const updateaWorkout= async(req,res)=>{
    try{
        const {id}=req.params
        const updatedData= req.body
    
    const workout= await Workout.findByIdAndUpdate(id,updatedData,{new:true})
    if(!Workout){
return res.status(404).json({error:'no such workout'})
    }res.status(200).json(workout)
    }
    catch(error ){
        res.status.json({error:'no such workout'})
    }
}


module.exports={
    
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateaWorkout
}