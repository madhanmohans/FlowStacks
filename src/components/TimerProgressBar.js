import * as React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 40,
    borderRadius: 5,
    width: "200px",
    alignItems: 'center',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.white,
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
  }));

  export default function TimerProgressBar({value}) {
    return (
        <BorderLinearProgress variant="determinate" value={value} />
    );
}
