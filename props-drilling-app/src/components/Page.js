import React from 'react';
import Header from './Header';

const Page = ({ user }) => {
  return (
    <div>
      <Header user={user} />
    </div>
  );
};

export default Page;
