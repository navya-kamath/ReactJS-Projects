import React, { useState } from "react";

const TextInputPage = () => {
  const [text, setText] = useState("");

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Text Input Mirror</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Type here..."
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <p className="mt-3">You typed: <strong>{text}</strong></p>
    </div>
  );
};

export default TextInputPage;
