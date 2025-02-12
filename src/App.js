import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import User from './pages/User';

function App() {

  // render
  return (
    <div>
      <nav className="App-header">
        <p>ONLINE BNK LTD</p>
      </nav>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
      <footer>
        <p>By Uchenna Onwuliri - austin.Onwuliri@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
