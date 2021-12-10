import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  return (
    <main className={className} id="home-page-container">
      <Link to="/solo-study">
        <div className="join-room solo">
          <i className="fas fa-user-alt" />
          <h2>Solo study</h2>
        </div>
      </Link>

      <Link to="/group-study">
        <div className="join-room group">
          <i className="fas fa-users" />
          <h2>Group study</h2>
        </div>
      </Link>
    </main>
  );
};
