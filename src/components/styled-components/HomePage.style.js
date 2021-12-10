/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HomePage } from '../HomePage';
import { colorVars } from './css-variables';

export const StyledHomePage = styled(HomePage)`
  margin-top: 120px;
  height: 100vh;
  width: 100vw;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;

  .join-room {
    height: 20vh;
    width: fit-content;
    padding: 0 20px 0 20px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    & h2 {
      font-size: 55px;
      text-align: center;
    }

    &.solo {
      border: solid ${colorVars.yellow} 2px;
      color: ${colorVars.yellow};

      &:hover {
        background: rgba(253, 244, 165, 0.25);
      }
    }

    &.group {
      border: solid ${colorVars.purple} 2px;
      color: ${colorVars.purple};

      &:hover {
        background: rgba(251, 167, 255, 0.25);
      }
    }
  }
`;
