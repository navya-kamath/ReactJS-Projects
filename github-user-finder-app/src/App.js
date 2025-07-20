import React from 'react';
import GitHubUser from './components/GitHubUser';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">🔍 GitHub User Finder</h1>
      <GitHubUser />
    </div>
  );
}

export default App;
