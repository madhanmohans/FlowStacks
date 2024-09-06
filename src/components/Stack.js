import React from "react";
import TimerProgressBar from "./TimerProgressBar";
import TimerButton from "./TimerButton";
import useTimer from "../hooks/useTimer";

const Stack = ({ name, timeInMinutes }) => {
  const { toggleTimer, timer } = useTimer(timeInMinutes);

  return (
    <div>
      <div className="Timer-progress-bar">
        <TimerProgressBar value={timeInMinutes} />
      </div>
      <div className="Timer-button">
        <TimerButton name={name} toggleTimer={toggleTimer} timer={timer} />
      </div>
    </div>
  );
};
export default Stack;
