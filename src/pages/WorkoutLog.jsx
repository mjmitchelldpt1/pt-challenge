import WorkoutLogCard from "../components/WorkoutLogCard"
import { useEffect, useState} from 'react'
function WorkoutLog() {
  const [workoutLogData, setWorkoutLogData] = useState([])

  const editWorkoutLog = () => {
    // build me later 
  }

  const deleteWorkoutLog = () => {
    // don't delete me 
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
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    setWorkoutLogData(data)
  }
  return (
    <div className="container flex flex-col bg-slate-400 text-lg text-white">
      {workoutLogData.map((item) => (
        <WorkoutLogCard key={item.id} item={item}/>
      ))}
    </div>
    
  )
}

export default WorkoutLog