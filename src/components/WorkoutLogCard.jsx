import Button from "./Button";
import ExerciseCard from "./ExerciseCard";


function WorkoutLogCard({ item }) {
  
  
  return (
    <div className='container my-3 ml-3 mr-auto bg-cyan-400 rounded-lg shadow-lg w-auto' key={item.id}>
      <p className="ml-3 mt-2 font-bold text-xl">{item.username}'s Daily Workout</p> 
      <div className='container flex w-auto px-3'>
      {item.workout.map((exercises) => (
        <ExerciseCard key={exercises.exercise} exercises={exercises}>
          
        </ExerciseCard>
      ))}
      </div>
    </div>
  );
}

export default WorkoutLogCard;
