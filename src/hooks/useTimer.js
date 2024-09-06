import { useState, useEffect } from "react";

const useTimer = (timeInMinutes) => {
  const [timer, setTimer] = useState(timeInMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  useEffect(() => {
    if (timer === 0) {
      setIsRunning(false);
      setTimer(timeInMinutes * 60);
    }
  }, [timer]);

  return {
    toggleTimer, timer
};
};

export default useTimer;
