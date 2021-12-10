import React from 'react';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  return (
    <main className={className} id="home-page-container">
      <div>This is a cool website</div>
      <img src="./images/website.png" alt="sample icon" />
      <section id="search-section">
        <form onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="enter your location" />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </section>
    </main>
  );
};
