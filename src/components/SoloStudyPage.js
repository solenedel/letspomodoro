/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { StyledTimerOptionsForm } from './styled-components/TimerOptionsForm.style';
import { StyledClock } from './styled-components/Clock.style';

// eslint-disable-next-line
const SoloStudyPage = ({ className }) => {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  // const [sessionON, setSessionON] = useState(false);
  const [timerSettings, setTimerSettings] = useState({
    focusPeriod: '',
    breakPeriod: '',
    cycles: '',
  });


  // prepend 0 if values are less than 10
  const timerMinutes = (minutes < 10 ? `0${minutes}` : minutes);
  const timerSeconds = (seconds < 10 ? `0${seconds}` : seconds);

  useEffect(() => {
    console.log('TEST');
  }, [timerMinutes, timerSeconds, minutes, seconds]);


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

      <StyledTimerOptionsForm timerSettings={timerSettings} setTimerSettings={setTimerSettings} /* startSession={startSession} sessionON={sessionON} setSessionON={setSessionON}*/ />
      <StyledClock timerMinutes={timerMinutes} timerSeconds={timerSeconds} displayMessage={displayMessage}
      />
    </div>
  );
};

export default SoloStudyPage;
