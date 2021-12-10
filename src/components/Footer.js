import React from 'react';

// eslint-disable-next-line
const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div id="footer-content">
        <p>
          This app was made by <a href="https://www.linkedin.com/in/solene-delumeau/">Solène</a>
        </p>
        {/* eslint-disable-next-line */}
          Icons by <a href="https://www.freepik.com" title="Freepik">Freepik </a>
        {/* eslint-disable-next-line */}
          from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a> 
      </div>
    </footer>
  );
};

export default Footer;
