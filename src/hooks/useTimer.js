import { useState, useEffect } from "react";

const useTimer = (timeInMinutes) => {
  const initialTime = timeInMinutes * 60;
  const [timer, setTimer] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [progressValue, setProgressValue] = useState(100);
  const [reductionPerSec, setReductionPerSec] = useState(100 / initialTime);

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleIncrement = () => {
    setTimer((prevTimer) => {
      const newTimer = prevTimer + 1;
      return newTimer;
    });
  };

  const handleDecrement = () => {
    setTimer((prevTimer) => {
      const newTimer = prevTimer > 1 ? prevTimer - 1 : 1;
      return newTimer;
    });
  };

  useEffect(() => {
    if (timer > 0) {
      const newProgressValue = (timer / initialTime) * 100 > 100 ? 100 : (timer / initialTime) * 100;
      setReductionPerSec(100 / timer);
      setProgressValue(newProgressValue);
      console.log("progressValue", progressValue);
      console.log("reductionPerSec", reductionPerSec);
    } else {
      setIsRunning(false);
      setProgressValue(0);
    }
  }, [timer, initialTime]);

  // Update the timer and progress value every second when running
  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer <= 0) {
      setIsRunning(false); // Stop the timer when it reaches 0
    }

    return () => clearInterval(interval);
  }, [isRunning, timer]);

  return {
    toggleTimer,
    timer,
    progressValue,
    handleIncrement,
    handleDecrement
  };
};

export default useTimer;
