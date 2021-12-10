/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import LoginPage from '../LoginPage';
import { colorVars, mainButtonStyles, inputFieldStyles } from './css-variables';

export const StyledLoginPage = styled(LoginPage)`
  color: ${colorVars.primaryDark};
  font-size: 30px;

  & p {
    font-weight: 700;
  }

  & img {
    width: 100px;
    padding-bottom: 20px;
    margin-top: 50px;
  }

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

  &#login-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div#no-account {
    font-size: 20px;
    margin-bottom: 29px;
    margin-top: 20px;
  }

  & button {
    align-self: center;
    margin-bottom: 30px;
    @include ${mainButtonStyles};

    &:hover {
      color: ${colorVars.linkHover};
      transition: color 0.4s;
    }
  }
`;
