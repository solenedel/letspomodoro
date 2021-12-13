/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Clock from '../Clock';

export const StyledClock = styled(Clock)`
  border: solid blue 2px;
  padding: 40px;

  .clock {
    display: flex;

    & div {
      margin-left: 20px;

      & p {
        font-size: 50px;
      }
    }
  }
`;
