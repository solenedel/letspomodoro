import React from 'react';

// eslint-disable-next-line
const TimerOptionsForm = ({ className }) => {
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
            defaultValue="50"
            id="focus-period"
            name="focus-period"
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
            defaultValue="10"
            id="break-period"
            name="break-period"
          />{' '}
          minutes
        </div>
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="cycles">Number of cycles - </label>
          <input type="number" min="1" max="20" defaultValue="3" id="cycles" name="cycles" /> (one
          cycle = 1 focus period + 1 break period)
        </div>
        <button type="submit">Confirm</button>
      </form>
    </section>
  );
};

export default TimerOptionsForm;
