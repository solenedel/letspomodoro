/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { colorVars, fontVars } from './css-variables';

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
  body {
    background-color: ${colorVars.primaryLight};
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    height: 100%; 
    min-height: 100%;

    div#logo {
      font-size: 55px;
      font-family: ${fontVars.titleFont}; 
      margin-left: 20px;
    }

    li, p, div {
      font-family: ${fontVars.titleFont};
    }

    li {
      list-style-type: none;
    }
  }
`;
