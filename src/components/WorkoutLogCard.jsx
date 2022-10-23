import React from 'react'

function WorkoutLogCard({item}) {
  return (
    <div className="container flex my-3" 
             key={item.id}>
             UserName: {item.username} <br />
             Exercise Performed: {item.workout.exercise_performed} <br />
             Sets: {item.workout.sets_performed} <br />
             Repetitions: {item.workout.reps_performed} <br />
             Total Reps: {item.workout.total_reps_performed} <br />
    </div>
  )
}

export default WorkoutLogCard
