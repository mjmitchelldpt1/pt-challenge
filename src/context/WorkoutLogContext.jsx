import { useState, createContext, useEffect } from "react";

const WorkoutLogContext = createContext()

export const WorkoutLogProvider = ({ children }) => {

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
    <WorkoutLogContext.Provider
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
      </WorkoutLogContext.Provider>
  )
}

export default WorkoutLogContext