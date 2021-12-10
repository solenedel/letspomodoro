/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HomePage } from '../HomePage';
import { colorVars } from './css-variables';

export const StyledHomePage = styled(HomePage)`
  margin: 120px 40px 0 40px;
  height: 100vh;
  width: 100vw;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;

  .join-room {
    height: auto;
    width: fit-content;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.7;

    & i {
      font-size: 70px;
    }

    &:hover {
      opacity: 1;
    }

    & h2 {
      font-size: 55px;
      text-align: center;
      font-weight: 200;
    }

    &.solo {
      border: solid ${colorVars.yellow} 3px;
      color: ${colorVars.yellow};

      &:hover {
        background: rgba(253, 244, 165, 0.25);
      }
    }

    &.group {
      border: solid ${colorVars.purple} 3px;
      color: ${colorVars.purple};

      &:hover {
        background: rgba(251, 167, 255, 0.25);
      }
    }
  }
`;
