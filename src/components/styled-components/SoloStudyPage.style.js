/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import SoloStudyPage from '../SoloStudyPage';
import { colorVars } from './css-variables';

export const StyledSoloStudyPage = styled(SoloStudyPage)`
  margin: 100px 10% 0 10%;
  height: 80vh;
  color: ${colorVars.yellow};

  & h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 25px;
  }

  & p {
    font-size: 22px;
    letter-spacing: 1.2px;
    line-height: 35px;
  }

  & h3 {
    font-size: 27px;
    margin-top: 80px;
    color: ${colorVars.mainText};

    & i {
      margin-right: 10px;
    }
  }
`;
