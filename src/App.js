import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Newsitem from './component/Newsitem';
import About from './component/About'; // Import the About component

function App() {
  let [mode, setMode] = useState('light');

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
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Newsitem />
      <About /> {/* Render the About component */}
    </>
  );
}

export default App;
