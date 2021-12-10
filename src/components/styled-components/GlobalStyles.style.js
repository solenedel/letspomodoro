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
    color: ${colorVars.mainText};

    div#logo {
      font-size: 55px;
      font-weight: 700;
      font-family: ${fontVars.titleFont}; 
      margin-left: 20px;
    }

    li, p, div {
      font-family: ${fontVars.mainFont};
    }

    li {
      list-style-type: none;
    }
  }

  a, a:hover, a:active, a:visited {
    text-decoration: none;
  }
`;
