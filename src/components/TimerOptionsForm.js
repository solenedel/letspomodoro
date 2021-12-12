import React, { useState } from 'react';
import { startSession } from '../helpers/timerFunctions';

// eslint-disable-next-line
const TimerOptionsForm = ({ className }) => {
  const [timerSettings, setTimerSettings] = useState({
    focusPeriod: '',
    breakPeriod: '',
    cycles: '',
  });

  const handleInputChangeFocus = (e) => {
    console.log('FOCUS PERIOD: ', e.target.value);
    setTimerSettings({ ...timerSettings, focusPeriod: e.target.value });
  };

  const handleInputChangeBreak = (e) => {
    console.log('BREAK PERIOD: ', e.target.value);
    setTimerSettings({ ...timerSettings, breakPeriod: e.target.value });
  };

  const handleInputChangeCycles = (e) => {
    console.log('CYCLES: ', e.target.value);
    setTimerSettings({ ...timerSettings, cycles: e.target.value });
    console.log('TIMER SETTINGS: ', timerSettings);
  };

  const handleTimerOptnSubmit = (e) => {
    e.preventDefault();

    if (timerSettings.focusPeriod && timerSettings.breakPeriod && timerSettings.cycles) {
      console.log('TIMER SETTINGS: ', timerSettings);
    }
  };

  return (
    <section className={className} id="timer-optn-form">
      <form action="submit">
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="focus-period">Focus period -  </label>
          <input
            type="number"
            min="10"
            max="120"
            // defaultValue="50"
            id="focus-period"
            name="focus-period"
            value={timerSettings.focusPeriod}
            onChange={handleInputChangeFocus}
          />{' '}
          minutes
        </div>
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="break-period">Break period - </label>
          <input
            type="number"
            min="5"
            max="60"
            // defaultValue="10"
            id="break-period"
            name="break-period"
            value={timerSettings.breakPeriod}
            onChange={handleInputChangeBreak}
          />{' '}
          minutes
        </div>
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="cycles">Number of cycles - </label>
          <input
            type="number"
            min="1"
            max="20"
            // defaultValue="3"
            id="cycles"
            name="cycles"
            value={timerSettings.cycles}
            onChange={handleInputChangeCycles}
          />{' '}
          (one cycle = 1 focus period + 1 break period)
        </div>
        <button type="submit" onClick={handleTimerOptnSubmit}>
          Confirm
        </button>
      </form>
      <button type="button" id="start-session" onClick={() => startSession(5, 3, 2)}>
        Start my session
        <i className="fas fa-stopwatch" />
      </button>
    </section>
  );
};

export default TimerOptionsForm;
