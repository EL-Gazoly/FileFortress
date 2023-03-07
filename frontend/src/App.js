
import './App.css';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Auth from './pages/Auth/Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Auth signUp_or_signIn={'sign_up'} />} />
          <Route path="/login" element={<Auth signUp_or_signIn={'sign_in'} />} />

        </Routes>
      </Router>      
    </div>
  );
}

export default App;
