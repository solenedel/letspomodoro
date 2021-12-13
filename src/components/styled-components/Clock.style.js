/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Clock from '../Clock';
import { fontVars } from './css-variables';

export const StyledClock = styled(Clock)`
  padding: 40px;

  .clock {
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      font-size: 40px;
      margin: 0 0 20px 15px;
    }

    & div {
      font-family: ${fontVars.clockFont};

      & p {
        font-size: 50px;
        font-family: ${fontVars.clockFont};
      }
    }
  }
`;
