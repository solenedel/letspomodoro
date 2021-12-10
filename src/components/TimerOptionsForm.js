import React from 'react';

// eslint-disable-next-line
const TimerOptionsForm = ({ className }) => {
  return (
    <section className={className} id="timer-optn-form">
      <form action="submit">
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="focus-period">Focus period: </label>
          <input type="number" id="focus-period" name="focus-period" />
          mins
        </div>
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="break-period">Break period (minutes): </label>
          <input type="number" id="break-period" name="break-period" /> mins
        </div>
        <div className="form-optn">
          {/* eslint-disable-next-line */}
        <label htmlFor="cycles">Number of cycles: </label>
          <input type="number" id="cycles" name="cycles" /> mins
        </div>
      </form>
    </section>
  );
};

export default TimerOptionsForm;
