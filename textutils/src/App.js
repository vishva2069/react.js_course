import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';

 
function App() {
   const [alert, setAlert] = useState(null);

   showAlert = (message,type) => {
      setAlert({
         msg: message,
         type : type,
      })
   }
   
  return(
 <>
 
  <Navbar title="Textutils" aboutext="about us "/>
 {/* /*  <Navbar/>
  <Navbar title="Textutils" /> */ }
  <Alert Alert="the discription to like a style usings before navigation"></Alert>

 <div className="container my-3">
  <TextForm heading="Enter the text to analyze"/>
  </div>
  <About className="container"/>
  <Alert alert={alert}/>
 
 </>

);
   };
export default App;