import React from 'react';

// eslint-disable-next-line
const Clock = ({ className, clockHours, clockMinutes, clockSeconds }) => {
  return (
    <>
      <section className={className} id="timer-container">
        <div className="clock">
          <div className="hours">
            <p>0</p>hours
          </div>
          <span>:</span>
          <div className="minutes">
            <p>0</p>minutes
          </div>
          <span>:</span>
          <div className="minutes">
            <p>0</p>seconds
          </div>
        </div>
      </section>
    </>
  );
};

Clock.defaultProps = {
  clockHours: 10,
  clockMinutes: 10,
  clockSeconds: 10,
};

export default Clock;
