import React, { useState } from "react";
import axios from "axios";

const AdditionPage = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAddition = async () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError("Please enter valid numbers");
      setResult(null);
      return;
    }

    try {
      setError("");
      const response = await axios.get(
        `http://127.0.0.1:8000/api/add?x=${a}&y=${b}`
      );
      setResult(response.data.result);
    } catch (err) {
      setError("Failed to fetch result from backend.");
    }
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Addition (via FastAPI)</h2>

      <div className="row g-3 align-items-center mb-3">
        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="Number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="Number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={handleAddition}>
            Add
          </button>
          <button className="btn btn-secondary" onClick={handleReset} style={{ marginLeft: '1rem' }}>
            Reset
          </button>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result !== null && !error && (
        <div className="alert alert-info">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default AdditionPage;
