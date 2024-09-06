import { Button } from "@mui/material";
import { useState } from "react";

function TimerButton({ name, toggleTimer, timer}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Button
      variant="contained"
      color="white"
      className="Button"
      onClick={toggleTimer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? formatTime(timer) : name}
    </Button>
  );
}

export default TimerButton;
