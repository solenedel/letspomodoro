import React from 'react';

// eslint-disable-next-line
const Clock = ({ className, timerMinutes, timerSeconds, displayMessage }) => {
  return (
    <>
      <section className={className} id="timer-container">
        <div className="clock">
          <div className="message">{displayMessage && <div>Break time!</div>}</div>
          <div className="timer">
            {timerMinutes} : {timerSeconds}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clock;
