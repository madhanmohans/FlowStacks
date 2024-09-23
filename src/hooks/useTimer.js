import { useState, useEffect } from "react";

const useTimer = (timeInMinutes) => {
  const [timer, setTimer] = useState(timeInMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [progressValue, setProgressValue] = useState(100);
  const [reductionPerSec, setReductionPerSec] = useState(
    100 / (timeInMinutes * 60)
  );

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleIncrement = () => {
    setTimer((prevTimer) => prevTimer + 1);
    setReductionPerSec(100 / (timer + 1));
    setProgressValue((prevValue) => prevValue + reductionPerSec > 100 ? 100 : prevValue + reductionPerSec);
  };

  const handleDecrement = () => {
    setTimer((prevTimer) => prevTimer - 1);
    setReductionPerSec(100 / (timer - 1));
    setProgressValue((prevValue) => prevValue - reductionPerSec < 0 ? prevValue : prevValue - reductionPerSec);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
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
    progressValue,
    handleIncrement,
    handleDecrement
  };
};

export default useTimer;
