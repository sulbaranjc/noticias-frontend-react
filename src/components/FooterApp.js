// FooterApp.jsx
import React from 'react';
import "./FooterApp.css"

const FooterApp = () => {
  return (
  <footer className="footer ftcolor">
  <div className="content">
    <div className="top">
      <div className="logo-details">
        <i className="fab fa-slack"></i>
        <span className="logo_name">JC Software</span>
      </div>
      <div class="media-icons">
        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
  <div className="bottom-details">
    <div className="bottom_text">
      <span className="copyright_text">Copyright © 2024 <a href="/copy">JC Software </a>All rights reserved</span>
      <span className="policy_terms">
        <a href="/privacy">Privacy policy</a>
        <a href="/term">Terms & condition</a>
      </span>
    </div>
  </div>
    </footer>
  );
}

export default FooterApp;
