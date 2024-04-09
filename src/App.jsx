import React from 'react';
 import './App.css';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Login from './Components/Login';
import ForgotPw from './Components/ForgotPw';
function App() {
  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/forgot" element={<ForgotPw/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
