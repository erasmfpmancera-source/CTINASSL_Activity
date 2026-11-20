import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <h1>My Website</h1>
        <p>With a <b>flexible</b> layout.</p>
      </header>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>
    </>
  );
}

export default Header;