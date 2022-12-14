import { useState } from "react";
import WorkoutLogCard from "../components/WorkoutLogCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ExerciseCard from "../components/ExerciseCard";
import { FaCheck } from "react-icons/fa";
import useWorkoutData from "../hooks/useWorkoutData";
import useUserData from "../hooks/useUserData";

function WorkoutLog() {
  const { workoutData, setWorkoutData, isLoading, hasError } = useWorkoutData();
  const { userData } = useUserData();
  const [newExerciseName, setNewExerciseName] = useState("");
  const [isCheckEnabled, setIsCheckEnabled] = useState(false);

  const updateWorkoutState = (updateExercise) => {
    setWorkoutData({
      ...workoutData,
      user_id: "user_id",
      workout: [
        updateExercise,
        ...workoutData.workout.filter(
          (item) => item.exercise_id !== updateExercise.exercise_id
        ),
      ],
    });
    localStorage.setItem("newData", JSON.stringify(workoutData));
  };

  const onChange = (e) => {
    setNewExerciseName(e.target.value);
    if (newExerciseName.trim().length > 3) {
      setIsCheckEnabled(true);
    }
  };

  const createNewExercise = () => {
    if (isCheckEnabled) {
      let exerciseObj = {
        exercise_id: newExerciseName,
        reps_performed: 0,
        sets_performed: 0,
      };
      addNewExercise(exerciseObj);
    }
  };

  const addNewExercise = (exerciseObj) => {
    setWorkoutData({
      ...workoutData,
      user_id: "user_id",
      workout: [
        ...workoutData.workout.filter(
          (item) => item.exercise_id !== exerciseObj.exercise_id
        ),
        exerciseObj,
      ],
    });
  };
  return (
    <>
      {hasError && <Error />}
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <WorkoutLogCard key={userData.user_id} username={userData.username}>
            {workoutData.workout.map((exercises) => (
              <ExerciseCard
                key={exercises.exercise_id}
                exercises={exercises}
                workoutData={workoutData}
                updateWorkoutState={updateWorkoutState}
              />
            ))}
            <div className="container flex p-3 m-3 flex-col rounded-2xl shadow-xl justify-center items-center w-auto">
              <input
                className="input w-24 mx-2 text-gray-400"
                onChange={onChange}
                type="text"
                value={newExerciseName}
                placeholder="Add New Exercise"
                id="exercise_id"
              />
              {isCheckEnabled && (
                <button onClick={createNewExercise}>
                  <FaCheck className="font-extrabold hover:scale-125" />
                </button>
              )}
            </div>
          </WorkoutLogCard>
        </div>
      )}
    </>
  );
}

export default WorkoutLog;
