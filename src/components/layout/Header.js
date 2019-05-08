import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };
  return (
    <div className="header">
      <h1 style={{ marginTop: '0' }}>TODO app</h1>
      <Link style={linkStyle} to="/">
        HOME
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/about">
        ABOUT
      </Link>
    </div>
  );
};

export default Header;
