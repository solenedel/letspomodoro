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



  const startTimer = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const countdownHours = timerSettings.focusPeriod / 60; // user specifies time in minutes
    const countdownMinutes = timerSettings.focusPeriod;

    const countDownDate = new Date(currentYear, currentMonth, currentDate);
  };

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
