import React from 'react';
import logo from './logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" height="40" />
          Decentralized Marketing
        </a>
        <div className="ml-auto">Web3</div>
      </div>
    </nav>
  );
}

export default Navbar;
