import React from "react";
import TimerProgressBar from "./TimerProgressBar";
import TimerButton from "./TimerButton";
import useTimer from "../hooks/useTimer";

const Stack = ({ name, timeInMinutes }) => {
  const { toggleTimer, timer, progressValue } = useTimer(timeInMinutes);

  return (
    <div className="Stack">
      <div className="Timer-progress-bar">
        <TimerProgressBar toggleTimer={toggleTimer} progressValue={progressValue} />
      </div>
      <div className="Timer-button">
        <TimerButton name={name} toggleTimer={toggleTimer} timer={timer} />
      </div>
    </div>
  );
};
export default Stack;
