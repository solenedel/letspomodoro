import React from 'react';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  return (
    <main className={className} id="home-page-container">
      <div className="join-room solo">
        <h2>Solo study</h2>
      </div>
      <div className="join-room group">
        <h2>Group study</h2>
      </div>
    </main>
  );
};
