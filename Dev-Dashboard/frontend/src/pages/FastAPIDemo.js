import React, { useState } from 'react';
import axios from 'axios';

const FastAPIDemo = () => {
  const [greeting, setGreeting] = useState('');
  const [sum, setSum] = useState(null);

  const fetchGreeting = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/greet');
      setGreeting(response.data.message);
    } catch (error) {
      setGreeting("Failed to fetch greeting");
    }
  };

  const calculateSum = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/add', {
        params: { x: 10, y: 20 }
      });
      setSum(response.data.result);
    } catch (error) {
      setSum("Error");
    }
  };

  return (
    <div className="card p-4 shadow">
      <h2>FastAPI Integration Demo</h2>
      <button className="btn btn-primary mb-2" onClick={fetchGreeting}>
        Fetch Greeting
      </button>
      <p>{greeting}</p>

      <button className="btn btn-secondary mb-2" onClick={calculateSum}>
        Add 10 + 20
      </button>
      <p>Result: {sum}</p>
    </div>
  );
};

export default FastAPIDemo;
