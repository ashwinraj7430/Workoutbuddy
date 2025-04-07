import React from 'react'
// import { useEffect,useState } from 'react'
import { useEffect } from 'react';

import WorkoutDetails from '../components/WorkoutDetails'
import Workoutforms from '../components/Workoutform'


import { useWorkoutContext } from '../hooks/useWorkoutContext'


const Home = () => {
  // const [workouts,setWorkouts]=useState(null)
  const {workouts,dispatch}=useWorkoutContext()
 useEffect(()=>{
  const fetchworkouts=async()=>{
    const response= await fetch('http://localhost:4000/api/workouts')
    const json=await response.json()

    if(response.ok){
      // setworkouts(json)
      dispatch({type:'SET_WORKOUTS',payload :json  })
    }
    
  }



  fetchworkouts()
 },[]  )
  return (
    <div className='main-div'>
        <div className="workouts">
          {workouts&&workouts.map((workout)=>(
     < WorkoutDetails key={workout._id} workout={workout}/>

          ))}
        </div>
        <Workoutforms/>
    </div>
  )
}

export default Home