import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import useWindowHeight from "../hooks/useWindowHeight";

const WindowSizePage = () => {
  const width = useWindowWidth();
  const height = useWindowHeight();

  return (
    <div className="card p-4 shadow">
      <h2 className="mb-4">Custom Hook Demo</h2>
      <div className="alert alert-info">
        <strong>Screen width:</strong> {width}px
      </div>
      <div className="alert alert-info">
        <strong>Screen height:</strong> {height}px
      </div>
    </div>
  );
};

export default WindowSizePage;
