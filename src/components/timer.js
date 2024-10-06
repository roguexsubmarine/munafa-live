import { useState, useEffect } from 'react';

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    // Set the target date to 3:30 PM on October 6th
    const targetDate = new Date('2024-10-06T16:00:00');

    const updateTimer = () => {
      const currentDate = new Date();
      const difference = targetDate - currentDate; // Time difference in milliseconds

      if (difference > 0) {
        // Convert milliseconds into HH:MM:SS format
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        setRemainingTime(timeString);  // Update the state with the formatted string
      } else {
        setRemainingTime('00:00:00'); // If the countdown has finished
      }
    };

    // Initial call to set the timer
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return remainingTime // Render the remaining time
};

export default Timer;
