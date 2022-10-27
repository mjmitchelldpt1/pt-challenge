import { useEffect, useState } from "react"

function Workout() {
  const [workoutData, setWorkoutData] = useState([])

  useEffect(() => {
    fetchData()
  } , [])

  const fetchData = async () => {
    const response = await fetch('/exerciseDB.json'
    ,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    setWorkoutData(data)
  }
  
  return (
    <div className="container flex flex-col bg-slate-400 text-lg text-white">
       workout plan
    </div>
  )
}

export default Workout