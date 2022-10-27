import { useState } from "react"

function ExerciseCard({ exercises }) {
  const [repTracker, setRepTracker] = useState({
    reps: '',
    rounds: ''
  })
  
  const {reps, rounds} = repTracker

  const onChange = (e) => {

    setRepTracker((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

 
  return (
    <div className="container flex my-3 flex-col bg-red-300">
      {exercises.exercise} <br />
          Sets: {exercises.sets_performed} 
          <input className='input w-24 mx-2 text-gray-400'
          onChange={onChange}
          type="number"
          value={rounds}
          placeholder='Sets'
          id='rounds' />
          Reps: {exercises.reps_performed}
          <input className='input w-24 mx-2 text-gray-400'
          onChange={onChange}
          type="number"
          value={reps}
          placeholder='Repetitions'
          id='reps' />
    </div>
  )
}

export default ExerciseCard
