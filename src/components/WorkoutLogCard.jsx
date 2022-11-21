import Button from "./Button";
import ExerciseCard from "./ExerciseCard";
import ExerciseAccordion from "./ExerciseAccordion";

function WorkoutLogCard({ children, username}) {
  
  
  return (
    <div className='container my-3 ml-3 mr-auto bg-cyan-400 rounded-lg shadow-lg w-auto'>
      <p className="ml-3 mt-2 font-bold text-xl">{username}'s Daily Workout</p> 
      <div className='container flex w-auto px-3'>
         {children}
      </div>
    </div>
  );
}

export default WorkoutLogCard;
