import React from 'react';

const GreetingMessage = ({ user }) => {
  return (
    <div>
      <h2>Hello, {user.name}!</h2>
      <p>You're visiting from {user.location}.</p>
    </div>
  );
};

export default GreetingMessage;
