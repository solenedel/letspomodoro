import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context';

// eslint-disable-next-line
export const PostsPage = ({ className }) => {
  const { userContext } = useAppContext();
  // eslint-disable-next-line
  const [user, setUser] = userContext;
  // eslint-disable-next-line
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // get posts data from server side
    axios
      .get('/posts')
      .then((res) => {
        console.log('res.data: ', res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className={className} id="posts-page-container">
      <img src="./images/app.png" alt="posts icon" />
      <h3>Posts</h3>
      {/* <AllFavCafes removeFavCafe={removeFavCafe} favCafes={favCafes} /> */}
    </main>
  );
};
