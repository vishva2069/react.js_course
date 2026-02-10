import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';//rfce
import React,{useState} from 'react';
/* import Modal from './components/Modal'; */
import Alert from './components/Alert';
import PortalButton from './components/PortalButton';

import {
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom";
  
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
/*   const [isOpen, setIsOpen] = useState(false); */
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
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
   

 <Router>
  <Navbar title="Textutils" aboutext="about" mode={mode}  togglemode={togglemode} />
{/*  <Navbar title="textutils"/> */}
 <Alert alert={alert}/>
 <div className="container my-3">
   {/*./users.-->.Component-1 
   /users/home.-->.-->.component.2 */}
     <Routes >
      <Route path="/" element=
      { <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/> }/>
       <Route path="/about" element={<About />} />
</Routes>
   
  </div>
 </Router>
{/*  <div className='container text-center my-3'>
       <h1>My App</h1>
 
       <button className="btn btn-success"onClick={() => setIsOpen(true)}>
         Open Modal
       </button>
 
       <Modal 
         isOpen={isOpen} 
         onClose={() => setIsOpen(false)}
       >
         <h2>Modal Content</h2>
         <p>This content is rendered outside the App component!</p>
       </Modal>
 
     </div> 
 */}
     <div
      style={{
        padding: '20px',
        border: '2px solid black',
        margin: '20px'
      }}
      onClick={() => {
        setCount1(c => c + 1);
      }}>
      <h2>Div Clicked: {count1}</h2>
      <h2>Button Clicked: {count2}</h2>      
      <p>The floating button is rendered outside this box using a portal,
          but its clicks still bubble up to this parent div!</p>
      <p>Try to click the div element as well, to see the count increase</p>
      
      <PortalButton
        onClick={(e) => {
          // This runs first
          setCount2(c => c + 1);
        }}>
        Floating Button
      </PortalButton>
    </div>
</>
);
   };
export default App;