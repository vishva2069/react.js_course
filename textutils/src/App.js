import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
/* import About from './components/About';//rfce */
import React,{useState} from 'react';
import Alert from './components/Alert';
/* import {
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom"; */
 
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
   setAlert({
      msg: message,
      type: type,
      
   })
  }

  const togglemode = () => {
   if (mode === 'light') {
      setMode('dark');
     document.body.style.backgroundColor = '#04273';
     document.title = 'Textutils - Dark Mode';
     showAlert("Dark mode has been enabled","success")
     setInterval(() => {
      document.title = 'textutils is amazing like this';
     }, 2500);
     setInterval(() => {
      document.title = 'install textutils is amazing like this to style';
     }, 1500);
   } else {
      setMode('light');
     document.body.style.backgroundColor = 'white';
     document.title = 'Textutils - Light Mode';
     showAlert("light mode has been enabled","success")

   }
}
  return(   
 <>
{/*  <Router> */}
  <Navbar title="Textutils" aboutext="about" mode={mode} togglemode={togglemode} />
 {/* /*  <Navbar/>
  <Navbar title="Textutils" /> */ }
 
 <Alert alert={alert}/>
 <div className="container my-3">
   {/*./users.-->.Component-1 
   /users/home.-->.-->.component.2 */}
    {/*  <Routes > */}
      {/* <Route exact path="/"> */}
       <TextForm heading="Enter the text to analyze" showAlert={showAlert}/>

{/* </Routes> */}
   {/* <About className="container"/> */}
  </div>
{/*  </Router> */}
</>
);
   };
export default App;