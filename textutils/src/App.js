import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


 
function App() {
 
  return(
 <>
 
  <Navbar title="Textutils" aboutext="about us "/>
 {/* /*  <Navbar/>
  <Navbar title="Textutils" /> */ }

 <div className="container my-3">
  <TextForm heading="Enter the text to analyze"/>
  </div>
  <About className="container"/>
 
 
 </>

);
   };
export default App;