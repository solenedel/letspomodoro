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
            min="5"
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
      </form>
      <button
        type="button"
        id="start-session"
        onClick={() => {
          setSessionON(true);
          startSession();
        }}
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
