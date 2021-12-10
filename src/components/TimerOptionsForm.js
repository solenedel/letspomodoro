import React from 'react';

// eslint-disable-next-line
const TimerOptionsForm = ({ className }) => {
  return (
    <section className={className} id="timer-optn-form">
      <form action="submit">
        {/* eslint-disable-next-line */}
        <label htmlFor="focus-period">Focus period (minutes): </label>
        <input type="number" id="focus-period" name="focus-period" />
        {/* eslint-disable-next-line */}
        <label htmlFor="break-period">Break period (minutes): </label>
        <input type="number" id="break-period" name="break-period" />
        {/* eslint-disable-next-line */}
        <label htmlFor="cycles">Number of cycles: </label>
        <input type="number" id="cycles" name="cycles" />
      </form>
    </section>
  );
};

export default TimerOptionsForm;
