/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { StyledTimerOptionsForm } from './styled-components/TimerOptionsForm.style';
import { StyledClock } from './styled-components/Clock.style';

// eslint-disable-next-line
const SoloStudyPage = ({ className }) => {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [sessionON, setSessionON] = useState(false);
  const [timerSettings, setTimerSettings] = useState({
    focusPeriod: '',
    breakPeriod: '',
    cycles: '',
  });

  const startSession = () => {

    let interval = setInterval(() => {
      // NOTE: see what happens without clearing interval (bad practice)
      clearInterval(interval);

     //BUG: runs from focusPeriod:59 to focusPeriod:00 then loops back.
     setMinutes(timerSettings.focusPeriod);

     

      // if (seconds === 0) {
      //   if (minutes !== 0) {
      //     setSeconds(59);
      //     setMinutes(minutes - 1);
      //   } else {
      //     // reached the end of the timer
      //     let minutes = displayMessage ? timerSettings.focusPeriod : timerSettings.breakPeriod;
      //     let seconds = 59;

      //     setSeconds(seconds);
      //     setMinutes(minutes);
      //     setSessionON(false);
      //     setDisplayMessage(!displayMessage);
      //   }
      // } else {
      //   setSeconds(seconds - 1);
      // }

    }, 1000);
  };

// BUG: reloading page keeps current time but does not restart session
  useEffect(() => {
    setMinutes(JSON.parse(window.localStorage.getItem('minutes')));
    setSeconds(JSON.parse(window.localStorage.getItem('seconds')));
  }, []);

  useEffect(() => {
    if (sessionON) startSession();
    window.localStorage.setItem('minutes', minutes);
    window.localStorage.setItem('seconds', seconds);
  }, [seconds]);


  // prepend 0 if values are less than 10
  const timerMinutes = (minutes < 10 ? `0${minutes}` : minutes);
  const timerSeconds = (seconds < 10 ? `0${seconds}` : seconds);

  

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

      <StyledTimerOptionsForm timerSettings={timerSettings} setTimerSettings={setTimerSettings} startSession={startSession} sessionON={sessionON} setSessionON={setSessionON} />
      <StyledClock timerMinutes={timerMinutes} timerSeconds={timerSeconds} displayMessage={displayMessage}
      />
    </div>
  );
};

export default SoloStudyPage;
