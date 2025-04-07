import { useWorkoutContext } from "../hooks/useWorkoutContext"


const WorkoutDetails=({workout})=>{
  const {dispatch}=useWorkoutContext()
  const handleclick=async()=>{
    const response= await fetch('/api/workouts/'+workout._id,{
      method:'DELETE'
    })
    const json= await response.json()
  }
    return(
      <div className="workoutdetails">
        <h4 className='workouttitle'>{workout.title}</h4>
        <p><strong>Load (kg)</strong>{workout.load}</p>
        <p><strong>reps</strong>{workout.reps}</p>
        <span onClick={handleclick}>delete</span>
      </div>


    )

}
export default WorkoutDetails