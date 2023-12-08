
import { useState } from 'react';
import './App.css'
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import Alert from './Components/Alert';
import {
  
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light")
  const [alert,setAlert] = useState(null)

  const ShowAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode =() =>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      ShowAlert("Dark Mode Enabled!", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      ShowAlert("Light Mode Enabled!", "success")
    }
  }
  return (
    <>
<Navbar mode = {Mode} toggleMode= {toggleMode}/>
<Alert alert = {alert}/>

  <Routes>
          <Route exact path="/about" element= {<About mode = {Mode}/>}/>
          <Route exact path="/" element= {<Textbox mode = {Mode} alert = {ShowAlert}/>}/>

  </Routes>
  </>
  );
}

export default App;
