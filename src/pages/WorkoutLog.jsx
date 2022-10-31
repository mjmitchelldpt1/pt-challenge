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

  const fetchData = async () => {
    try {
    const response = await fetch('pt-challenge/data.json'
    ,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    setWorkoutLogData(data)
  } catch(error) {
    console.log(error)
  }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="container flex flex-col bg-slate-400 text-lg text-white">
      <p>tester</p>
      {workoutLogData.map((item) => (
        <WorkoutLogCard key={item.id} item={item}/>
      ))}
    </div>
    
  )
}

export default WorkoutLog
