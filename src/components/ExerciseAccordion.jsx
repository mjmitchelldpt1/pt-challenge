import { useState } from "react"
import { FaCheck } from "react-icons/fa"

function ExerciseAccordion({ exercises, username }) {
  const [isCheckEnabled, setIsCheckEnabled] = useState(false)
  const [repTracker, setRepTracker] = useState({
    reps: 0,
    rounds: 0,
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

  const handleCompleteRound = () => {
    if(isCheckEnabled) {
        setRepTracker({
            reps: 0,
            rounds: rounds + 1
        })
    }
    setIsCheckEnabled(false)
  }



  
 
  return (
    <div className="container flex flex-col rounded-2xl shadow-xl justify-center items-center w-auto">
      <div className="container flex bg-red-400">{exercises.exercise_id}</div>
      <div className="container bg-amber-400">
          <input className='input w-24 mx-2 text-gray-400'
          onChange={onChange}
          type="number"
          value={reps || ''}
          placeholder='Reps'
          id='reps' />
          {isCheckEnabled && <button onClick={handleCompleteRound}><FaCheck className='font-extrabold hover:scale-125'/></button>}
      </div>
      <div className="container flex bg-lime-400">
        Sets: 
        <div className="container flex justify-end">{[
            ...Array(rounds)].map((round) => <FaCheck/>)
        }</div>
      </div>
    </div>
  )
}

export default ExerciseAccordion
