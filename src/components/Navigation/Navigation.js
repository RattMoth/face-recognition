import React from 'react';

const Navigation = ( {onRouteChange, route }) => {
  if (route === 'home') {
    return (
      <nav style={navStyle}>
        <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
      </nav>
    );
  } else {
    return (
    <nav style={navStyle}>
      <p></p>
    </nav>)
  }
};

// If needed later, change if route === 'home' to variable isSignedIn
// isSignedIn will be boolean and stored in state

const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end'
};

export default Navigation;
