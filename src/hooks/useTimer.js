import { useState, useEffect } from "react";

const useTimer = (timeInMinutes) => {
  const [timer, setTimer] = useState(timeInMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [progressValue, setProgressValue] = useState(100);

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      var timeInSec = timeInMinutes * 60;
      var reductionPerSec = 100 / timeInSec;
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        setProgressValue((prevValue) => prevValue - reductionPerSec);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  useEffect(() => {
    if (timer === -1) {
      setIsRunning(false);
      setTimer(timeInMinutes * 60);
      setProgressValue(100);
    }
  }, [timer]);

  return {
    toggleTimer,
    timer,
    progressValue
  };
};

export default useTimer;
