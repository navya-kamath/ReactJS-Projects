import React, { useState } from 'react';
import axios from 'axios';

const GitHubUser = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // 🔐 Optional GitHub personal access token
  const token = ''; // ← paste your token here if needed

  const fetchUser = async () => {
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: token ? { Authorization: `token ${token}` } : {},
      });
      setUserData(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError('User not found');
      } else {
        setError('Something went wrong. Try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow p-4">
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchUser()}
        />
        <button
          className="btn btn-primary"
          onClick={fetchUser}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="text-danger mt-3">{error}</p>}

      {userData && (
        <div className="mt-4 d-flex align-items-center">
          <img
            src={userData.avatar_url}
            alt="avatar"
            width="100"
            className="me-3 rounded"
          />
          <div>
            <h4>{userData.name || userData.login}</h4>
            <p>{userData.bio}</p>
            <p><strong>Location:</strong> {userData.location || 'N/A'}</p>
            <p><strong>Public Repos:</strong> {userData.public_repos}</p>
            <p><strong>Followers:</strong> {userData.followers}</p>
            <p><strong>Following:</strong> {userData.following}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark mt-2"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubUser;
