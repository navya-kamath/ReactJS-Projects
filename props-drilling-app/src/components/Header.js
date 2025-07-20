import React from 'react';
import GreetingMessage from './GreetingMessage';

const Header = ({ user }) => {
  return (
    <header>
      <GreetingMessage user={user} />
    </header>
  );
};

export default Header;
