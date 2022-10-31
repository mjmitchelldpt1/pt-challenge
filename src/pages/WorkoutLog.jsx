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
    const response = await fetch('data.json'
    ,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    console.log(response)
    return response
  } catch(error) {
    console.log('anything')
  }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="container flex flex-col bg-slate-400 text-lg text-white">
      {workoutLogData.map((item) => (
        <WorkoutLogCard key={item.id} item={item}/>
      ))}
    </div>
    
  )
}

export default WorkoutLog
