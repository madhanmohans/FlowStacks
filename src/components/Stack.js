import { Button } from "@mui/material";
import React from "react";
import useTimer from "../hooks/useTimer";
import TimerButton from "./TimerButton";
import TimerProgressBar from "./TimerProgressBar";

const Stack = ({ name, timeInMinutes }) => {
  const { toggleTimer, timer, progressValue, handleIncrement, handleDecrement } = useTimer(timeInMinutes);
  
  return (
    <div className="Stack">
      {timer > 0 ? (
        <Button className="inc-dec-buttons" color="error" onClick={handleDecrement}>
          -
        </Button>
      ) : (
        <Button className="inc-dec-buttons" disabled>
          -
        </Button>
      )}
      <div className="Timer-progress-bar">
        <TimerProgressBar
          toggleTimer={toggleTimer}
          progressValue={progressValue}
        />
      </div>
      <div className="Timer-button">
        <TimerButton name={name} toggleTimer={toggleTimer} timer={timer} />
      </div>
      <Button disableElevation color="success" className="inc-dec-buttons" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};
export default Stack;
