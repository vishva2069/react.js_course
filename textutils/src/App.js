import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';


 
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (Message,type)=>{
   setAlert({
      msg: Message,
      type: type
     
   })
  }
  const togglemode = () => {
   if (mode === 'light') {
      setMode('dark');
     document.body.style.backgroundColor = '#04273';
     showAlert("Dark mode has been enabled" , "sucess");
   } else {
      setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enabled")
   }
 };
  return(
 <>
 
  <Navbar title="Textutils" aboutext="about us " mode={mode} togglemode={togglemode} showAlert={showAlert}/>
 {/* /*  <Navbar/>
  <Navbar title="Textutils" /> */ }
 <Alert  alert={alert}/>

 <div className="container my-3">
  <TextForm heading="Enter the text to analyze"  showAlert={showAlert}/>
  </div>
  <About className="container"/>
 
 
 </>

);
   };
export default App;