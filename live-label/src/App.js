import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', width: '300px' }}
      />
      <h2 style={{ marginTop: '20px' }}>You typed: {text}</h2>
    </div>
  );
}

export default App;
