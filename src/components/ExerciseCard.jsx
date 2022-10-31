import { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa"

function ExerciseCard({ exercises, username }) {
  const [isCheckEnabled, setIsCheckEnabled] = useState(false)
  const [isExerciseComplete, setIsExerciseComplete] = useState(false)
  const [repTracker, setRepTracker] = useState({
    reps: localStorage.getItem("reps_performed"),
    rounds: localStorage.getItem("sets_performed")
  })
  
  const {reps, rounds} = repTracker

  const onChange = (e) => {

    setRepTracker((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
    if(reps >= 0 && rounds >= 0 ) {
    setIsCheckEnabled(true) 
  }  else {
    setIsCheckEnabled(false)
  }}

  const completeExercise = () => {
    if(isCheckEnabled) {
    const newWorkoutLog = {
      reps: reps,
      rounds: rounds
    }
    
    setIsExerciseComplete(!isExerciseComplete)
    localStorage.setItem(`${username} ${exercises.exercise_id} sets_performed `, newWorkoutLog.rounds)
    localStorage.setItem(`${username} ${exercises.exercise_id} reps_performed `, newWorkoutLog.reps)
    
  }}



  
 
  return (
    <div className={`container flex p-3 m-3 flex-col rounded-2xl shadow-xl justify-center items-center w-auto ${isExerciseComplete ? 'bg-green-400 transition-colors duration-500': 'bg-orange-400 transition-colors duration-500'}`}>
      <p>{exercises.exercise_id}tester</p>
          Sets: {exercises.sets_performed} 
          <input className='input w-24 mx-2 text-gray-400'
          onChange={onChange}
          type="number"
          value={rounds || ''}
          placeholder='Sets'
          id='rounds' />
          Reps: {exercises.reps_performed}
          <input className='input w-24 mx-2 text-gray-400'
          onChange={onChange}
          type="number"
          value={reps || ''}
          placeholder='Reps'
          id='reps' />
          {isCheckEnabled && <button onClick={completeExercise}><FaCheck className='font-extrabold hover:scale-125'/></button>}
    </div>
  )
}

export default ExerciseCard
