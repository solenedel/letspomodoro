/* eslint react/prop-types: 0 */
import React from 'react';
import { startSession } from '../helpers/timerFunctions';

// eslint-disable-next-line
const TimerOptionsForm = ({ className, timerSettings, setTimerSettings  }) => {
  const handleInputChangeFocus = (e) => {
    setTimerSettings((prev) => ({ ...prev, focusPeriod: Number(e.target.value) }));
  };

  const handleInputChangeBreak = (e) => {
    setTimerSettings((prev) => ({ ...prev, breakPeriod: Number(e.target.value) }));
  };

  const handleInputChangeCycles = (e) => {
    setTimerSettings((prev) => ({ ...prev, cycles: Number(e.target.value) }));
  };

  const handleTimerOptnSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line
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
      <button
        type="button"
        id="start-session"
        onClick={() =>
          startSession(timerSettings.focusPeriod, timerSettings.breakPeriod, timerSettings.cycles)
        }
      >
        Start session
        <i className="fas fa-stopwatch" />
      </button>
      {/* note: onClick -> change text to resume session */}
      <button type="button" id="pause-session">
        Pause session
        <i className="far fa-pause-circle" />
      </button>
    </section>
  );
};

export default TimerOptionsForm;
