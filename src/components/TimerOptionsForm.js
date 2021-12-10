import React from 'react';

// eslint-disable-next-line
const TimerOptionsForm = ({ className }) => {
  return (
    <section className={className} id="timer-optn-form">
      <form action="submit">
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="focus-period">Focus period -  </label>
          <input type="number" id="focus-period" name="focus-period" /> minutes
        </div>
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="break-period">Break period - </label>
          <input type="number" id="break-period" name="break-period" /> minutes
        </div>
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="cycles">Number of cycles - </label>
          <input type="number" id="cycles" name="cycles" /> (one cycle = 1 focus period + 1 break
          period)
        </div>
        <button type="submit">Use these settings</button>
      </form>
    </section>
  );
};

export default TimerOptionsForm;
