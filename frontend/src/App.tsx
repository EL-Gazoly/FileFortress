import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const LazyDashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <div className="App bg-black">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<LazyDashboard />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
