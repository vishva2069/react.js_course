import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

 
function App() {
    const [darkmode, setDarkmode] = useState('dark');
  return(
 <>
  <Navbar title="Textutils" aboutext="about us "  mode={darkmode}/>
 {/* /*  <Navbar/>
  <Navbar title="Textutils" /> */ }
 <div className="container my-3">
  <TextForm heading="Enter the text to analyze"/>
  </div>
  <About/>

  <div className="container">
   <about></about>
  </div>
 </>

);
   }
export default App;