import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './assets/NavBar';
import Login from './assets/Login';
import Footer from './assets/Footer';
import ForgotPassword from './assets/ForgotPassword';
import Register from './assets/Register'
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="login-center">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
