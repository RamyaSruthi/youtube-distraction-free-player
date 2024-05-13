// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PlayerPage from './PlayerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/player" element={<PlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
