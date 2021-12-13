/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import TimerOptionsForm from '../TimerOptionsForm';
import { colorVars } from './css-variables';

export const StyledTimerOptionsForm = styled(TimerOptionsForm)`
  font-size: 25px;
  color: ${colorVars.mainText};
  width: 80vw;
  height: fit-content;
  margin: 25px 0 0 0;
  position: center;


  & .form-optn {
    align-self: flex-start;
    margin: 10px 0 10px 0;
  }

  & form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    /* justify-content: flex-start; */
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

  button { 
    background: ${colorVars.yellow};
    border: none;
    border-radius: 5px;
    padding: 7px;
    font-size: 22px;
    margin-top: 20px;
    color: ${colorVars.primaryLight};
  }

   #start-session, #pause-session {
    margin: 60px 40px 0 0;
    font-size: 28px;
    background: #BD64DE;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;

    & i {
      margin-left: 10px;
    }
  }
`;
