/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { PostsPage } from '../PostsPage';
import { colorVars } from './css-variables';

export const StyledPostsPage = styled(PostsPage)`
  color: ${colorVars.primaryDark};
  margin-top: 35px;
  min-height: 100vh;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    font-size: 30px;
    margin-bottom: 0;
  }
  & h4 {
    margin-top: 10px;
    font-size: 25px;
    margin-left: 13px;
  }

  & p {
    font-size: 23px;
  }

  & img {
    width: 100px;
    margin-bottom: 20px;
  }
`;
