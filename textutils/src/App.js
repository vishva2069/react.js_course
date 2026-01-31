import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform ';



function App() {
  return(
 <>
  <Navbar title="Textutils" aboutext="about us " />
 {/* /*  <Navbar/>
  <Navbar title="Textutils" /> */ }

<div className="container my-3">
<Textform  heading="enter the text to analyze below"/>
</div>

 </>

);
   }
export default App;