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

  & .form-optn {
    /* border: solid red 3px; */
    align-self: flex-start;
    margin: 10px 0 10px 0;
  }

  & form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

    & label {
      margin-right: 5px;
      margin-bottom: 10px;
    }

    & input {
      border: solid 2px ${colorVars.purple};
      background:  ${colorVars.primaryLight};
      color: ${colorVars.purple};
      border-radius: 5px;
      padding: 5px;
      height: 35px;
      width: 80px;
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
`;
