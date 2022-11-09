import { useState, createContext, useEffect } from "react";

const WorkoutContext = createContext()

export const WorkoutProvider = ({ children }) => {

  const [workoutLogData, setWorkoutLogData] = useState([])
  const [repTracker, setRepTracker] = useState({
    exercise: '',
    reps: '',
    rounds: ''
  })

  const {exercise, reps, rounds} = repTracker

  const editWorkoutLog = () => {
    // build me later 
  }

  const deleteWorkoutLog = () => {
    // don't delete me 
  }

  const onChange = (e) => {
    setRepTracker((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

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