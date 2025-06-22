import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = (e) => {
    e.preventDefault(); // Prevent page reload
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Add Two Numbers</h2>
      <form onSubmit={handleAddition}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <span style={{ fontSize: '20px', marginRight: '10px' }}>+</span>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Add</button>
      </form>

      {result !== null && (
        <h3 style={{ marginTop: '20px' }}>Result: {result}</h3>
      )}
    </div>
  );
}

export default App;
