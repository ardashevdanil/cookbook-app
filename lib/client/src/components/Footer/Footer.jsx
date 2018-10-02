import React from 'react';
import './Footer.css';

import NavBar from '../../containers/NavBar/NavBar';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__logo" />
      <NavBar />
      <div className="Footer__copyright">
              &copy; 2016-2017 LEMON ALL RIGHT RESERVED
      </div>
    </div>
  );
}

export default Footer;
