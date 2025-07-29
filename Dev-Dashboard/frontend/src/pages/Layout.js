import React from "react";
import { Link, Outlet } from "react-router-dom";

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
        <h3>Dev Dashboard</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/text-input">Text Input</Link></li>
          <li><Link to="/addition">Addition App</Link></li>
          <li><Link to="/counter">Counter App</Link></li>
          <li><Link to="/user/Navya">User: Navya</Link></li>
          <li><Link to="/user/Anushri">User: Anushri</Link></li>
          <li><Link to="/github-user">GitHub User Finder</Link></li>
          <li><Link to="/window-size">Window Size Tracker</Link></li>
          <li><Link to="/props-drill">Props Drilling Demo</Link></li>
          {/* Add more links as you build */}
        </ul>
      </nav>

      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
