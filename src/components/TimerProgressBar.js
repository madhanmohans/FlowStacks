import * as React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 40,
  width: "200px",    
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#94a3b8",
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#0c4a6e"
  },
}));

export default function TimerProgressBar({ progressValue }) {
  return <BorderLinearProgress variant="determinate" value={progressValue} />;
}
