import { useEffect, useState } from "react"

function Workout() {
  const [workoutData, setWorkoutData] = useState([])

  useEffect(() => {
    fetchData()
  } , [])

  const fetchData = async () => {
    const response = await fetch('/pt-challenge/data.json'
    ,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    setWorkoutData(data)
  }
  console.log(workoutData)
  
  return (
    <div className="container flex flex-col bg-slate-400 text-lg text-white">
       data
    </div>
  )
}

export default Workout