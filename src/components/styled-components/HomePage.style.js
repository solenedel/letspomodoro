/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HomePage } from '../HomePage';
import { colorVars } from './css-variables';

export const StyledHomePage = styled(HomePage)`
  margin-top: 90px;
  height: 100vh;
  width: 100vw;
  justify-content: space-around;
  display: flex;


  .join-room {
    height: 20vh;
    width: 30vw;
    border: solid ${colorVars.primaryDark}; 3px;
    color: ${colorVars.primaryDark};

    & h2 {
      font-size: 60px;
    }
  }
`;
