// import logo from './logo.svg';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const switchMode = () => {
    if (mode === "light") {
      setMode("dark");
      setbtnText("Disable Dark Mode");
    } else {
      setMode("light");
      setbtnText("Enable Dark Mode");
    }
  }


  return (
    <Router>
      <>
        <Navbar title="Asraful's Portfolio" mode={mode} switchMode={switchMode} btnText={btnText} />
      </>
      <Routes>

        <Route exact path="/" element={<Profile mode={mode} />}/>
        <Route exact path="/skills" element={<Skills mode={mode}/>} />
      </Routes>
    </Router>
  );
}

export default App;
