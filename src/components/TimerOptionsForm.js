/* eslint react/prop-types: 0 */
import React from 'react';

// enforce using arrows to select focus and break period.
// typing is prevented in order for max and min range to apply properly.
window.onload = () => {
  // add event listener to prevent the default behavior
  const noTypingInputField = document.getElementsByClassName('time-input');
  // NOTE: not working without duplicate code for each element of the array:
  noTypingInputField[0].addEventListener('keypress', (e) => {
    e.preventDefault();
  });
  noTypingInputField[1].addEventListener('keypress', (e) => {
    e.preventDefault();
  });
};

// eslint-disable-next-line
const TimerOptionsForm = ({ className, timerSettings, setTimerSettings, startSession, sessionON, setSessionON }) => {
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
      console.log('USER SUBMITTED TIMER SETTINGS: ', timerSettings);
    }
  };

  const handleClearOptnSubmit = (e) => {
    e.preventDefault();

    setTimerSettings({ focusPeriod: 0, breakPeriod: 0, cycles: 0 });
  };

  return (
    <section className={className} id="timer-optn-form">
      <form action="submit">
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="focus-period">Focus period -  </label>
          <input
            type="number"
            min="1"
            max="60"
            id="focus-period"
            name="focus-period"
            className="time-input"
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
            min="1"
            max="60"
            id="break-period"
            name="break-period"
            className="time-input"
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
        <button type="submit" onClick={handleClearOptnSubmit}>
          Clear options
        </button>
      </form>
      <button
        type="button"
        id="start-session"
        onClick={() => {
          setSessionON(!sessionON);
          console.log('sessionON ', sessionON);
          startSession();
        }}
      >
        Start session
        <i className="fas fa-stopwatch" />
      </button>
      <button
        type="button"
        id="pause-session"
        onClick={() => {
          setSessionON(!sessionON);
          console.log('sessionON ', sessionON);
          startSession();
        }}
      >
        {sessionON ? 'Pause session' : 'Resume session'}
        {sessionON ? <i className="far fa-pause-circle" /> : <i className="far fa-play-circle" />}
      </button>
    </section>
  );
};

export default TimerOptionsForm;
