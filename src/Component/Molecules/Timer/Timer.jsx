import React, { useState, useEffect } from 'react';
import './Timer.scss'

// Utility to calculate time difference
const getTimeLeft = (targetDate) => {
  const now = new Date();
  const total = targetDate - now;

  if (total <= 0) {
    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalDays = Math.floor(total / (1000 * 60 * 60 * 24));
  const months = Math.floor(totalDays / 30); // Approximate
  const days = totalDays % 30;

  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { months, days, hours, minutes, seconds };
};

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className='timer-wrapper'>
      <h2>Mahalaya waiting time</h2>
      <div className='countdown'>
        <span>{timeLeft.months} months</span> 
        <span>{timeLeft.days} days</span> 
        <span>{timeLeft.hours} hours{" "}</span>
        <span>{timeLeft.minutes} minutes</span>
        <span>{timeLeft.seconds} seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
