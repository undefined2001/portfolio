// import logo from './logo.svg';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setbtnText] = useState("Enable Dark Mode");

    const switchMode = ()=>{
        if (mode === "light"){
            setMode("dark");
            setbtnText("Disable Dark Mode");
          }else{
            setMode("light");
            setbtnText("Enable Dark Mode");
        }
    }
    

  return (
    <>
    <Navbar  title = "Asraful's Portfolio" mode = {mode} switchMode = {switchMode} btnText = {btnText}/>
    <Profile mode = {mode}/>
    </>
  );
}

export default App;
