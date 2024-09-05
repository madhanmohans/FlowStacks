import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

function TimerButton({ name }) {
    const [timer, setTimer] = useState(10 * 60); // 10 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const startTimer = () => {
        setIsRunning(true);
    };

    const toggleTimer = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
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
            setTimer(10 * 60); // Reset timer to 10 minutes
        }
    }, [timer]);

    return (
        <Button
            variant="contained"
            color="primary"
            className="Button"
            onClick={toggleTimer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ width: '200px' }}
        >
            {isHovered ? formatTime(timer) : name}
        </Button>
    );
}

export default TimerButton;
