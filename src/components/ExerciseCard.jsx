import { useState } from "react"
import { FaCheck } from "react-icons/fa"

function ExerciseCard({ exercises, workoutData, updateWorkoutState }) {
  const [isCheckEnabled, setIsCheckEnabled] = useState(false)
  const [isExerciseComplete, setIsExerciseComplete] = useState(false)
  const [repTracker, setRepTracker] = useState({
    exercise_id: exercises.exercise_id,
    reps_performed: 0,
    sets_performed: 0
  })
 
  
  const {exercise_id, reps_performed, sets_performed} = repTracker
  
  const onChange = (e) => {

    setRepTracker((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
    if(reps_performed >= 0 && sets_performed >= 0 ) {
    setIsCheckEnabled(true) 
  }  else {
    setIsCheckEnabled(false)
  }}

  const completeExercise = () => {
    if(isCheckEnabled) {
    let updateExercise = {
      exercise_id: exercises.exercise_id,
      reps_performed: reps_performed,
      sets_performed: sets_performed
    }
    setIsExerciseComplete(true)
    updateWorkoutState(updateExercise)
  
  }}


  return (
    <div className={`container flex p-3 m-3 flex-col rounded-2xl shadow-xl justify-center items-center w-auto ${isExerciseComplete ? 'bg-green-400 transition-colors duration-500': 'bg-orange-400 transition-colors duration-500'}`}>
      <p>{exercise_id}</p>
          Sets: {sets_performed} 
          <input className='input w-24 mx-2 text-gray-400'
          onChange={onChange}
          type="number"
          value={sets_performed || ''}
          placeholder='Sets'
          id='sets_performed' />
          Reps: {reps_performed}
          <input className='input w-24 mx-2 text-gray-400'
          onChange={onChange}
          type="number"
          value={reps_performed || ''}
          placeholder='Reps'
          id='reps_performed' />
          {isCheckEnabled && <button onClick={completeExercise}><FaCheck className='font-extrabold hover:scale-125'/></button>}
    </div>
  )
}

export default ExerciseCard
