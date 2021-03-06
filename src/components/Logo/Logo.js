import React from 'react';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <div className="shadow-2 br2" style={logoStyle}>
        <p className="pa3"><img src="https://static.thenounproject.com/png/30784-200.png" alt="logo"/></p>
      </div>
    </div>
  );
};

const logoStyle = {
  color: 'white',
  height: '7rem',
  width: '7rem',
  background: 'linear-gradient(to bottom, #4286f4, #373b44)'
};

export default Logo;
