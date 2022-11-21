import { useState, createContext, useEffect } from "react";

const WorkoutContext = createContext()

export const WorkoutProvider = ({ children }) => {
  const [repTracker, setRepTracker] = useState({
    userId:  workoutData.user_id,
    exerciseName: exercises.exercise_id,
    reps: 0,
    rounds: 0
  })

  const onChange = (e) => {

    setRepTracker((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
    if(reps >= 0 && rounds >= 0 ) {
    setIsCheckEnabled(true) 
  }  else {
    setIsCheckEnabled(false)
  }}

  const onSubmit = (e) => {
    e.preventDefault()
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch('/data.json'
    ,{
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json()
    setWorkoutLogData(data)
  }

  return (
    <WorkoutContext.Provider
      value={{
        workoutLogData,
        repTracker,
        editWorkoutLog,
        deleteWorkoutLog,
        onChange,
        onSubmit,
      }}
      >
        {children}
      </WorkoutContext.Provider>
  )
}

export default WorkoutContext