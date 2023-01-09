import { useState, useEffect } from "react";

const useUserData = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      setUserData(JSON.parse(localStorage.getItem("userData")));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { userData, isLoading, hasError };
};

export default useUserData;
