import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';//rfce
import React,{useEffect,useState} from 'react';
/* import Modal from './components/Modal'; */
import Alert from './components/Alert';
import PortalButton from './components/PortalButton';
import { Suspense } from 'react';
import MyFruits from './components/Fruits';

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
  const [count, setCount] = useState(10);

  const [color, setColor] = useState("White");

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
useEffect(() => {
  setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
});

  return(   
 <>
 <Router>
  <Navbar title="Textutils" aboutext="about" mode={mode}  togglemode={togglemode} />

 <Alert alert={alert}/>
 <div className="container my-3">
   {/*./users.-->.Component-1 
   /users/home.-->.-->.component.2 */}
     <Routes >
      <Route path="/" element=
      { <TextForm heading="Enter the text to analyze" showAlert={showAlert}/> }/>
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

 

     <div className='container text-center my-3'
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

    <div >
      <Suspense className='container text-center my-3' fallback={<div>Loading......</div>}>
         <MyFruits/>
      </Suspense>
    </div>
    
    <h1>I've rendered {count} times!</h1>;

  <div  className='container text-center my-3'>

    <h1> My color is {color}</h1>
    <button type="button" onDoubleClick={() => setColor("Blue")}>
        Blue
    </button>

    <button type="button" onDoubleClick={() => setColor("White")}>
        White
    </button>

    <button type="button" onDoubleClick={()=> setColor("Pink")}>
        Pink
    </button>

    <button type="button" onDoubleClick={() => setColor("Green")}>
        Green
    </button>
    </div>
 
</>
);
   };
export default App;
