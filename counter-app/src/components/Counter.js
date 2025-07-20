import React, { useState, useEffect, useMemo } from 'react';
import useWindowWidth from '../hooks/useWindowWidth';

const Counter = () => {
  const [count, setCount] = useState(0);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  const expensiveSquare = useMemo(() => {
    console.log('Calculating square...');
    return count * count;
  }, [count]);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button onClick={() => setCount(prev => prev - 1)} style={{ marginLeft: '1rem' }}>Decrease</button>
      <button onClick={handleReset} style={{ marginLeft: '1rem' }}>Reset</button>
      <p>Square of current count: {expensiveSquare}</p>
      <p>Window Width: {windowWidth}px</p>
    </div>
  );
};

export default Counter;