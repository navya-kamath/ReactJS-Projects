import React, { useState } from "react";

const GrandchildComponent = ({ message }) => {
  return (
    <div style={{ paddingLeft: "2rem" }}>
      <p><strong>Grandchild says:</strong> {message}</p>
    </div>
  );
};

const ChildComponent = ({ message }) => {
  return (
    <div style={{ paddingLeft: "1rem" }}>
      <p>Child is passing message to grandchild...</p>
      <GrandchildComponent message={message} />
    </div>
  );
};

const ParentComponent = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>Props Drilling Demo</h2>
      <div className="mb-3">
        <label htmlFor="msgInput" className="form-label">Enter a message:</label>
        <input
          id="msgInput"
          className="form-control"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type something..."
        />
      </div>
      <ChildComponent message={message} />
    </div>
  );
};

const PropsDrillPage = () => {
  return (
    <div className="card p-4 shadow">
      <ParentComponent />
    </div>
  );
};

export default PropsDrillPage;
