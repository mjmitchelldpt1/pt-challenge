import { useEffect, useState } from "react"
import Error from "../components/Error"

function Workout() {
  const [workoutData, setWorkoutData] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    fetchData()
  } , [])

  const fetchData = async () => {
   
    try {
    const response = await fetch('/error.json'
    ,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    
  } catch(error) {
    console.log(error)
    setHasError(true)
  }
  }

  
  return (
    <>
    {hasError ? <Error /> :
    <div className="container flex flex-col bg-slate-400 text-lg text-white">
       data
    </div>}
    </>
  )
}

export default Workout