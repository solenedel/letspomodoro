/* eslint-disable */
import React, { useState } from 'react';
import { StyledTimerOptionsForm } from './styled-components/TimerOptionsForm.style';
import { StyledClock } from './styled-components/Clock.style';

// eslint-disable-next-line
const SoloStudyPage = ({ className }) => {
  // eslint-disable-next-line
  const [clockHours, setClockHours] = useState();
  // eslint-disable-next-line
  const [clockMinutes, setClockMinutes] = useState();
  // eslint-disable-next-line
  const [clockSeconds, setClockSeconds] = useState();

  const [timerSettings, setTimerSettings] = useState({
    focusPeriod: '',
    breakPeriod: '',
    cycles: '',
  });

// helper function: convert minutes entered by user into hours and minutes
  const timeConverter = () => {
     let countDownHours;
     let countDownMinutes;

     if ((timerSettings.focusPeriod / 60) < 1) {
       countDownHours = 0;
       countDownMinutes = timerSettings.focusPeriod;
     } else {
       countDownHours = Number((timerSettings.focusPeriod / 60).toString().split('.')[0]);
       countDownMinutes = timerSettings.focusPeriod - (60 * countDownHours);
     }
     
      //  console.log('countDownHours: ', countDownHours );
      // console.log('countDownMinutes: ', countDownMinutes );

      return [countDownHours, countDownMinutes];
  }
   
  let interval;

  const startTimer = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const hoursToCount = (timeConverter())[0];
    const minutesToCount = (timeConverter())[1];

    const countDownDate = new Date(currentYear, currentMonth, currentDate, hoursToCount, minutesToCount);
    console.log('countDownDate', countDownDate);

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / (1000));

      if (distance < 0) {
        // stop the timer
        clearInterval(interval.current);
      } else {
        // update timer values
        setClockHours(hours);
        setClockMinutes(minutes);
        setClockSeconds(seconds );
      }
    })


  };

  startTimer();

  return (
    <div className={className}>
      <h2>Solo study</h2>
      <p>
        Choose your pomodoro timer settings, then click on START MY SESSION when you are ready to
        begin. In solo study mode, you cannot share the same timer with other users.
      </p>
      <h3>
        {' '}
        <i className="fas fa-stopwatch-20" /> Choose your timer settings
      </h3>

      <StyledTimerOptionsForm timerSettings={timerSettings} setTimerSettings={setTimerSettings} />
      <StyledClock
        clockHours={clockHours}
        clockMinutes={clockMinutes}
        clockSeconds={clockSeconds}
      />
    </div>
  );
};

export default SoloStudyPage;
