  import { WorkoutContext } from "../Context/WorkoutContext";
  import { useContext } from "react";
  export const useWorkoutContext=()=>{
    const context=useContext(WorkoutContext)
 
    if(!context){
        throw error ('useWorkoutContext mustbe used inside an workout Context Provider')

    }
    return context
  }