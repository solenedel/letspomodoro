import React from 'react';
import { StyledTimerOptionsForm } from './styled-components/TimerOptionsForm.style';

// eslint-disable-next-line
const SoloStudyPage = ({ className }) => {
  return (
    <div className={className}>
      <h2>Solo study</h2>
      <p>
        Choose your pomodoro timer options, then click on the START TIMER button when you are ready
        to begin.
      </p>
      <h3>
        {' '}
        <i className="fas fa-stopwatch-20" /> Timer options
      </h3>

      <StyledTimerOptionsForm />
    </div>
  );
};

export default SoloStudyPage;
