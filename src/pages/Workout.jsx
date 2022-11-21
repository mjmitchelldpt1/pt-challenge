import { useEffect, useState} from 'react'  
import WorkoutLogCard from "../components/WorkoutLogCard"
import Loading from "../components/Loading"
import Error from '../components/Error'


function Workout() {
  const [workoutLogData, setWorkoutLogData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

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
    setIsLoading(true)
    setHasError(false)
    try {
    const response = await fetch('/data.json'
    ,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    setWorkoutLogData(data)
    setIsLoading(false)
  } catch(error) {
    console.log(error)
    setHasError(true)
  }
  }

  useEffect(() => {
    fetchData()
  }, [setWorkoutLogData])

  return (
  <>
    {hasError && <Error/>}
    {isLoading ? (<Loading/> ): (
    <div className="container flex flex-col bg-slate-400 text-lg text-white">
      {workoutLogData.map((item) => (
        <WorkoutLogCard key={item.id} item={item}/>
      ))}
    </div> )}
  </>
  )
}

export default Workout
