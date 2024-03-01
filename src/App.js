import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Newsitem from './component/Newsitem';
import About from './component/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(5 39 58)';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <Router>
      <div>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Newsitem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
