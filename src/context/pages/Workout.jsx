import { useEffect, useState } from "react"

function Workout() {
  const [workoutData, setWorkoutData] = useState([])

  useEffect(() => {
    fetchData()
  } , [])

  const fetchData = async () => {
    const response = await fetch('/data.json'
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
        {workoutData.map((item) => (
        <div className="container flex my-3" 
             key={item.id}>
             Exercise: {item.exercise} <br />
             Focus Area: {item.category} <br />
             Repetitions: {item.repetitions} <br />
        </div>
        ))}
    </div>
  )
}

export default Workout