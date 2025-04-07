import { children, createContext, useReducer } from "react";
export const WorkoutContext = createContext()
export const WorkoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
    
    case 'CREATE_WORKOUTS' :
return {
    workouts:[action.payload,...state.workouts]
}
case 'DELETE_WORKOUTS':
    return{
        workouts:state.workouts.filter((w)=>w._id !==action.payload.__id)
    }
default:
    return state 
}
}
    export const WorkoutContextProvider=({children})=>{
        const [state,dispatch]=useReducer(WorkoutsReducer,{
            workouts:null
        })
return(
    <WorkoutContext.Provider value={{...state,dispatch}}>
{children}
    </WorkoutContext.Provider>
)
    }  



    