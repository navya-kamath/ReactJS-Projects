import React from "react";
import { Link, Outlet } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontSize: "16px",
  display: "block",
  padding: "5px 10px",
  borderRadius: "5px",
};

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <nav
        style={{
          width: "200px",
          background: "#f0f0f0",
          padding: "1rem",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "1.5rem" }}>Dev Dashboard</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/text-input" style={linkStyle}>Text Input</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/addition" style={linkStyle}>Addition App</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/counter" style={linkStyle}>Counter App</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/user/Navya" style={linkStyle}>User: Navya</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/user/Anushri" style={linkStyle}>User: Anushri</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/github-user" style={linkStyle}>GitHub User Finder</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/window-size" style={linkStyle}>Window Size Tracker</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/props-drill" style={linkStyle}>Props Drilling Demo</Link>
          </li>
        </ul>

      </nav>

      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
