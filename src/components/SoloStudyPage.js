/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { StyledTimerOptionsForm } from './styled-components/TimerOptionsForm.style';
import { StyledClock } from './styled-components/Clock.style';

// eslint-disable-next-line
const SoloStudyPage = ({ className }) => {

  const [timerSettings, setTimerSettings] = useState({
    focusPeriod: '',
    breakPeriod: '',
    cycles: '',
  });

  

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
      />
    </div>
  );
};

export default SoloStudyPage;
