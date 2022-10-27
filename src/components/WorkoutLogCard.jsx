import Button from "./Button";
import ExerciseCard from "./ExerciseCard";


function WorkoutLogCard({ item, onSubmit }) {
  
  
  return (
    <div className='container flex flex-col my-3 ml-3  bg-cyan-400 rounded-md shadow-lg  ' key={item.id}>
      <div className='container px-3'>
        Username: {item.username}
      </div>
      <div className='container flex px-3'>
      {item.workout.map((exercises) => (
        <ExerciseCard key={exercises.exercise} exercises={exercises}>
          
        </ExerciseCard>
      ))}
      </div>
    </div>
  );
}

export default WorkoutLogCard;
