import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import TextInputPage from "./pages/TextInputPage";
import AdditionPage from "./pages/AdditionPage";
import UserDetailPage from "./pages/UserDetailPage";
import GitHubUser from "./pages/GitHubUser";
import PropsDrillPage from "./pages/PropsDrillPage";
import WindowSizePage from "./pages/WindowSizePage";
import CounterPage from "./pages/CounterPage";
import FastAPIDemo from './pages/FastAPIDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="text-input" element={<TextInputPage />} />
          <Route path="addition" element={<AdditionPage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="user/:username" element={<UserDetailPage />} />
          <Route path="github-user" element={<GitHubUser />} />
          <Route path="window-size" element={<WindowSizePage />} />
          <Route path="props-drill" element={<PropsDrillPage />} />
          <Route path="/fastapi" element={<FastAPIDemo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
