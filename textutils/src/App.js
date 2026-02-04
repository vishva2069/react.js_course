import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';//rfce
import React,{useState} from 'react';



function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
   if (mode === 'light') {
      setMode('dark');
     document.body.style.backgroundColor = '#04273';
     document.title = 'Textutils - Dark Mode';
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
   }
}
  return(
 <>
 
  <Navbar title="Textutils" aboutext="about us " mode={mode} togglemode={togglemode}/>
 {/* /*  <Navbar/>
  <Navbar title="Textutils" /> */ }


 <div className="container my-3">
  <TextForm heading="Enter the text to analyze" />
  </div>
  <About className="container"/>

 

 
 
 </>

);
   };
export default App;