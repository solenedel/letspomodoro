import React from 'react';
import { StyledTimerOptionsForm } from './styled-components/TimerOptionsForm.style';

// eslint-disable-next-line
const SoloStudyPage = ({ className }) => {
  return (
    <div className={className}>
      <h2>Solo study</h2>
      <p>
        Choose your pomodoro timer options, then click on the START TIMER button when you are ready
        to begin. In solo study mode, you cannot share the same timer with other users.
      </p>
      <h3>
        {' '}
        <i className="fas fa-stopwatch-20" /> Choose your timer settings
      </h3>

      <StyledTimerOptionsForm />
      <button type="button" id="start-session">
        Start pomodoro session
      </button>
    </div>
  );
};

export default SoloStudyPage;
