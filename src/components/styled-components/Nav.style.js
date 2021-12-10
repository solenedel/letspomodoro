/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Nav from '../Nav';
import { colorVars } from './css-variables';

export const StyledNav = styled(Nav)`
  background-color: ${colorVars.primaryLight};
  height: 90px;

  & img {
    height: 70px;
    opacity: 0.9;
    margin-left: 30px;
  }

  & #nav-flexbox {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
  }

  #logo-link {
    color: ${colorVars.primaryDark};
    text-decoration: none;
    display: flex;
    align-items: baseline;
  }

  & ul {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;

    & li,
    a {
      margin-right: 30px;
      font-size: 28px;
      transition: color 0.4s;
      text-decoration: none;
      color: ${colorVars.primaryDark};

      &:visited {
        color: ${colorVars.primaryDark};
      }

      &:hover {
        color: ${colorVars.linkHover};
        transition: color 0.4s;
      }
    }
  }
`;
