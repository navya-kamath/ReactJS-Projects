import React, { useState, useEffect, useMemo } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import useWindowHeight from "../hooks/useWindowHeight";

const HooksDemoPage = () => {
  const [count, setCount] = useState(0);

  const width = useWindowWidth();
  const height = useWindowHeight();

  // useEffect demo: run on count change
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  // useMemo demo: expensive computation
  const expensiveCalc = useMemo(() => {
    console.log("Calculating...");
    return count * 100;
  }, [count]);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Counter</h2>

      {/* useState + useMemo */}
      <div className="mb-4">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
        <span className="mb-4"></span>
        <button className="btn btn-primary" onClick={() => setCount(count - 1)} style={{ marginLeft: '1rem' }}>
          Decrement Count
        </button>
        <button className="btn btn-secondary" onClick={handleReset} style={{ marginLeft: '1rem' }}>
          Reset
        </button>
        <div className="mt-3">
          <p>Count: <strong>{count}</strong></p>
          <p>Expensive Value (count * 100): <strong>{expensiveCalc}</strong></p>
        </div>
      </div>

      {/* Custom Hook */}
      <div className="alert alert-info">
        <strong>Screen width:</strong> {width}px
      </div>
      <div className="alert alert-info">
        <strong>Screen height:</strong> {height}px
      </div>
    </div>
  );
};

export default HooksDemoPage;
