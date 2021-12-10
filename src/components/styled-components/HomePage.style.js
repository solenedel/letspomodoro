/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HomePage } from '../HomePage';
import { colorVars, fontVars, mainButtonStyles, inputFieldStyles } from './css-variables';

// styles for HomePage component
// includes the google map, search form, etc

export const StyledHomePage = styled(HomePage)`
  margin-top: 35px;
  height: 100vh;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 100px;
  }

  & h3 {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 70%;
    left: 13%;
    z-index: 10;
    font-size: 25px;
    color: ${colorVars.primaryDark};
  }

  & div {
    font-size: 25px;
    margin-bottom: 30px;
    color: ${colorVars.primaryDark};
  }

  & #search-section {
    font-family: ${fontVars.mainFont};
    margin: 50px 0 20px 0;

    & input {
      @include ${inputFieldStyles};
      height: 30px;

      &:hover {
        background-color: ${colorVars.mediumPink};
        transition: background-color 0.4s;
      }

      &::placeholder {
        color: ${colorVars.primaryDark};
        opacity: 0.6;
        padding-left: 5px;
      }
    }

    & button {
      margin-left: 20px;
      @include ${mainButtonStyles};

      &:hover {
        color: ${colorVars.linkHover};
        transition: color 0.4s;
      }
    }
  }
`;
