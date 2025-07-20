import React from 'react';
import Page from './components/Page';

function App() {
  const user = {
    name: 'Navya',
    location: 'Udupi'
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Props Drilling Example</h1>
      <Page user={user} />
    </div>
  );
}

export default App;
