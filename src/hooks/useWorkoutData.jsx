import { useState, useEffect } from "react";

const useWorkoutData = () => {
  const [workoutData, setWorkoutData] = useState({
    user_id: "user_id",
    workout: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      setWorkoutData(JSON.parse(localStorage.getItem("workoutData")));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { workoutData, setWorkoutData, isLoading, hasError };
};

export default useWorkoutData;
