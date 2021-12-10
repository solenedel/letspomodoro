/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import TimerOptionsForm from '../TimerOptionsForm';

export const StyledTimerOptionsForm = styled(TimerOptionsForm)`
  font-size: 22px;
  border: solid blue 3px;

  form {
    display: flex;
    flex-direction: column;

    & input {
      width: 50px;
      height: auto;
    }
  }
`;
