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
    <div className="container flex p-3 m-3 flex-col bg-red-300 rounded-2xl shadow-xl justify-center items-center w-auto">
      <p>{exercises.exercise}</p>
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
          placeholder='Reps'
          id='reps' />
    </div>
  )
}

export default ExerciseCard
