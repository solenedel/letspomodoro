/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import TimerOptionsForm from '../TimerOptionsForm';
import { colorVars } from './css-variables';

export const StyledTimerOptionsForm = styled(TimerOptionsForm)`
  font-size: 25px;
  color: ${colorVars.mainText};
  width: 80vw;
  height: 20vh;
  margin-top: 25px;
  position: center;

  & form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

    & label {
      margin-right: 5px;
      margin-bottom: 10px;
    }

    & input {
      border: none;
      border-radius: 5px;
      padding: 5px;
      height: 40px;
      width: 80px;
      /* margin-right: 50px; */
      margin-bottom: 10px;
      font-size: 25px;
    }
  }
`;
